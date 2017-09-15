<template>
  <div class="m-foot">
    <ul>
      <li v-for="item in items">{{item.text}}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
   // props:['todo'],
    data(){
      return {
        items:[
          {text:'底部导航A'},
          {text:'底部导航B'},
          {text:'底部导航C'},
          {text:'底部导航D'}
        ]
      }

    }
  }
</script>
<style scoped>
  .m-foot{width: 100%;height: 40px; background-color: green; position: fixed; bottom: 0; left: 0; right: 0;}
  .m-foot ul{ display: flex;width: 100%;height: 40px;}
  .m-foot ul li{flex: 1;height: 40px; text-align: center; line-height: 40px; color: #fff;}
</style>
