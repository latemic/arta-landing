'use strict';

const src = `./src/`;
const dist = `./dist/`;

module.exports = {
  paths: {
    fonts: {
      src: src + 'fonts/**/*',
      dest: dist + 'fonts'
    },
    styles: {
      src: src + 'scss/**/*.scss',
      dest: dist + 'css'
    },
    scripts: {
      src: src + 'js/**/*.js',
      dest: dist + 'js'
    },
    images: {
      src: src + 'images/**/*',
      dest: dist + 'img'
    },
    svg: {
      src: src + 'svg/*.svg',
      dest: dist + 'svg'
    },
    markup: {
      templates: src + 'njk/*.njk',
      path: src + 'njk/',
      src: src + 'njk/**/*.njk',
      dest: dist
    },
    dist: dist
  },
  names: {
    css: 'styles.css',
    js: 'scripts.js',
    svgSprite: 'svgSprite.svg'
  }
};
