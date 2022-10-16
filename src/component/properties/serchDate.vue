<template>
  <a-space direction="vertical" :size="12">
    <a-range-picker v-model:value="value1" separator="-" />
  </a-space>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
    };
  },
};
</script>
