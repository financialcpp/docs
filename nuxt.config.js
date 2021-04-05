import theme from '@nuxt/content-theme-docs'
console.log(theme({
    docs: {
        primaryColor: '#9f7aea'
    },
    content: {
        markdown: {
            prism: {
                theme: './assets/css/prism-nord.css'
            }
        }
    },
}));
export default theme({
    docs: {
        primaryColor: '#9f7aea'
    },
    content: {
        markdown: {
            prism: {
                theme: './assets/css/prism-nord.css'
            }
        }
    },
    components: [
        {
            path: './components',
            pathPrefix: false
        }
    ],
})
