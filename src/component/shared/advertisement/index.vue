<template>
  <div class="advertisment d-flex justify-content-center align-items-center"
   :style="{hight : hight,fontSize:fontsize}">
    <span>{{ addSize }}</span>
  </div>
</template>
<script>
export default {
  props: ['addSize','hight','fontsize'],
};
</script>
<style lang="scss" scoped>
.advertisment {
  height: 640px;
  width: 100%;
  background-color: var(--advertisement-color);
  border-radius: 8px;
  span {
    font-weight: 700;
    color: var(--advertisement-text-color);
  }
}
</style>
