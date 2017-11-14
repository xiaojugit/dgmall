<template>
  <div class="main-footer">
    <div class="bg-cover"></div>
    <div class="fl">
      <router-link to="/" v-bind:class="active == 1 ? 'on' : ''">Home</router-link>
      <router-link to="/category" v-bind:class="active == 2 ? 'on' : ''">Cate</router-link>
      <router-link to="/cart" v-bind:class="active == 3 ? 'on' : ''">Cart</router-link>
      <router-link to="/account" v-bind:class="active == 4 ? 'on' : ''">User</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: ['idx'],
  computed: {

  },
  methods: {

  },
  data () {
    return {
      show: false,
      active: this.idx
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/common.scss';
.main-footer {
  position: fixed;
  width: 100%;
  max-width: $maxWidth;
  bottom: 0;
  left: 50%;
  height: 50px;
  transform: translateX(-50%);
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 3px rgba(200,200,200,0.4);
  z-index: 4
}

.fl {
  position: relative;
  height: 100%;
  display: flex;


  >a {
    flex: 1;
    width: 0%;
    flex-wrap: nowrap;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    color: #999;
  }
  & .on {
    color: #fe4c5c;
  }
}

.bg-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
}

</style>
