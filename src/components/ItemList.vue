<template>
  <div class="item-list clearfix">
    <div class="item" v-for="item in items">
      <router-link :to="item.url">
        <div class="item-pic">
          <img :src="item.img" class="lazy">
        </div>
        <div class="item-title">
          <span>{{item.title}}</span>
        </div>
      </router-link>
      <div class="item-price-box" v-if="item.have">
        <span class="item-price1">￥{{item.price.new}}</span>
        <s class="item-price2">￥{{item.price.old}}</s>
      </div>
      <div class="item-price-box" v-else>
        <span class="not-have">商品已下架</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Item',
  props: ['items'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.item-list {}

.item {
  float: left;
  width: 47%;
  height: auto;
  padding: 5px;
  margin: 0% 0 2% 2%;
  box-sizing: border-box;
  background-color: #fff;
  -webkit-tap-highlight-color: transparent;

  img {
    max-width: 100%;
  }

}

.item-title {
  display: -webkit-box;
  overflow: hidden;
  font-size: 12px;
  text-align: left;
  height: 40px;
  line-height: 20px;
  color: #000;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.item-price-box {
  height: 30px;
  line-height: 30px;
  font-size: 16px;

  .item-price1 {
    color: #fe4c5c;
    font-weight: 600;
  }
  .item-price2 {
    color: #aaa;
    font-size: 14px;
  }
  .not-have {
    color: #aaa;
  }
}

</style>
