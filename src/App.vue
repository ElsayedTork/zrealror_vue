<template>
  <Header />
  <div class="container"></div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './component/header/index.vue';
import Footer from './component/footer/footer.vue';

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
div {
  margin: 0;
  padding: 0;
}
</style>
