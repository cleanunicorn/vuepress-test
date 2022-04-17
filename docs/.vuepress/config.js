module.exports = {
    // site config
    lang: 'en-US',
    title: 'Hello, VuePress!',
    description: 'This is my first VuePress site',
    base: '/vuepress-test/',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            // NavbarItem
            {
                text: 'How to',
                // link: '/how-to/',
                children: ['/how-to/how-to-read', '/how-to/'],
            },
            // NavbarGroup
            {
                text: 'Group',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            // string - page file path
            '/bar/README.md',
        ],
        repo: 'cleanunicorn/vuepress-test',
        repoLabel: 'Code',
        editLink: false,
    },
}