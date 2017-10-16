<template>
  <div>
    <div class="wrapper">
      <div v-on:mouseenter="stopPlay()" v-on:mouseleave="play()" class="swiper-container gallery-top swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div v-for="value in lbt" class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;">
            <img v-bind:src="value.imgs" >
          </div>
        </div>
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white swiper-button-disabled"></div>
      </div>
      <div class="swiper-container gallery-thumbs swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div v-for="value in lbt" class="swiper-slide swiper-slide-next" style="margin-right: 10px;">
            <img v-bind:src="value.imgs" >
          </div>
        </div>
      </div>

      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Swiper from '../../static/swiper-3.4.2.min.js'
  let galleryTop
  let galleryThumbs
  export default {
    name: 'main',
    data () {
      return {
        lbt: [
          {
            imgs: '../../static/img1.jpg'
          }, {
            imgs: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000001IWkf03SKVCI.jpg?max_age=2592000&max_age=2592000'
          }, {
            imgs: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000000JMVic3j67Zl.jpg?max_age=2592000&max_age=2592000'
          }
        ]
      }
    },
    mounted () {
      this.lunbo()
    },
    methods: {
      lunbo () {
        galleryTop = new Swiper('.gallery-top', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 10,
          grabCursor: true,
          initialSlide: 1,
          autoplayDisableOnInteraction: false
        })
        galleryThumbs = new Swiper('.gallery-thumbs', {
          spaceBetween: 10,
          autoplay: 4000,
          initialSlide: 1,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true,
          autoplayDisableOnInteraction: false,
          grabCursor: true
        })
        galleryTop.params.control = galleryThumbs
        galleryThumbs.params.control = galleryTop
      },
      stopPlay () {
        galleryTop.stopAutoplay()
        galleryThumbs.stopAutoplay()
      },
      play () {
        galleryTop.startAutoplay()
        galleryThumbs.startAutoplay()
      }
    }
  }
</script>
<style scoped>

  @import url("../assets/swiper-3.4.2.min.css");
  .wrapper{width: 100%;height: 100%; overflow: hidden;}
  .gallery-top{
    width:100%;
  }
  .gallery-top img,.gallery-thumbs img{ display: block;width: 100%;}
  .gallery-thumbs{
    height:20%;
    box-sizing:border-box;
    padding:10px 0;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  .gallery-thumbs .swiper-slide{
    width:30%;

    opacity:0.3;
  }
  .gallery-thumbs .swiper-slide-active{
    opacity:1;
  }
  .swiper-slide{
    background-size: 100% 160%;
    -webkit-background-size: 100% 160%;
  }
</style>
