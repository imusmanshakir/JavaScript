# JavaScript provides a rich set of built-in methods for working with arrays, enabling efficient manipulation and iteration of array elements. These methods can be broadly categorized based on their functionality:

# 1. ---------------Mutator Methods (Modify the original array):------------

# push(...items): Adds one or more elements to the end of an array and returns the new length.

# pop(): Removes the last element from an array and returns that element.

# shift(): Removes the first element from an array and returns that element.

# unshift(...items): Adds one or more elements to the beginning of an array and returns the new length.

# splice(start, deleteCount, ...items): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

# sort(compareFunction): Sorts the elements of an array in place. 

# reverse(): Reverses the order of the elements in an array in place.

# fill(value, start, end): Fills all the elements of an array from a start index to an end index with a static value.

# ------------------------------------------------------------------------------------------

# 2. -------Accessor Methods (Return new arrays or values without modifying the original array):-----------------------------

# concat(...arrays): Merges two or more arrays and returns a new array.

# slice(start, end): Extracts a section of an array and returns a new array.

# indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found  in the array, or -1 if it is not present.

# lastIndexOf(searchElement, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

# includes(searchElement, fromIndex): Determines whether an array includes a certain value among its entries, returning true or false.

# join(separator): Joins all elements of an array into a string.

# toString(): Returns a string representing the specified array and its elements. 


# 3. --------------------Iteration Methods (Execute a callback function for each element):------------------

# forEach(callback): Executes a provided function once for each array element.

# map(callback): Creates a new array populated with the results of calling a provided function on every element in the calling array. 

# filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.

# reduce(callback, initialValue): Executes a reducer function on each element of the array, resulting in a single output value.

# every(callback): Tests whether all elements in the array pass the test implemented by the provided function.

# some(callback): Tests whether at least one element in the array passes the test implemented by the provided function. 

# find(callback): Returns the value of the first element in the array that satisfies the provided testing function. 

# findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function. 