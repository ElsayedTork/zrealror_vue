<template>
  <Header />
  <div class="container"></div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './component/header/index.vue';
import Footer from './component/footer/index.vue';

export default {
  data() {
    return {};
  },
  components: {
    Footer,
    Header,
  },
  methods: {},
};
</script>

<style class="scoped">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html {
  font-family: 'Roboto', sans-serif;
}

:root {
  --main-color: #220054;
}
*,
ul,
p,
span,
div,
hr,
img,
figure,
h5,
h4,
h3,
h2,
h1 nav {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter;
}
@font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/Inter-Medium.ttf');
}
</style>
