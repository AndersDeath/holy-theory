---
title: CAP theorem
tags: ['system design']
languages: ['']
---
## CAP theorem

CAP theorem, also known as Brewer's theorem, has become a fundamental principle in the design and operation of distributed systems. Let's delve deeper into each aspect of the theorem and explore real-world examples and implications.

### 1. **Consistency:**
Consistency in the context of CAP theorem means that all nodes in a distributed system have the same data at any given point in time. Ensuring consistency often involves coordination and synchronization between nodes. Strongly consistent systems guarantee that once a piece of data is written, all subsequent reads will return that value.

   - **Example:** Traditional relational databases (like MySQL, PostgreSQL) often prioritize consistency. When a transaction is committed, the database ensures that the changes are immediately visible to all subsequent queries.

### 2. **Availability:**
Availability refers to the ability of the system to respond to every request, without any downtime. Highly available systems remain operational and responsive, even in the face of failures.

   - **Example:** NoSQL databases like Cassandra and Couchbase emphasize availability. They are designed to operate without interruption even if some of their nodes fail, ensuring that the service is always accessible.

### 3. **Partition Tolerance:**
Partition tolerance means that the system continues to function even if network partitions occur, i.e., if communication between nodes is unreliable or slow. Partition tolerance is crucial for distributed systems because network failures are inevitable in real-world scenarios.

   - **Example:** Distributed systems like Hadoop and Apache Kafka prioritize partition tolerance. They are built to handle network partitions and communication delays between nodes, ensuring the system's stability under adverse network conditions.

### Real-World Scenarios and Trade-Offs:

- **RDBMS (Relational Database Management Systems):** Traditional SQL databases are typically designed for consistency and availability. They sacrifice partition tolerance to ensure data integrity and accuracy. This means that in the event of a network partition, these systems might not be fully operational.

- **NoSQL Databases (Cassandra, Couchbase, MongoDB, Redis):** NoSQL databases often choose to sacrifice consistency under certain conditions to achieve high availability and partition tolerance. They provide eventual consistency, meaning that given enough time, all nodes in the system will converge to a consistent state, but immediate consistency might be compromised.

- **NewSQL Databases:** Some modern databases like Google Spanner and CockroachDB attempt to provide a balance between consistency, availability, and partition tolerance. They use innovative techniques like synchronized clocks and distributed transactions to achieve global consistency while maintaining high availability and partition tolerance.

### Considerations for System Architects:

1. **Understanding Requirements:** Architects need to assess the specific needs of their applications. Some applications, like banking systems, require strict consistency, while others, like social media platforms, can tolerate eventual consistency.

2. **Tuning for Trade-Offs:** Architects often need to make trade-offs based on the CAP theorem. For instance, during network partitions, architects might choose to sacrifice consistency temporarily to maintain system availability.

3. **Hybrid Approaches:** In many real-world scenarios, hybrid approaches are adopted. Different parts of the system might prioritize different aspects of the CAP theorem based on their requirements. For example, a system might use a consistent database for financial transactions while employing an eventually consistent database for non-critical data.

In summary, the CAP theorem provides a valuable framework for understanding the inherent trade-offs in distributed systems. Architects and developers must carefully consider these trade-offs based on the specific requirements and use cases of their applications.

![CAP theorem](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/02-cap-theorem.png)

* [Go back](../readme.md)