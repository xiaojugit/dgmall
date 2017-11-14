<template>
  <div class="category-list">
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_2.png">
      <span>女装</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_3.png">
      <span>女鞋</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_4.png">
      <span>女包</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_5.png">
      <span>饰品</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_6.png">
      <span>配饰</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_7.png">
      <span>内衣</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_8.png">
      <span>护理</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_9.png">
      <span>彩妆</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_10.png">
      <span>食品</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_11.png">
      <span>母婴</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_1.png">
      <span>男装</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_12.png">
      <span>男鞋</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_13.png">
      <span>男包</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_14.png">
      <span>数码</span>
    </router-link>
    <router-link class="quick-entry-link" to="/">
      <img src="../assets/index_classify_15.png">
      <span>家电</span>
    </router-link>
    <router-link class="quick-entry-link border-b0" to="/">
      <img src="../assets/index_classify_16.png">
      <span>运动</span>
    </router-link>
    <router-link class="quick-entry-link border-b0" to="/">
      <img src="../assets/index_classify_17.png">
      <span>文化</span>
    </router-link>
    <router-link class="quick-entry-link border-b0" to="/">
      <img src="../assets/index_classify_18.png">
      <span>宠物</span>
    </router-link>
    <router-link class="quick-entry-link border-b0" to="/">
      <img src="../assets/index_classify_19.png">
      <span>家居</span>
    </router-link>
    <router-link class="quick-entry-link border-b0" to="/">
      <img src="../assets/index_classify_20.png">
      <span>建材</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'IndexCategory',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.category-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #fff;
}
.quick-entry-link {
    position: relative;
    display: inline-block;
    width: 20%;
    padding-bottom: 5px;
    text-align: center;
    border-right: 0.3px solid #eee;
    box-sizing: border-box;
    border-bottom: 0.3px solid #eee;

    &:nth-child(5n) {
      border-right: 0;
    }
    :after {
      content: ' ';
      position: absolute;
      top: -4px;
      left: -4px;
      display: block;
      width: 7px;
      height: 7px;
      background-color: #fff;
    }
    > img {
      width: 50%;
      display: block;
      margin: 5px auto;
    }
  }
.border-b0 {
  border-bottom: 0;
}
</style>
