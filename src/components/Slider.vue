<template>
  <div class="slider">
    <ul>
      <li><img src="../assets/gte_slider.jpg" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/common.scss';

.slider {
  width: 100%;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    >li {

    }
  }
  img {
    max-width: 100%;
  }
}
</style>
