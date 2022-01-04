module.exports = {
    outputDir: './dist',
    assetsDir: './',
    pages: {
        index: {
            entry: 'src/main-page-home.js',
            title: 'Weserfjords - Home'
        },
        males: {
            entry: 'src/main-page-males.js',
            title: 'Weserfjords - Kastraten'
        },
        females: {
            entry: 'src/main-page-females.js',
            title: 'Weserfjords - Katzen'
        },
        litters: {
            entry: 'src/main-page-litters.js',
            title: 'Weserfjords - Würfe'
        },
        about: {
            entry: 'src/main-page-about.js',
            title: 'Weserfjords - Über uns / Kontakt'
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
