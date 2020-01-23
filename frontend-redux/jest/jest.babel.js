const { babelOptionsJest } = require('../webpack/loaders')

module.exports = require('babel-jest').createTransformer(babelOptionsJest)
