<template>
  <div class="main-header">
    <div class="bg-cover"></div>
    <div class="fl">
      <span class="back" @click="$router.go(-1)">Back</span>
      <div class="input-box">
        <input type="text" @click="$router.push('/search')">
      </div>
      <div class="menu" @click="show = !show">
        Menu
        <nav v-show="show">
          <router-link to="/">Go to Home</router-link>
          <br>
          <router-link to="/foo">Go to Foo</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    isShow: function () {
      this.show = !this.show
    }
  },
  methods: {

  },
  data () {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/common.scss';
.main-header {
  position: fixed;
  width: 100%;
  max-width: $maxWidth;
  top: 0;
  left: 50%;
  height: 50px;
  transform: translateX(-50%);
  z-index: 4;
}

.fl {
  position: relative;
  height: 100%;
}

.bg-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fe4c5a;
  opacity: 0.8;
}

.back {
  position: absolute;
  top: 10px;
  left: 0;
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
}

.input-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 50px;

  input {
    width: 100%;
    height: 30px;
    margin-top: 9px;
    padding: 0 8px;
    border: 0;
    outline: none;
    border-radius: 5px;
    box-sizing: border-box;
  }
}

.menu {
  position: absolute;
  top: 10px;
  right: 0;
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  outline: none;

  nav {
    position: absolute;
    top: 36px;
    right: 5px;
    padding: 6px 12px;
    text-align: left;
    line-height: 30px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid rgba(188, 188, 188, 0.3);
    box-shadow: 1px 2px 5px rgba(188, 188, 188, 0.3);

    &:after {
      content: '\25B2';
      position: absolute;
      top: -18px;
      right: 12px;
      z-index: 2;
    }
    a {
      color: #666;
      white-space: nowrap;
      text-decoration: none;
    }
  }
}

</style>
