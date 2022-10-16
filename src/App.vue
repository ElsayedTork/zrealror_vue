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

<style lang="scss">
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
  --opacityWhite-color: rgba(255, 255, 255, 0.5);
  --close-color: #828a9d;
  --modal-color: rgba(36, 39, 49, 0.8);
  --bgFilter: #eceff1;
  --colorFilter: #394456;
  --rang-color: #484b50;
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
.ant-picker {
  border-radius: 5px;
  border-color: var(--border-color) !important;
}
.ant-picker .ant-picker-input input {
  color: var(--placeholder-color) !important;
  padding-block: 6px;
}
.ant-picker .ant-picker-input input:first-child {
}
.ant-calendar-range-picker-separator {
  position: relative;
  color: transparent;
  top: -18px;
}
.ant-calendar-range-picker-separator:after {
  content: 'to';
}
.anticon.anticon-swap-right {
  opacity: 0 !important;
  position: relative;
}

.anticon.anticon-swap-right::after {
  content: '-';
  position: absolute;
  color: var(--placeholder-color);
  width: 30px;
  height: 1px;
  left: 0;
  top: 0;
  right: 0;
}
.ant-picker-suffix {
  position: absolute;
  right: 6px;
  content: url('./assets/images/properties/calendar.svg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
.range {
  padding-block: 28px;
  &__header {
    padding-block-end: 12px;
    p {
      &:first-child {
        color: var(--text-color-secondary);
        font-weight: 500;
        font-size: 0.875rem;
      }
      &:last-child {
        color: var(--rang-color);
        font-weight: 500;
        font-size: 0.75rem;
      }
    }
  }
  .slider-touch-area {
    background-color: #fff;
    border: 4px solid var(--main-color);
    border-radius: 50%;
  }
  .slider-connects {
    .slider-connect {
      background-color: var(--main-color);
    }
  }

  .slider-horizontal .slider-tooltip-top {
    bottom: -30px !important;
    left: 50%;
    transform: translate(-50%);
    &::before {
      content: none;
    }
    background-color: var(--main-color);
    border-color: transparent;
    opacity: 0;
    transition: opacity 0.5s;
  }
  &:hover {
    .slider-horizontal .slider-tooltip-top {
      opacity: 1;
    }
  }
}
</style>
