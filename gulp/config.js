var dest = './dist/assets';

module.exports = {
  browserSync: {
    proxy: 'localhost:5000',
    open: false
  },

  stylus: {
    src:       ['./styles/*.styl'],
    dest:      dest,
    settings:  {
      sourceComments:  'map',
      imagePath:       '/images',
      'include css':   true
    }
  }
};
