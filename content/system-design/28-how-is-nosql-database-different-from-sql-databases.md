---
title: How is NoSQL database different from SQL databases?
tags: ["system design"]
languages: [""]
---

## How is NoSQL database different from SQL databases?

NoSQL (which stands for "Not Only SQL") databases are a class of database management systems that differ from traditional SQL (Structured Query Language) databases in several ways. These differences primarily stem from the fact that NoSQL databases are designed to handle unstructured or semi-structured data and are often used in scenarios where scalability, flexibility, and speed are critical. Here are some key differences between NoSQL and SQL databases:

1. Data Model:

   - SQL databases are relational databases, which means they store data in structured tables with predefined schemas. Data is organized into rows and columns.
   - NoSQL databases use various data models, such as document-based, key-value, column-family, or graph-based. These models allow for more flexible and dynamic data structures.

2. Schema:

   - SQL databases require a rigid schema that defines the structure of the data before it is inserted. Any changes to the schema typically require altering tables and can be time-consuming.
   - NoSQL databases are schema-less or have a dynamic schema, meaning you can add new fields to documents or records without altering the entire database structure.

3. Query Language:

   - SQL databases use the SQL query language for data retrieval and manipulation. SQL provides a powerful and standardized way to interact with relational data.
   - NoSQL databases often have their query languages or APIs specific to their data model. Queries may not be as expressive as SQL but are tailored to the database's particular data structure.

4. Scalability:

   - SQL databases are typically scaled vertically by adding more resources (CPU, RAM, etc.) to a single server. This can be expensive and has limitations in terms of scalability.
   - NoSQL databases are designed for horizontal scalability. You can distribute data across multiple servers or nodes to handle large amounts of data and high traffic loads more easily.

5. ACID vs. BASE:

   - SQL databases follow the ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring strict data consistency and reliability.
   - NoSQL databases follow the BASE (Basically Available, Soft state, Eventually consistent) model, which prioritizes availability and partition tolerance over strict consistency. This makes them suitable for scenarios where eventual consistency is acceptable.

6. Use Cases:
   - SQL databases are well-suited for applications with structured and well-defined data, such as financial systems, ERP (Enterprise Resource Planning) software, and traditional relational data storage.
   - NoSQL databases are often chosen for applications with large amounts of semi-structured or unstructured data, such as social media, content management systems, real-time analytics, and IoT (Internet of Things) applications.

- [Go back](../readme.md)
