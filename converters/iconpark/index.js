const fs = require('fs')
const path = require('path')

const map = require('@icon-park/svg')

class Iconpark {
    _config = {
        prefix: 'PinIcon',
    }

    _componentKeys = []

    _baseDir = ''

    _destDir = ''

    _svgDir = ''

    _vueDir = ''

    _vueNextDir = ''

    _files = []

    _vueStub = ''

    _vueNextStub = ''

    constructor() {
        this._componentKeys = Object.keys(map).filter(item => ['DEFAULT_ICON_CONFIGS', 'setConfig'].indexOf(item) === -1)
        this._baseDir = path.resolve(__dirname, '../../')
        this._destDir = path.resolve(this._baseDir, 'components/iconpark')
        this._svgDir = path.resolve(this._destDir, 'svg')
        this._vueDir = path.resolve(this._destDir, 'vue')
        this._vueNextDir = path.resolve(this._destDir, 'vue-next')
        this._vueStub = fs.readFileSync(path.resolve(__dirname, 'stubs/vue.vue')).toString()
    }

    config(config) {
        this._config = Object.assign(this._config, config)
    }

    build() {
        this._componentKeys.forEach((name, index) => {
            fs.writeFileSync(path.resolve(this._svgDir, name + '.svg'), map[name]({}))
            console.log('Svg file created:', '[' + (index + 1) + '] ' + name + '.svg')
        })
    }

    convert(){
        this._componentKeys.forEach((name,index) => {
            this._convert(name, index)
        })
    }

    test(){

        this._convert('AddItem',1)
    }

    _content(name) {
        return map[name]({})
            .replace('<?xml version="1.0" encoding="UTF-8"?>', '')
            .replace('width="1em"', ':width="size"')
            .replace('height="1em"', ':height="size"')
            .replace(/fill="none"/g, ':fill="fill"')
            .replace(/stroke="currentColor"/g, ':stroke="stroke"')
            .replace(/stroke-width="4"/g, ':stroke-width="strokeWidth"')
    }

    _convert(name, index){
        let componentName = this._config.prefix + name
        let content = this._vueStub
            .replace('__NAME__', componentName)
            .replace('<div>__SVG__</div>', this._content(name))

        fs.writeFileSync(path.resolve(this._vueDir, componentName + '.vue'), content)
        console.log('Vue component created:', '[' + (index + 1) + '] ' + componentName + '.vue')
    }
}

module.exports = new Iconpark()