---
title: Server side rendering
tags: ["question", "interview", "theory"]
languages: [""]
---

# Server side rendering

Server-side rendering (SSR) is a technique used in web development where the server generates the HTML content of a web page and sends it to the client (usually a web browser). This contrasts with client-side rendering (CSR), where the client downloads a minimal HTML page and uses JavaScript to dynamically generate the HTML content on the fly.

### Key Points of Server-Side Rendering

1. **Initial Page Load**:
   - When a user requests a web page, the server processes the request, executes the necessary logic (such as querying a database), and generates the complete HTML for the page.
   - This HTML is then sent to the client, allowing the browser to render the fully populated page immediately.

2. **SEO Benefits**:
   - Since the content is rendered on the server and sent as a complete HTML document, search engine crawlers can easily index the content, improving the site's search engine optimization (SEO).
   
3. **Performance**:
   - SSR can improve the perceived performance for the user, as the browser displays the fully rendered HTML without waiting for JavaScript to load and execute.
   - This can lead to faster time-to-first-byte (TTFB) and quicker initial content rendering, enhancing the user experience.

4. **Complexity**:
   - Implementing SSR can add complexity to the development process, as it often requires server-side logic and might necessitate synchronizing server and client code.
   
5. **Common Frameworks and Libraries**:
   - Many modern frameworks and libraries support SSR, including Next.js (for React), Nuxt.js (for Vue.js), and Angular Universal (for Angular).

### Example Workflow of SSR

1. **Client Request**: A user navigates to a URL.
2. **Server Processing**:
   - The server receives the request.
   - The server fetches necessary data (e.g., from a database).
   - The server uses the data to populate templates and generate the complete HTML for the requested page.
3. **HTML Response**: The server sends the fully rendered HTML to the client.
4. **Client Rendering**:
   - The browser receives and displays the HTML.
   - Additional JavaScript and CSS files may be downloaded and executed to add interactivity and enhance the user experience.

### Advantages of SSR

- **Improved SEO**: Content is readily available to search engines.
- **Faster Initial Load**: Users see a fully rendered page more quickly.
- **Better Performance on Low-Power Devices**: Offloads the rendering work from the client to the server.

### Disadvantages of SSR

- **Increased Server Load**: Servers handle more processing work.
- **Complexity in Development**: Requires managing server-side logic and sometimes synchronizing it with client-side code.
- **Potential for Slower Interactions**: Subsequent interactions might be slower if they require full page reloads, compared to client-side rendering which can update parts of the page dynamically.

---

Server-side rendering is a powerful technique for improving the initial load performance and SEO of web applications, but it comes with trade-offs in terms of development complexity and server resource utilization. Many modern web applications use a combination of SSR and CSR to leverage the benefits of both approaches.