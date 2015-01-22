var dest = './build',
    src  = './src';

module.exports = {
  browserify: {
    bundleConfigs: [{
      entries:     src + '/client.js',
      dest:        dest + '/js',
      outputName:  'client.js'
    }]
  },

  stylus: {
    src:       src + '/styles/app.styl',
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
