import SvgIcon from '../components/SvgIcon.vue'

const svgRequire = require.context('./svg', false, /\.svg$/)

svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

const installIcons = (instance) => {
  instance.component('SvgIcon', SvgIcon)
}

export default installIcons