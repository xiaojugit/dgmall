<template>
  <div class="container">
    <MainHeader></MainHeader>
    <div class="search-con main">
      {{msg}}
      <ul>
        <li v-for="item in items">{{item}}</li>
      </ul>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'Search',
  components: { MainHeader, MainFooter },
  data () {
    return {
      msg: 'Welcome to Your Search page',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/common.scss';
.search-con {
  margin: 0 10px;
  // background: #ffeefe;
}
ul {
  padding: 0;
  list-style: none;
}
li {
  padding: 10px;
  border-top: 1px solid #eee;
}
</style>

