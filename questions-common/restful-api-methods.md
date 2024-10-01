---
title: RESTful API methods
tags: ["question", "interview", "theory", "computer-science", "network"]
languages: [""]
---

# RESTful API methods

![RESTful API methods](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/04-restful-api-methods.png)

A RESTful API (Representational State Transfer) uses standard HTTP methods to perform operations on resources, which are often represented as URIs (Uniform Resource Identifiers). Here are the main RESTful methods and their typical use cases:

### 1. **GET**
   - **Purpose**: Retrieve data from the server.
   - **Usage**: Access a specific resource (e.g., `GET /users/123` retrieves data for user 123) or a collection (e.g., `GET /users` retrieves a list of users).
   - **Idempotent**: Yes (multiple calls yield the same result).
   - **Safe**: Yes (doesn’t modify the resource).

### 2. **POST**
   - **Purpose**: Create a new resource on the server.
   - **Usage**: Submit data (e.g., `POST /users` with a request body to create a new user).
   - **Idempotent**: No (repeating it could create multiple resources).
   - **Safe**: No (it modifies data).

### 3. **PUT**
   - **Purpose**: Update an existing resource or create it if it doesn't exist.
   - **Usage**: Replace an entire resource (e.g., `PUT /users/123` to update user 123).
   - **Idempotent**: Yes (calling it multiple times has the same effect as one call).
   - **Safe**: No (it modifies data).

### 4. **PATCH**
   - **Purpose**: Partially update an existing resource.
   - **Usage**: Modify specific fields of a resource without replacing the entire resource (e.g., `PATCH /users/123` to update only the name of user 123).
   - **Idempotent**: Yes (repeating it yields the same result).
   - **Safe**: No (it modifies data).

### 5. **DELETE**
   - **Purpose**: Delete a resource from the server.
   - **Usage**: Remove a specific resource (e.g., `DELETE /users/123` deletes user 123).
   - **Idempotent**: Yes (if the resource is already deleted, repeating it has no effect).
   - **Safe**: No (it modifies data by removing it).

Each method has a unique purpose and a specific impact on the resources. Following REST conventions helps ensure that APIs are predictable, easy to use, and consistent across different services.