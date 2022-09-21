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
h3 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
