---
title: How can JavaScript codes be hidden from old browsers that do not support JavaScript?
tags: ["question", "interview"]
languages: ["javascript"]
---

# How can JavaScript codes be hidden from old browsers that do not support JavaScript?

1. **Add `<!--` before the `<script>` tag:** This starts an HTML comment, which is ignored by old browsers that do not understand JavaScript.

   ```html
   <!--
   <script type="text/javascript">
   // JavaScript code here
   </script>
   -->
   ```

2. **Add `//-->` after the `<script>` tag:** This ends the HTML comment for old browsers. Modern browsers will treat `//-->` as a one-line JavaScript comment, effectively ignoring it.

   ```html
   <!--
   <script type="text/javascript">
   // JavaScript code here
   </script>
   //-->
   ```

By using this technique, the JavaScript code is effectively hidden from old browsers, but it will still be executed by modern browsers that support JavaScript. Keep in mind that this method is somewhat outdated, and modern web development practices often involve using feature detection and progressive enhancement to handle different browser capabilities.
