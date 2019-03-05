const path = require("path")

module.exports = {
    title: 'financial cpp',
    description: 'Modern c++ financial market library',
    themeConfig: {

        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'financialcpp/docs',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'financialcpp/docs',
        // if your docs are not at the root of the repo:
        docsDir: 'cpp',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',

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