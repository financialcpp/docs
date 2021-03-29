---
title: 'FppServer'
description: ''
position: 5
category: 'API - JS'
---

## Usage
```js
import { FppServer } from 'financialcpp'

const server = new FppServer({})

server.listen().then( ({graphql}) => {
    console.log(`🚀 Graphql server ready at ${graphql.url}`)
}
```
<div class="my-10" />

## new FppServer(options)
```js
const server = new FppServer({
    apollo: {},
    ui: {},

})
```
### Properties
### `apollo`
`Object` or `false` to disable.


[Apollo Server](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#constructor) is used internally. See docs for all the options available.


### `ui`
`Object` or `false` to disable.

#### `ui.nuxt`
`Function` or `Object`

If you know nuxt, you can modify the `nuxt.config.js` file. Pass in a function that takes the internal `nuxt.config` as the first parameter and return the modified object.

```js
new FppServer({
    ui: {
        nuxt: (config) => {
            // add your own stuff, or modify the defaults
            return config
        }
    }
})
```

#### `ui.next`
`Function` or `Object`

We don't support 

```js
new FppServer({
    ui: {
        nuxt: (config) => {
            // add your own stuff, or modify the defaults
            return config
        }
    }
})
```



