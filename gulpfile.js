const {series} = require('gulp')

const bootstrap = require('./converters/bootstrap')
const iconpark = require('./converters/iconpark')

const bootstrapBuild = cb => {
    bootstrap.build()
    cb()
}

const bootstrapConvert = cb => {
    bootstrap.convert()
    cb()
}

const iconparkBuild = cb => {
    iconpark.build()
    cb()
}

const iconparkConvert = cb => {
    iconpark.convert()
    cb()
}

const iconparkTest = cb => {
    iconpark.test()
    cb()
}

exports.bootstrap = series(bootstrapBuild, bootstrapConvert)

exports.iconpark = series(iconparkBuild, iconparkConvert)

exports.iconparkTest = iconparkTest