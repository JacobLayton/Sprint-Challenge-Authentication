<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
*Middleware is software that acts as a bridge between a database or operating system and applications.
*A session is a place to store data that you want accesss to across requests. Each user that visits your website has a unique session.
*Bcrypt is a cross-platform encryption utility which hashes passwords.
*JWT (JSON Web Tokens) is a secure and self-contained way for trasmitting information between parties as a JSON object.

2.  What does bcrypt do in order to prevent attacks?
*Bcrypt hashes passwords, which is a method of encryption that increases the algorithm iteration count over time and incorporates "salt". This protects against rainbow table attacks and brute-force search attacks.

3.  What are the three parts of the JSON Web Token?
*Header
*Payload
*Signature