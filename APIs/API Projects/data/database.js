// Modern ES6+ database simulation
const users = [
  {
    id: 1,
    email: 'demo@example.com',
    passwordHash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    name: 'Demo User',
    createdAt: new Date().toISOString()
  }
];

const todos = [
  {
    id: 1,
    userId: 1,
    title: 'Learn REST APIs',
    description: 'Build my first API project',
    status: 'completed',
    priority: 'high',
    dueDate: '2024-08-20',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    userId: 1,
    title: 'Build Modern Todo API',
    description: 'Create a complete todo list API with ES6+',
    status: 'in_progress',
    priority: 'high', 
    dueDate: '2024-08-25',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Using let for mutable variables
let nextUserId = 2;
let nextTodoId = 3;

// Modern export syntax
export { users, todos, nextUserId, nextTodoId };

// Utility functions with arrow functions
export const findUserByEmail = (email) => 
  users.find(user => user.email === email);

export const findTodoById = (id, userId) => 
  todos.find(todo => todo.id === id && todo.userId === userId);

export const getUserTodos = (userId) => 
  todos.filter(todo => todo.userId === userId);