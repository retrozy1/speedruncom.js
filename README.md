# speedruncom.js

Speedrun.com has two API versions. Version 1 is officially documented, REST, public and directly exposed to users. Version 2 is a pre-production RPC API designed only for internal use of site functions, and is much more complicated and less user-friendly, especially regarding authentication and browser CORS.

Version 1 is mainly read-only, and when it isn't read only it may just be broken. If you want to use any of the modern features of the site now, you'll use version 2. This package consists of types that make up this undocumented api, and a small utility for calling GET and POST.