const fs = require('fs')
const path = require('path')
const camelCase = require('lodash.camelcase')

class Bootstrap {
    _config = {
        prefix: 'PinIcon',
    }

    _baseDir = ''

    _srcDir = ''

    _destDir = ''

    _svgDir = ''

    _vueDir = ''

    _vueNextDir = ''

    _files = []

    _vueStub = ''

    _vueNextStub = ''

    constructor() {
        this._baseDir = path.resolve(__dirname, '../../')
        this._srcDir = path.resolve(this._baseDir, 'node_modules/bootstrap-icons/icons')
        this._destDir = path.resolve(this._baseDir, 'components/bootstrap')
        this._svgDir = path.resolve(this._destDir, 'svg')
        this._vueDir = path.resolve(this._destDir, 'vue')
        this._vueNextDir = path.resolve(this._destDir, 'vue-next')
        this._files = fs.readdirSync(this._srcDir)
        this._vueStub = fs.readFileSync(path.resolve(__dirname, 'stubs/vue.vue')).toString()
    }

    config(config) {
        this._config = Object.assign(this._config, config)
    }

    build() {
        this._files.forEach((filename, index) => {
            fs.copyFileSync(this._srcDir + '/' + filename, this._svgDir + '/' + filename)
            console.log('Svg file created:', '[' + (index + 1) + '] ' + filename)
        })
    }

    convert() {
        this._files.forEach((filename, index) => {
            this._convert(filename, index)
        })
    }

    _studlyCase(filename) {
        filename = camelCase(filename)
        return filename.substr(0, 1).toUpperCase() + filename.substring(1)
    }

    _content(filename) {
        return fs.readFileSync(this._srcDir + '/' + filename)
            .toString()
            .replace('width="16"', ':width="size"')
            .replace('height="16"', ':height="size"')
            .replace('fill="currentColor"', ':fill="fill"')
            .replace(/ class="([a-z0-9 -]+)"/, '')
    }

    _convert(filename, index) {
        let componentName = this._config.prefix + this._studlyCase(filename.split('.')[0])
        let content = this._vueStub
            .replace('<div>__SVG__</div>', this._content(filename))
            .replace('__NAME__', componentName)

        fs.writeFileSync(path.resolve(this._vueDir, componentName + '.vue'), content)
        console.log('Vue component created:', '[' + (index + 1) + '] ' + componentName + '.vue')
    }
}

module.exports = new Bootstrap()