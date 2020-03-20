# Ping Bot
Ping!

## What is this bot?
This bot pings automatically after "seeing" a message from a specific user. Use cases include:
- Auto-ping for announcements
- Receive pings for published announcement channel messages

## Customization
Currently, you can setup the bot to:
- Have a custom message (with customizable ping placement)
- Ping multiple roles
- Have a ping cooldown (so you don't ping roles more than once in a set time period)
- Delay the ping message (slightly broken, may send two messages but only pings once; in the process of fixing)*
- Only "listen" for messages in one channel by one user
- Have multiple "listeners", each with their own options

## Setup
Setup is extremely simple:
- Clone the repo
- Install the dependencies (`npm install` or `yarn install`)
- Setup `setup.js`. A sample setup file is provided
- Run the bot! (`TOKEN="bot-token" node index.js`)
