var dest = './build',
    src  = './src';

module.exports = {
  browserify: {
    bundleConfigs: [{
      entries:     src + '/js/index.js',
      dest:        dest + '/js',
      outputName:  'index.js'
    }]
  },

  stylus: {
    src:       src + '/stylus/*.styl',
    dest:      dest,
    settings:  {
      sourceComments:  'map',
      imagePath:       '/images'
    }
  },

  images: {
    src:   src + '/images/**',
    dest:  dest + '/images'
  },

  browserSync: {
    server: { baseDir: dest }
  }
};
