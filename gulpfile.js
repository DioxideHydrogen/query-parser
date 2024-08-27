const { name } = require('./package.json');
const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify');

gulp.task('bundle:dev', () => {
  return gulp.src('./src/index.js')
    .pipe(webpackStream({
      // Configuração para a versão de desenvolvimento
      // ...
      mode: 'development',
      devtool: 'source-map',
      output: {
        filename: `${name}.js`
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('bundle:prod', () => {
  return gulp.src('./src/index.js')
    .pipe(webpackStream({
      // Configuração para a versão de produção
      // ...
      mode: 'production',
      output: {
        filename: `${name}.min.js`
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.parallel('bundle:dev', 'bundle:prod'));
