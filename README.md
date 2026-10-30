1. What was the most challenging part of building this API?
Lenghty lines in which i had to know which are is which especially debugging

2. How does TypeORM make database operations easier compared to raw SQL?
TypeORM is an Object-Relational Mapper (ORM) designed for TypeScript and JavaScript that acts as a bridge between your application code and your relational database.

3. Why is it important to exclude the password field from API responses? How did you implement this?
Excluding the password field even if it is hashed and salted from API responses is a fundamental security best practice for several reasons:

4. Describe a scenario where you would need to use database transactions instead of individual operations.
You would use database transactions during an e-commerce checkout process—such as simultaneously deducting inventory, creating an order, and charging a user's wallet—to ensure that a failure in any single step automatically rolls back all changes, preventing severe data inconsistency.
 
5. What is the difference between `synchronize: true` and migrations? When should you use each?
synchronize: true automatically updates the database schema from your entity code on every app startup—making it suitable only for local prototyping due to the high risk of data loss—whereas migrations use explicit, version-controlled scripts to safely and predictably manage schema changes in production and team environments.

6. If you had to add a `Product` entity with a relationship to `User` (a user can have many products), how would you modify the code?
You would add a Product entity containing a @ManyToOne relation decorator pointing to the User, and update the User entity to include a corresponding @OneToMany relation decorator mapping back to its products.

7. What security improvements would you make before deploying this API to production? (Hint: password hashing, rate limiting, authentication, etc.)
