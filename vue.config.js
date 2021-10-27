module.exports = {
    outputDir: './dist',
    assetsDir: './',
    pages: {
        index: {
            entry: 'src/main-page-home.js',
            template: 'public/index.html',
            title: 'Weserfjords - Home'
        },
        males: {
            entry: 'src/main-page-males.js',
            template: 'public/males.html',
            title: 'Weserfjords - Kastraten'
        },
        females: {
            entry: 'src/main-page-females.js',
            template: 'public/females.html',
            title: 'Weserfjords - Katzen'
        },
        kittens: {
            entry: 'src/main-page-kittens.js',
            template: 'public/kittens.html',
            title: 'Weserfjords - Kitten'
        },
        litters: {
            entry: 'src/main-page-litters.js',
            template: 'public/litters.html',
            title: 'Weserfjords - Würfe'
        },
        contact: {
            entry: 'src/main-page-contact.js',
            template: 'public/contact.html',
            title: 'Weserfjords - Kontakt'
        },
        about: {
            entry: 'src/main-page-about.js',
            template: 'public/about.html',
            title: 'Weserfjords - Über uns'
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                './src/less/main.less'
            ]
        }
    }
};
