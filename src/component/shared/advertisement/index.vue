<template>
  <div class="advertisment d-flex justify-content-center align-items-center"
   :style="{hight : hight}">
    <span>{{ addSize }}</span>
  </div>
</template>
<script>
export default {
  props: ['addSize','hight'],
};
</script>
<style lang="scss" scoped>
.advertisment {
  height: 640px;
  width: 100%;
  background-color: var(--advertisement-color);
  border-radius: 8px;
  span {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--advertisement-text-color);
  }
}
</style>
