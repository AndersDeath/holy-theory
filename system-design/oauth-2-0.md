---
title: What is OAuth 2.0?
tags: ["system design"]
languages: [""]
---

## What is OAuth 2.0?

**OAuth 2.0** is an open standard and authorization protocol used to grant third-party applications limited access to user resources without exposing the user’s credentials. Rather than sharing a username and password, OAuth 2.0 allows a user to authorize access via tokens, which offer a more secure and flexible approach to managing permissions across different systems and services.

OAuth 2.0 is widely adopted by major platforms, such as Google, Facebook, and Microsoft, for scenarios like logging in to third-party services or granting applications access to your data (e.g., email, calendar, or social media accounts).

### Key Concepts of OAuth 2.0

1. **Authorization vs. Authentication**:  
   OAuth 2.0 is primarily concerned with **authorization**, not **authentication**. It does not directly verify the user’s identity, but rather it allows a user to grant access to their data or services to third-party applications. This is why OAuth 2.0 is often paired with authentication protocols, such as **OpenID Connect**, to manage both authentication and authorization in one flow.

2. **Token-Based Access**:  
   OAuth 2.0 replaces the need for sharing login credentials with **tokens**. These tokens, typically in the form of a **Bearer Token**, allow the requesting app to access specific resources for a limited time.

3. **Client and Resource Owner**:  
   In OAuth 2.0, the **client** is the application requesting access to resources, and the **resource owner** is the user who owns the data or services being accessed. OAuth 2.0 helps the client gain access to the resource owner’s data in a secure manner.

4. **Scopes**:  
   OAuth 2.0 uses **scopes** to define what level of access the client is requesting. For example, a photo-editing app might request access to a user's photos, while an email client might ask for permission to access email.

### OAuth 2.0 Roles

OAuth 2.0 defines four key roles:

1. **Resource Owner**: The user or entity who owns the resource (e.g., the account owner).
2. **Client**: The third-party application requesting access to the user’s resources.
3. **Authorization Server**: The server that authenticates the resource owner and issues access tokens to the client (e.g., Google’s OAuth server).
4. **Resource Server**: The API or service hosting the user’s resources, which responds to requests with valid access tokens (e.g., a Google Photos API).

### OAuth 2.0 Grant Types (Authorization Flows)

OAuth 2.0 supports different **grant types**, which specify how the client can obtain an access token. The most common grant types include:

1. **Authorization Code Grant**:  
   This flow is the most common and is used in web applications. The client first obtains an **authorization code** from the authorization server by redirecting the user to the authorization endpoint. The client then exchanges this code for an **access token**. This two-step process ensures better security since sensitive tokens are not directly exposed to the browser.

2. **Implicit Grant**:  
   The **implicit grant** is simplified for client-side apps (such as single-page applications) that don’t have a secure back end. In this flow, the access token is returned directly in the URL after the user is redirected from the authorization server. It is less secure and now generally discouraged due to its exposure to security risks like token leakage.

3. **Client Credentials Grant**:  
   In this flow, the client (typically a machine or service) requests an access token directly from the authorization server by using its own credentials (such as an API key). This flow is used when there is no user context involved, such as server-to-server communication.

4. **Resource Owner Password Credentials Grant**:  
   Here, the user directly provides their username and password to the client, which then exchanges those credentials for an access token. This method is less secure since it exposes the user's credentials to the client and is generally discouraged unless the client is highly trusted.

5. **Refresh Token Grant**:  
   A **refresh token** is used to obtain a new access token after the original token has expired, without needing to re-authenticate the user. This helps maintain user sessions without frequent logins.

### How OAuth 2.0 Works

Here’s a typical flow of how OAuth 2.0 works in an **Authorization Code Grant**:

1. **User Authorization**:  
   The user is redirected to the **authorization server**, where they log in and grant the **client** (app) permission to access their data.
   
2. **Authorization Code**:  
   After granting permission, the authorization server redirects the user back to the client app with an **authorization code** in the URL.

3. **Access Token Request**:  
   The client app sends the authorization code to the authorization server in exchange for an **access token**.

4. **Access Resource**:  
   The client can now use this access token to request the protected resource from the **resource server** (e.g., access user data like profile information, photos, or emails).

5. **Refresh Token (optional)**:  
   When the access token expires, the client can use a **refresh token** (if provided) to obtain a new access token without requiring the user to log in again.

### Key Benefits of OAuth 2.0

1. **Enhanced Security**:  
   OAuth 2.0 eliminates the need for users to share their passwords with third-party apps. Instead, the user authorizes the app by granting tokens.

2. **Token Revocation**:  
   Tokens can be easily revoked or have limited lifetimes, reducing the risk associated with long-term credentials.

3. **Granular Access Control**:  
   OAuth 2.0 allows fine-tuned control over what data third-party apps can access by using **scopes**. For instance, you can grant an app permission to view your contacts but not to modify them.

4. **Broad Adoption**:  
   OAuth 2.0 is widely used across major platforms and services (such as Google, Facebook, and GitHub) to provide secure authorization for third-party apps.

### Use Cases for OAuth 2.0

1. **Third-Party Login**:  
   OAuth 2.0 enables users to log into an application using their credentials from a service like Google or Facebook, without needing to create a new account.
   
2. **API Access**:  
   Applications can request access to a user’s API resources (e.g., calendar, contacts, or files) without requiring direct login.

3. **Single Sign-On (SSO)**:  
   OAuth 2.0 can be used as part of a broader single sign-on strategy, allowing users to log into multiple services using a single identity.

### Conclusion

OAuth 2.0 is a powerful and flexible authorization framework that provides a secure way for users to grant applications limited access to their resources without sharing sensitive credentials. Its token-based approach and wide adoption make it essential for modern app development, where seamless user experiences and robust security are paramount. By decoupling authorization from authentication, OAuth 2.0 also sets the foundation for integrating identity management with authorization protocols like OpenID Connect, providing a comprehensive solution for secure access to user resources.