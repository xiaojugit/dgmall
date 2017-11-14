<template>
  <div class="container">
    <MainHeader></MainHeader>
    <div class="index-con main">
      <Slider></Slider>
      <Notice></Notice>
      <div class="title-box">
        <h3 class="title">你想要的 这里都有</h3>
      </div>
      <IndexCategory></IndexCategory>
      <div class="site-banner">
        <a href="#"><img src="http://www.86daigou.com/Images/mobile86/banner_20160810.jpg" alt="#"></a>
      </div>
      <div class="title-box">
        <h3 class="title">中国味道</h3>
      </div>
      <ItemList v-bind:items="items"></ItemList>
    </div>
    <MainFooter v-bind:idx="1"></MainFooter>
  </div>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import Slider from '@/components/Slider.vue'
import Notice from '@/components/Notice.vue'
import IndexCategory from '@/components/IndexCategory.vue'
import ItemList from '@/components/ItemList.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'Index',
  components: { MainHeader, MainFooter, Slider, Notice, IndexCategory, ItemList },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [{
        url: '/item/001',
        title: '湖南常德童胖子酱板鸭',
        price: { new: 38.00, old: 58.00 },
        img: 'http://www.86daigou.com/com_picture/86mall_categories/a8b8948cecd47ba3f81212738572163d.jpg',
        have: true
      }, {
        url: '/item/002',
        title: '湖南常德童胖子酱板鸭',
        price: { new: 38.00, old: 58.00 },
        img: 'http://www.86daigou.com/com_picture/86mall_categories/a8b8948cecd47ba3f81212738572163d.jpg',
        have: false
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/common.scss';
.index-con {
  height: 1000px;
}

</style>
