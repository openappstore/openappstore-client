# Open App Store - Client

The client will make use of [NPM](http://npmjs.org/) for handling dependencies and installing apps. 

The NPM "package.json" file will be used as the app manifest file. There will be a couple required settings. These might be:

- Path to app icon(s)
- App entry point? Script? URL?

## Expected features
- Browse apps in various categories
- Search
- Install apps
- Show list of installed apps
- Show when app updates are available
- Install app updates
- Self update to latest app store (?)
- Developer tools: Testing install of new apps?

## TODO Next:
- List a few apps (hard-coded via API)
- Install and launch an app when clicked

## Potential issues

### Preventing port number clashes
When installing an app we will need to prevent apps from using the same port number. 

### Bundling of Node.js/NPM
We can't expect users to have Node.js/NPM installed. The client should bundle them into once easy to install package.