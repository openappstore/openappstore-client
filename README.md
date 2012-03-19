# Open App Store - Client

The client is basically a UI built on top of [npm](http://npmjs.org/). So far only a basic proof-of-concept is done.

## Installation

    git clone git@github.com:openappstore/openappstore-client.git
    cd openappstore-client
    npm install
    node app.js

Open a web browser and go to http://localhost:3000

## Features so far
- Ability to install an npm package via a webpage

## TODO Next:
- Show dynamic list of installable apps
- Show dynamic list of installed apps

## Expected features
- Browse apps in various categories
- Search
- Install apps
- Show list of installed apps
- Show when app updates are available
- Install app updates
- Self update to latest app store (?)
- Developer tools: Testing install of new apps?

## Potential issues

### Preventing port number clashes
When installing an app we will need to prevent apps from using the same port number. 

### Bundling of Node.js/NPM
We can't expect users to have Node.js/NPM installed. The client should bundle them into once easy to install package.