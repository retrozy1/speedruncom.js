## `npm i speedruncom.js`

# About

Speedrun.com has two API versions. Version 1 is officially documented, REST, public and directly exposed to users. Version 2 is a pre-production RPC API designed only for internal use of site functions, and is much more complicated and less user-friendly, especially regarding authentication and browser CORS.

Version 1 is mainly read-only, and when it isn't read only it may just be broken. If you want to use any of the modern features of the site now, you'll use version 2. This is a NodeJS wrapper for Speedrun API version 2, with parameters and responses all documented in TypeScript and JSDoc.

# Usage

## Installation

**`npm i speedruncom.js`**

## Importing

`Client` is the default export, and enums and interfaces are available in named exports for TypeScript users.

```js
import SpeedrunClient from 'speedruncom.js';

const client = new SpeedrunClient({
  userAgent: 'RunCollabGetter'
});

const getCollabs = async (userUrl) => {
  // Fetch user summary
  const {
    user: { id: userId, name }
  } = await client.GetUserSummary({ url: userUrl });

  // Fetch leaderboard and extract player names
  const { players } = await client.GetUserLeaderboard({ userId });
  const otherPlayerNames = players.map(player => player.name).filter(n => n !== name); // Exclude self

  if (otherPlayerNames.length === 0) {
    return `${name} hasn't ran with anyone.`;
  }

  const formattedNames =
    otherPlayerNames.length === 1
      ? otherPlayerNames[0]
      : `${otherPlayerNames.slice(0, -1).join(', ')} and ${otherPlayerNames.slice(-1)}`;

  return `${name} has ran with ${formattedNames}.`;
};

console.log(await getCollabs('retrozy'));
```