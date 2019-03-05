const path = require("path")

module.exports = {
    title: 'financial cpp',
    description: 'Modern c++ financial market library',
    themeConfig: {
        displayAllHeaders: true,
        sidebar: {
            '/getting-started/': [
                ''
            ],
            '/guide/': [
                {
                    '/intro/': [
                        '',
                        ['installation', 'Get installed']

                    ]
                },
                'introduction',
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, "../assets/"),
                '@public': path.resolve(__dirname, "./public")
            }
        }
    }
}