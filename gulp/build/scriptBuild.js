const gulp = require('gulp'),
      uglify = require('gulp-uglify-es').default,
      webpackStream = require('webpack-stream');

module.exports = function scriptBuild() {
    return gulp.src('app/js/script.js')
        .pipe(webpackStream(
            {
                // production, development
                  mode: 'production',
                    output: {
                      filename: 'script.js'
                    },
                    module: {
                      rules: [
                        {
                          test: /\.m?js$/,
                          exclude: /(node_modules|bower_components)/,
                          use: {
                            loader: 'babel-loader',
                            options: {
                              presets: ['@babel/preset-env'],
                              plugins: [
                                require("@babel/plugin-transform-async-to-generator"),
                                require('@babel/plugin-transform-runtime'),
                                require("@babel/plugin-transform-arrow-functions"),
                                require("@babel/plugin-transform-modules-commonjs")
                            ]
                            }
                          }
                        }
                      ]
                    }
                }
        ))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}