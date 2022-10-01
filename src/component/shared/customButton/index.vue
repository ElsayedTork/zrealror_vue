<template>
  <button :class="btnClass">{{ text }}</button>
</template>
<script>
export default {
  props: ['text', 'btnClass'],
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
.details {
  background-color: var(--main-color);
  color: var(--white-color);
  margin-block-end: 3px;
}
</style>
