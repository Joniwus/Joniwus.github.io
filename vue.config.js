module.exports = {
  outputDir: './dist',
  assetsDir: './',
  pages: {
    index: {
      entry: 'src/main-page-home.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Weserfjords - Home'
    },
    males: {
      entry: 'src/main-page-males.js',
      template: 'public/males.html',
      filename: 'males.html',
      title: 'Weserfjords - Kater'
    },
    females: {
      entry: 'src/main-page-females.js',
      template: 'public/females.html',
      filename: 'females.html',
      title: 'Weserfjords - Katzen'
    },
    kittens: {
      entry: 'src/main-page-kittens.js',
      template: 'public/kittens.html',
      filename: 'kittens.html',
      title: 'Weserfjords - Kitten'
    },
    contact: {
      entry: 'src/main-page-contact.js',
      template: 'public/contact.html',
      filename: 'contact.html',
      title: 'Weserfjords - Kontakt'
    },
    about: {
      entry: 'src/main-page-about.js',
      template: 'public/about.html',
      filename: 'about.html',
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
}
