var dest = './build',
    src  = './src';

module.exports = {
  browserify: {
    cache: {},
    packageCache: {},
    fullPaths: true,
    bundleConfigs: [{
      entries:     src + '/client.js',
      dest:        dest + '/js',
      outputName:  'client.js'
    }, {
      entries:     src + '/app.js',
      dest:        dest + '/js',
      outputName:  'app.js'
    }]
  },

  stylus: {
    src:       [src + '/styles/app.styl', src + '/styles/theme.styl'],
    dest:      dest + '/css',
    settings:  {
      sourceComments:  'map',
      imagePath:       '/images',
      'include css':   true
    }
  },

  images: {
    src:   src + '/images/**',
    dest:  dest + '/images'
  },

  browserSync: {
    proxy: 'localhost:8000'
  },

  nodemon: {
    script: src + '/server.js'
  }
};
