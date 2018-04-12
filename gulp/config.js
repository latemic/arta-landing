'use strict';

const src = `./src`;
const dist = `./dist`;

module.exports = {
  paths: {
    fonts: {
      src: `${src}/fonts/**/*.woff2`,
      dest: `${dist}/fonts`
    },
    styles: {
      src: `${src}/scss/**/*.scss`,
      dest: `${dist}/css`
    },
    images: {
      src: `${src}/images/**/*`,
      dest: `${dist}/img`
    },
    svg: {
      src: `${src}/svg/*.svg`,
      dest: `${dist}/svg`
    },
    markup: {
      templates: `${src}/njk/*.njk`,
      path: `${src}/njk/`,
      src: `${src}/njk/**/*.njk`,
      dest: dist
    },
    dist: dist
  },
  names: {
    css: 'styles.css',
    svgSprite: 'svgSprite.svg'
  }
};
