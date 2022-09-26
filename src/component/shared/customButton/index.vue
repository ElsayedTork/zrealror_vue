<template>
  <button :class="btnClass">{{ text }}</button>
</template>
<script>
export default {
  props: ['text', 'btnClass'],
  data() {
    return {};
  },
};
</script>
<style>
button {
  border-radius: 5px;
  padding: 7px 24px 7px 24px;
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
