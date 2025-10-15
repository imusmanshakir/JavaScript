+-------------------------------------------------------------+
|                       START: Quick Review                    |
| - JS function basics, closures, this, scope                  |
| - Objects & references, spread/rest, destructuring           |
| PRACTICE: convert a small data model from object-literal to |
| plain functions + closures                                    |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|                  1) Prototype & Prototype Chain             |
| - Object.prototype, __proto__, [[Prototype]] lookup         |
| - prototype vs instance properties                           |
| - property lookup order, shadowing                            |
| PRACTICE: implement method lookup demo (obj -> prototype)    |
| EXERCISE: create objectA -> prototypeB via Object.create()   |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|             2) Constructor Functions (pre-ES6 style)         |
| - function Foo() { this.x = 1 }                              |
| - Foo.prototype.method = ...                                 |
| - new keyword behavior (this binding, return override)       |
| PRACTICE: write constructor, add prototype methods, explain  |
| instanceof checks                                             |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|                      3) ES6 Classes                          |
| - class syntax, constructor(), methods, static methods       |
| - extends, super(), prototype chain under the hood           |
| - class fields (public)                                       |
| PRACTICE: rewrite constructor pattern using class syntax     |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|                 4) Inheritance & Subtyping                   |
| - prototypal inheritance vs classical appearance             |
| - method overriding, super calls                             |
| - instanceof, isPrototypeOf, duck typing                     |
| PRACTICE: build Animal -> Dog -> ServiceDog with overrides   |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|                 5) Encapsulation & Privacy                   |
| - private class fields (#field), private methods             |
| - WeakMap/closure-based private data                          |
| - Symbols for hidden props                                    |
| PRACTICE: implement private data via #fields and via closure |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|                 6) Polymorphism & Interfaces                 |
| - polymorphic method calls (same API, different behavior)    |
| - "interfaces" by convention (duck typing)                   |
| PRACTICE: implement Renderer interface for Canvas + SVG      |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|           7) Composition, Delegation & Mixins                |
| - favor composition over inheritance                          |
| - object composition patterns, small reusable behaviors      |
| - mixins via Object.assign / functions                       |
| PRACTICE: refactor inheritance-heavy model into composed     |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|            8) Common OOP Patterns in JS                      |
| - Factory, Singleton (module), Observer (pub/sub)            |
| - Strategy, Decorator, Adapter                               |
| PRACTICE: implement Observer for event handling              |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|           9) Memory, Performance & Debugging                 |
| - avoid accidental shared mutable prototype state            |
| - check closures & retained references (memory leaks)        |
| - profiling constructors vs object literals                  |
| PRACTICE: find memory leak in event-heavy demo               |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|       10) Testing, Types & Tooling                           |
| - unit tests for classes (Jest / vitest)                     |
| - TypeScript interfaces & classes (optional)                 |
| - linters (ESLint), doc comments                             |
| PRACTICE: add tests for class behaviors + edge cases         |
+-------------------------------------------------------------+
                      |
                      v
+-------------------------------------------------------------+
|        FINAL: Projects & Capstone Ideas (apply OOP)         |
| - Build a tiny game engine: Entity, Component, System       |
| - Task manager with pluggable storage/strategy               |
| - Mini UI component library (stateful components + events)   |
| CHECK: include tests, use composition, and document design   |
+-------------------------------------------------------------+
