# Browser URL Search

## Question

A person settled in front of their laptop, launching a browser before typing a URL into the search bar. What unfolds within the browser at the network level following this action?

![Browser URL Search](https://raw.githubusercontent.com/AndersDeath/holy-theory/main/images/12-browser-url-search.png)


## Answer

1. **URL Parsing:** When a user enters a URL into the browser's search bar, the browser parses the URL to extract components like the protocol (e.g., "https"), the domain name (e.g., "www.example.com"), and the path (e.g., "/page"). The browser also checks the URL's validity.

2. **DNS Resolution:** To find the IP address associated with the domain name, the browser queries a DNS (Domain Name System) server. This process involves multiple steps, potentially starting with the local cache and progressing to the ISP's DNS server and authoritative DNS servers for the domain.

3. **TCP/IP Connection:** The browser initiates a secure TCP connection using TLS (Transport Layer Security) to the IP address of the web server hosting the website. A process known as the TLS handshake occurs, involving encryption negotiation, key exchange, and verification to establish a secure connection.

4. **HTTPs Request:** With the secure connection established, the browser sends an HTTPS (HTTP Secure) request to the web server. The request includes the HTTP method (e.g., GET, POST), headers (including user agent information), and the requested path.

5. **Server Processing:** The web server receives the HTTPS request, processes it, and generates an appropriate HTTPS response. This response includes a status code (e.g., 200 OK), headers (e.g., content type), and the requested content (HTML, images, etc.).

6. **TCP/IP Data Transfer:** The server sends the HTTPS response back to the browser over the established encrypted TCP connection.

7. **Rendering and Display:** The browser receives the response, interprets the HTML content, and renders the page. Additional resources referenced in the HTML (such as images, stylesheets, and JavaScript files) are fetched over the secure connection and processed similarly.

8. **Page Interaction:** Users interact with the rendered page, which may involve actions like clicking links or submitting forms. These actions trigger additional HTTPS requests for resources and data.

9. **Caching:** The browser may cache certain resources for improved performance during subsequent visits. Cached resources are reused to load pages faster.

10. **Connection Termination:** When the user closes the browser tab or navigates away from the page, the browser may gracefully terminate the encrypted TCP connection, involving a process to ensure proper closure.

It's important to note that the use of HTTPS adds an extra layer of security through encryption, helping to protect the confidentiality and integrity of the data exchanged between the browser and the web server.