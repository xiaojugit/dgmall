<template>
  <div class="container">
    <MainHeader></MainHeader>
    <div class="foo test">
      {{msg}}
      <br>
      <a href="#">link</a>
    </div>
    <MainFooter v-bind:idx="3"></MainFooter>
  </div>
</template>
<script>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'

export default {
  name: 'Foo',
  components: { MainHeader, MainFooter },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/common.scss';
.foo {
  height: 200px;
  background: #6cdaa8;
}

</style>
