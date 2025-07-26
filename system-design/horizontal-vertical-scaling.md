---
title: Horizontal and vertical scaling
tags: ["system design"]
languages: [""]
---

# Horizontal and vertical scaling

**Horizontal and vertical scaling** are two approaches to increase a system's capacity to handle more load or user requests. Both methods are used in cloud and server infrastructure to meet the performance and demand requirements, but they differ in their approaches.

### 1. **Horizontal Scaling (Scaling Out)**

Horizontal scaling, also known as "scaling out," involves adding more servers or nodes to the system to distribute the load. This approach is commonly used in distributed systems and cloud environments.

- **How it works**: Instead of increasing the capacity of a single server, horizontal scaling involves adding multiple servers or instances that work together. Load balancers are typically used to distribute the load evenly across these instances.
- **Benefits**:
  - **Fault Tolerance**: If one server fails, others can continue to handle requests, improving the system’s resilience.
  - **Scalability**: Horizontal scaling can theoretically scale indefinitely, as long as the infrastructure can support additional instances.
  - **Cost-Efficient for Cloud Services**: Many cloud services (like AWS, Google Cloud, and Azure) offer flexible horizontal scaling, where new instances are added as needed and removed when demand decreases.
- **Example**: An e-commerce platform that adds more web servers to handle increased traffic during peak shopping periods.

### 2. **Vertical Scaling (Scaling Up)**

Vertical scaling, also known as "scaling up," involves adding more resources (such as CPU, RAM, or storage) to an existing server to handle a higher load.

- **How it works**: Instead of adding more servers, vertical scaling increases the power of a single server by upgrading its hardware or allocating additional resources.
- **Benefits**:
  - **Simplicity**: Managing a single, more powerful server can be simpler than managing multiple servers.
  - **Single-Point Performance Boost**: Useful for applications that require significant processing power on a single machine.
  - **Reduced Complexity**: Avoids the need for load balancing or data distribution across multiple servers.
- **Limitations**:
  - **Resource Limits**: There is a limit to how much CPU, memory, or storage can be added to a single machine.
  - **Downtime During Upgrades**: Upgrading hardware might require some downtime, depending on the environment.
  - **Single Point of Failure**: A single powerful server may be a point of failure if it goes down.
- **Example**: A database server that gets upgraded to a higher-performance machine to handle more queries per second.

### Key Differences

| Aspect               | Horizontal Scaling                     | Vertical Scaling                     |
|----------------------|----------------------------------------|--------------------------------------|
| **Approach**         | Adds more servers or instances         | Increases resources on a single server |
| **Capacity Limits**  | Virtually unlimited                    | Limited by server hardware           |
| **Cost Efficiency**  | Cost-effective in the cloud            | Can be costly with powerful hardware  |
| **Fault Tolerance**  | Higher (with multiple servers)         | Lower (single point of failure)      |
| **Complexity**       | Requires load balancing and orchestration | Simpler, with a single powerful server |

### When to Use Horizontal vs. Vertical Scaling

- **Horizontal Scaling**: Ideal for applications requiring fault tolerance, distributed computing, or cloud environments where scalability is a priority.
- **Vertical Scaling**: Works well for applications that benefit from high processing power on a single machine, such as databases or monolithic applications with a high degree of dependency.

Both scaling methods can be used together (a hybrid approach) for maximum flexibility and capacity, depending on the system’s requirements and available resources.

![Horizontal and vertical scaling](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/01-horizontal-vertical-scaling.png)
