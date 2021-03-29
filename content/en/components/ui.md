---
title: UI
description: ''
position: 4
category: Components
---

Since the backend exposes a GraphQL API, the UI can be written in anything that talks GraphQL.

## UI-framework

React, Vue, Angular, Svelte, Elm, Meteor. There's a million different ways to write a UI these days. We recognized this from the start and decided to build a robust GraphQL interface as the boundary language between the UI and the backend. 

Just run the financialcpp graphQL server and consume the API from your UI-framework of choice (React, Svelte, Angular, Elm, etc...).

```bash
npm install financialcpp
```

```js[server.js]
import { FppServer } from 'financialcpp'

const server = new FppServer({
    // disable default ui
    ui: false
})

server.listen().then( ({graphql}) => {
    console.log(`🚀 Graphql server ready at ${graphql.url}`)
}
```
You can access the GraphQL playground by accessing the `/graphql` endpoint in your browser.

See [FppServer docs](/api/js/fpp-server) for options you can pass *FppServer*.