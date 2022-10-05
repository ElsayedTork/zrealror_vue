<template>
  <Header />
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './component/shared/header/index.vue';
import Footer from './component/shared/footer/index.vue';

export default {
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
  --main-op-color: rgba(34, 0, 84, 0.9);
  --text-gray-color: #737680;
  --text-edit-color: #777e90;
  --white-color: #fff;
  --orange-color: #c8a45d;
  --border-color: #eeeeee;
  --advertisement-color: rgba(119, 119, 119, 0.3);
  --advertisement-text-color: rgba(140, 140, 140, 1);
  --placeholder-color: #152c5b;
  --background-color: #e5e5e5;
  --text-color-secondary: #1b2534;
  --discound_color: #012257;
  --heading-color: #eef2f3;
  --resetBtn-color: #ececec;
  --opacityWhite-color:rgba(255, 255, 255, 0.5);
  --close-color:#828A9D;
  --modal-color:rgba(36, 39, 49,.8)
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
h1 nav,
button {
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
