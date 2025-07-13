# About

Speedrun.com has two API versions. Version 1 is officially documented, REST, public and directly exposed to users. Version 2 is a pre-production RPC API designed only for internal use of site functions, and is much more complicated and less user-friendly, especially regarding authentication and browser CORS.

Version 1 is mainly read-only, and when it isn't read only it may just be broken. If you want to use any of the modern features of the site now, you'll use version 2. This is a NodeJS wrapper for Speedrun API version 2, with parameters and responses all documented in TypeScript and JSDoc.

This module isn't intended to give any helper functions to the user; it's more of an index of the params and responses of the site endpoints, to be used for type checking on a more user-friendly module.

# Usage

**`npm i speedruncom.js`**

`Client` is the default export, and enums and interfaces are the named exports for TypeScript users.