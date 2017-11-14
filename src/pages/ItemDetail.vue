<template>
  <div class="container">
    <MainHeader></MainHeader>
    <div class="item-detail main">
      <div class="title-box">
        <h3 class="title">你想要的 这里都有</h3>
      </div>
      <div>
        <br>
        title: {{ item.title }}
        <br>
        price: new {{ item.price.new }}, old {{ item.price.old }}
        <br>
        id: {{ item.id }}

      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'Index',
  components: { MainHeader },
  methods: {
    getItemDetail: function () {
      let id = this.$route.params.id

      return {
        title: '湖南常德童胖子酱板鸭',
        price: { new: 38.00, old: 58.00 },
        imgList: ['http://www.86daigou.com/com_picture/86mall_categories/a8b8948cecd47ba3f81212738572163d.jpg'],
        detail: '',
        id: id
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      item: this.getItemDetail()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/common.scss';


</style>
