---
title: Cache tier
tags: ["system design"]
languages: [""]
---

## Cache tier

![Cache tier](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/09-cache-tier.png)

A **cache tier** is a layer in an application architecture specifically designed to store frequently accessed data temporarily in fast-access memory, such as RAM. The cache tier is usually placed between the application layer and the database layer to reduce the time required for data retrieval, thereby improving the system's performance, scalability, and responsiveness.

### Key Components and Concepts of Cache Tiers:

1. **Purpose of a Cache Tier**:
   - It acts as a high-speed data access layer to store frequently requested information.
   - Reduces the load on the primary database by serving data from the cache for recurring requests.
   - Improves response time, especially in scenarios where data retrieval from the primary storage is slower.

2. **Types of Cache in a Cache Tier**:
   - **In-Memory Caching**: Data is stored in memory (RAM), enabling very fast read and write operations. Common examples are Redis and Memcached.
   - **Disk-Based Caching**: Data is stored on a disk, providing more persistence but typically slower than in-memory caches. This is less common but can be used when data needs to survive application restarts.

3. **Cache Tier Placement in Architecture**:
   - The cache tier sits between the application and data tiers, serving as an intermediary for data retrieval.
   - It is often shared by multiple application servers, making it suitable for distributed systems.

4. **Caching Strategies**:
   - **Write-Through Cache**: Data is written to the cache and database simultaneously, ensuring consistency but with higher write latency.
   - **Write-Back Cache**: Data is written only to the cache initially and periodically written back to the database, enhancing write speed but with a slight risk of data loss if the cache fails.
   - **Read-Through Cache**: When the requested data isn’t in the cache, the cache tier retrieves it from the database, updates the cache, and serves it to the application.
   - **Cache-Aside (Lazy Loading)**: The application checks the cache first; if the data is missing (a "cache miss"), it retrieves it from the database, then stores it in the cache for future requests.

5. **Eviction Policies**:
   - Due to memory limitations, caches use eviction policies to remove old or less frequently used data when the cache reaches its capacity.
   - **Common Eviction Policies**:
     - **LRU (Least Recently Used)**: Removes the data that hasn’t been accessed in the longest time.
     - **LFU (Least Frequently Used)**: Removes data accessed the least frequently.
     - **FIFO (First-In-First-Out)**: Removes the oldest data first.

6. **Benefits of a Cache Tier**:
   - **Performance Improvement**: Reduces latency by retrieving data from memory instead of slower storage.
   - **Reduced Database Load**: Minimizes database queries, allowing databases to handle more transactions or serve other applications.
   - **Scalability**: Supports handling more requests as cached data can be shared across application instances.

### Example Use Cases for a Cache Tier:
   - **Web Content Caching**: Storing frequently accessed web pages or API responses to reduce server load.
   - **Session Storage**: Keeping user session data for quick access during active sessions.
   - **Data-Intensive Applications**: Applications requiring quick access to large datasets, such as recommendation engines or analytics platforms.

By implementing a cache tier, applications can optimize data access, improve user experience, and handle higher loads with reduced infrastructure requirements.
