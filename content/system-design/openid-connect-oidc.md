---
title: OpenID Connect (OIDC)
tags: ["system design"]
languages: [""]
---

## OpenID Connect (OIDC)

**OpenID Connect (OIDC)** is an identity layer built on top of the **OAuth 2.0 protocol**. It allows clients (such as web apps, mobile apps, or APIs) to verify the identity of an end-user based on authentication performed by an authorization server, as well as to obtain basic profile information about the user in a secure and standardized way.

### Key Features of OpenID Connect:
1. **Authentication and Authorization**: OIDC provides both authentication (verifying the user's identity) and authorization (granting access to resources) in a single framework.
   
2. **ID Token**: OIDC issues an **ID Token**, a JSON Web Token (JWT) that contains claims about the user (e.g., user ID, authentication time). This ID token is used by clients to verify the user's identity.

3. **User Information Endpoint**: OIDC defines an optional **UserInfo Endpoint** that allows clients to fetch additional user profile information such as name, email, and profile picture.

4. **OAuth 2.0 Compatibility**: Since OIDC is built on OAuth 2.0, it inherits all of OAuth 2.0’s capabilities for authorization, such as scopes, access tokens, and refresh tokens.

5. **Scopes**: The **scope** parameter in OIDC defines what level of access the client is requesting. For example, the `openid` scope requests access to the user's identity, while additional scopes like `email` or `profile` can request more specific information about the user.

### Key Components:
- **End User**: The user trying to access the service.
- **Relying Party (RP)**: The application or service requesting user authentication and information.
- **OpenID Provider (OP)**: The identity provider that authenticates the user and provides the identity information.

### Flow:
1. The client (relying party) redirects the user to the OpenID Provider for authentication.
2. The user authenticates at the OpenID Provider.
3. Upon successful authentication, the OP sends an ID Token (and optionally, access and refresh tokens) back to the client.
4. The client verifies the ID Token and uses it to authenticate the user or access user information.

### Use Cases:
- Single Sign-On (SSO) for web and mobile applications.
- Verifying user identity in distributed systems.
- APIs and services requiring user authentication. 

OIDC is widely used in platforms like Google, Microsoft, and others to manage authentication across services.