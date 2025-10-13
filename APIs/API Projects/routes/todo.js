import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticateToken } from '../middleware/auth.js';
import { todos, nextTodoId, getUserTodos, findTodoById } from '../data/database.js';

const router = express.Router();

// All routes require authentication
router.use(authenticateToken);

// Modern validation with array destructuring
const validateTodo = [
  body('title')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Title must be between 1 and 255 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description must be less than 1000 characters'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium, or high'),
  body('status')
    .optional()
    .isIn(['pending', 'in_progress', 'completed'])
    .withMessage('Status must be pending, in_progress, or completed'),
  body('dueDate')
    .optional()
    .isISO8601()
    .withMessage('Due date must be a valid ISO 8601 date')
];

// GET /api/todos - Get all todos with modern filtering
router.get('/', (req, res) => {
  const userId = req.user.userId;
  const {
    status,
    priority,
    search,
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    order = 'desc'
  } = req.query;

  // Get user todos using utility function
  let userTodos = getUserTodos(userId);

  // Modern filtering with optional chaining
  if (status) userTodos = userTodos.filter(todo => todo.status === status);
  if (priority) userTodos = userTodos.filter(todo => todo.priority === priority);
  if (search) {
    const searchLower = search.toLowerCase();
    userTodos = userTodos.filter(todo => 
      todo.title.toLowerCase().includes(searchLower) ||
      todo.description?.toLowerCase().includes(searchLower)
    );
  }

  // Modern sorting with template literals
  userTodos.sort((a, b) => 
    order === 'asc' 
      ? a[sortBy] > b[sortBy] ? 1 : -1
      : a[sortBy] < b[sortBy] ? 1 : -1
  );

  // Modern pagination with Number conversion
  const pageNum = Number(page);
  const limitNum = Number(limit);
  const startIndex = (pageNum - 1) * limitNum;
  const paginatedTodos = userTodos.slice(startIndex, startIndex + limitNum);

  res.json({
    success: true,
    data: paginatedTodos,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total: userTodos.length,
      totalPages: Math.ceil(userTodos.length / limitNum),
      hasNext: (startIndex + limitNum) < userTodos.length,
      hasPrev: pageNum > 1
    },
    filters: { status, priority, search, sortBy, order }
  });
});

// GET /api/todos/:id - Get single todo
router.get('/:id', (req, res) => {
  const todoId = Number(req.params.id);
  const userId = req.user.userId;

  const todo = findTodoById(todoId, userId);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found'
    });
  }

  res.json({
    success: true,
    data: todo
  });
});

// POST /api/todos - Create new todo
router.post('/', validateTodo, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }

  const { title, description, priority = 'medium', status = 'pending', dueDate } = req.body;
  const userId = req.user.userId;

  const newTodo = {
    id: nextTodoId++,
    userId,
    title: title.trim(),
    description: description?.trim() || null,
    priority,
    status,
    dueDate: dueDate || null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  todos.push(newTodo);

  res.status(201).json({
    success: true,
    message: 'Todo created successfully',
    data: newTodo
  });
});

// PUT /api/todos/:id - Update entire todo
router.put('/:id', validateTodo, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }

  const todoId = Number(req.params.id);
  const userId = req.user.userId;
  const { title, description, priority, status, dueDate } = req.body;

  const todoIndex = todos.findIndex(t => t.id === todoId && t.userId === userId);

  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found'
    });
  }

  // Modern object spread with template literals
  todos[todoIndex] = {
    ...todos[todoIndex],
    title: title.trim(),
    description: description?.trim() || null,
    priority,
    status,
    dueDate: dueDate || null,
    updatedAt: new Date().toISOString()
  };

  res.json({
    success: true,
    message: 'Todo updated successfully',
    data: todos[todoIndex]
  });
});

// PATCH /api/todos/:id - Partial update with modern syntax
router.patch('/:id', (req, res) => {
  const todoId = Number(req.params.id);
  const userId = req.user.userId;

  const todoIndex = todos.findIndex(t => t.id === todoId && t.userId === userId);

  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found'
    });
  }

  const allowedUpdates = ['title', 'description', 'priority', 'status', 'dueDate'];
  const updates = req.body;
  
  // Modern array methods
  const hasValidUpdate = Object.keys(updates).some(key => allowedUpdates.includes(key));

  if (!hasValidUpdate) {
    return res.status(400).json({
      success: false,
      message: 'No valid fields to update'
    });
  }

  // Modern Object.entries with forEach
  Object.entries(updates).forEach(([key, value]) => {
    if (allowedUpdates.includes(key)) {
      todos[todoIndex][key] = ['title', 'description'].includes(key) 
        ? value?.trim() || value 
        : value;
    }
  });

  todos[todoIndex].updatedAt = new Date().toISOString();

  res.json({
    success: true,
    message: 'Todo updated successfully',
    data: todos[todoIndex]
  });
});

// DELETE /api/todos/:id - Delete todo
router.delete('/:id', (req, res) => {
  const todoId = Number(req.params.id);
  const userId = req.user.userId;

  const todoIndex = todos.findIndex(t => t.id === todoId && t.userId === userId);

  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found'
    });
  }

  const [deletedTodo] = todos.splice(todoIndex, 1);

  res.json({
    success: true,
    message: 'Todo deleted successfully',
    data: deletedTodo
  });
});

// GET /api/todos/stats/summary - Modern statistics
router.get('/stats/summary', (req, res) => {
  const userId = req.user.userId;
  const userTodos = getUserTodos(userId);

  // Modern object shorthand
  const stats = {
    total: userTodos.length,
    completed: userTodos.filter(t => t.status === 'completed').length,
    inProgress: userTodos.filter(t => t.status === 'in_progress').length,
    pending: userTodos.filter(t => t.status === 'pending').length,
    byPriority: {
      high: userTodos.filter(t => t.priority === 'high').length,
      medium: userTodos.filter(t => t.priority === 'medium').length,
      low: userTodos.filter(t => t.priority === 'low').length
    }
  };

  res.json({
    success: true,
    data: stats
  });
});

export default router;