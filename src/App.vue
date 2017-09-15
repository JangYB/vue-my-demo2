<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-foot></m-foot>
  </div>
</template>

<script>
import MHeader from './components/m-header.vue'
import tab from './components/tab.vue'
import MFoot from './components/m-foot.vue'
export default {
  name: 'app',
  components: {
    MHeader,
    tab,
    MFoot
  }
}
</script>

<style>
  body{width: 100%;font-size: 12px;color: #fff;background: #eeeff0;}
  ul,ol{list-style-type: none;}
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section{margin: 0px; padding: 0px;font-family: "Microsoft YaHei";}
  h1,h2,h3,h4,h5{font-weight: normal;font-style: normal;}
  img{display: block;}
  i,em{ font-style: normal;}
  table { border-collapse: collapse; border-spacing: 0; }
  b,i,em{ font-weight: normal;}
  a{outline: none;text-decoration: none;}
  body{ background-color: #202f52;}

</style>
