<template>
  <div class="container">
    <MainHeader></MainHeader>
    <div class="account-con main">
      <br>
      {{msg}}
    </div>
    <MainFooter v-bind:idx="4"></MainFooter>
  </div>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'Category',
  components: { MainHeader, MainFooter },
  data () {
    return {
      msg: 'Welcome to Your Account page'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/common.scss';
.account-con {
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

