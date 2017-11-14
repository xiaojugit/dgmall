<template>
  <div class="nav">
    <img src="../assets/logo.png">
    <nav>
      <router-link to="/">Go to Home</router-link>&nbsp;
      <router-link to="/foo">Go to Foo</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/common.scss';

.nav {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media screen and (max-width: 600px) {
  .nav {
    margin-top: 20px;
  }
  .nav img {
    width: 120px;
  }
}
</style>
