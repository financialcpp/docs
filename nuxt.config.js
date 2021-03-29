import theme from '@nuxt/content-theme-docs'

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
})
