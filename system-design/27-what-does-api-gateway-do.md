---
title: What does API gateway do?
tags: ['system design']
languages: ['']
---
## What does API gateway do?

API Gateway serves as a centralized entry point for client applications to access multiple backend APIs. It offers several key functions, including:

*   **Routing**: Directs incoming requests to the appropriate backend service/API based on the requested resource path or other routing rules.
*   **Authentication**: Validates and authorizes client requests using various authentication mechanisms such as API keys, JWT tokens, or other credentials.
*   **Authorization**: Determines if a client has permission to access a specific resource or perform a certain action.
*   **Rate Limiting**: Controls the number of requests allowed from a client within a certain timeframe, preventing abuse or excessive usage.
*   **Caching**: Stores frequently accessed API responses to reduce backend load and improve response times.
*   **Transformation**: Modifies request/response payloads to match the requirements of backend services or client applications.
*   **Monitoring**: Tracks and logs API usage and performance metrics to monitor overall health and identify potential issues.

Here are some examples to illustrate these functionalities:

*   **Routing**: An API Gateway receives an HTTP request and routes it to the appropriate backend service based on the requested resource path.
*   **Authentication**: An API Gateway verifies the identity of a client by validating API keys, JWT tokens, or other authentication credentials.
*   **Authorization**: An API Gateway checks if a client has the necessary permissions to access a specific API endpoint or perform a particular action.
*   **Rate Limiting**: An API Gateway restricts the number of requests a client can make within a given time period (e.g., 100 requests per minute).
*   **Caching**: An API Gateway caches the response from a backend API and serves it directly to future identical requests, reducing backend load.
*   **Transformation**: An API Gateway modifies the request or response payloads to match the format required by the backend service or client application.
*   **Monitoring**: An API Gateway tracks API usage metrics such as request count, latency, and error rates to monitor performance and health.


* [Go back](../readme.md)