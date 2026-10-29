1. Most Challenging Part
Async Error Handling: Managing async/await flows and returning structured JSON error responses without crashing the app.

Input Validation: Safely parsing URL route parameters and validating unique constraints like email uniqueness during updates.
2. TypeORM vs. Raw SQL
TypeScript Entities: Maps database tables directly to classes, avoiding manual SQL string queries.

Type Safety & Auto-complete: Reduces runtime errors with strong typing for queries and relations.
3. Hiding Passwords & ImplementationWhy: Protects sensitive user credentials from leaking in API responses or logs.Implementation:Added { select: false } to the password entity column.   Used destructuring in the controller to omit password from the JSON response object (const { password: _, ...userWithoutPassword } = savedUser).   
4. When to Use Transactions
Scenario: E-commerce checkout (creating an order, deducting inventory, charging balance).

Why: Ensures all operations succeed together or fail/rollback entirely, preventing corrupted data.
5. synchronize: true vs. Migrationssynchronize: true: Automatically updates database schema on app start. Use only in development.   Migrations: Version-controlled SQL scripts for manual schema changes. Use in production to prevent accidental data loss.
6. Adding a Product Entity (One-to-Many)Product Entity: Add @ManyToOne(() => User, (user) => user.products).User Entity: Add @OneToMany(() => Product, (product) => product.user) products!: Product[];.Config: Register Product inside the entities array in data-source.ts.   
7. Security Improvements for Production
Password Hashing: Hash passwords using bcrypt or argon2.

Authentication: Protect endpoints using JWT or session tokens.

Rate Limiting & Validation: Use express-rate-limit to prevent brute-force attacks and validate input with class-validator.

Environment: Set NODE_ENV=production, turn off synchronize, and restrict CORS origins.



7.1
1. Most Challenging Part
Async Error Handling: Managing asynchronous promise flows and returning consistent, structured JSON error responses without crashing the app.

Input Validation: Safely parsing URL route parameters and enforcing constraints (like email uniqueness) across create and update endpoints.
2. TypeORM vs. Raw SQLTypeScript Entities: Maps database tables directly to classes and uses repository methods (find, save) instead of manual SQL strings.   Type Safety: Provides strong typing across queries and entities, preventing runtime typos in table or column names.
3. Excluding Passwords & ImplementationWhy: Prevents sensitive user credentials from leaking in API responses, network logs, or client-side storage.Implementation: Set { select: false } on the entity password column and used object destructuring in controllers to strip password before returning responses (const { password: _, ...userWithoutPassword } = savedUser).   
4. Database Transactions
Scenario: E-commerce checkout (creating an order, deducting stock, debiting account balance).

Why: Guarantees atomicity—if one step fails, all previous operations roll back, preventing corrupted or inconsistent data.
5. synchronize: true vs. Migrationssynchronize: true: Automatically updates database schema on app startup. Use only in development.   Migrations: Version-controlled SQL scripts for manual, controlled schema updates. Use in production to prevent accidental data loss.
6. Adding a Comment Entity (One-to-Many)
Comment Entity: Define fields and add @ManyToOne(() => Task, (task) => task.comments).

Task Entity: Add @OneToMany(() => Comment, (comment) => comment.task) comments!: Comment[];
7. Security Improvements for Production
Password Hashing: Hash passwords using bcrypt or argon2 before saving.

Auth & Rate Limiting: Protect endpoints with JWT/cookies and use express-rate-limit against brute-force attacks.

Environment: Set NODE_ENV=production, turn off synchronize, restrict CORS, and use helmet.
8. The ! (Definite Assignment Operator)Satisfies TypeScript's strictPropertyInitialization rule by telling the compiler the property will be assigned at runtime by TypeORM rather than in a constructor.   
9. Explicit Column Types (type: 'varchar')
Ensures cross-database compatibility and enforces database-level integrity (such as exact column types and max character lengths).
10. TypeORM Relationships vs. Raw SQL Foreign Keys
Difference: TypeORM abstracts foreign keys and SQL JOIN clauses into object-oriented decorators (@ManyToOne, @OneToMany) and TypeScript properties.

Advantages: Simplifies nested entity loading (relations: ['comments']), provides compile-time type safety, and eliminates manual SQL JOIN queries.