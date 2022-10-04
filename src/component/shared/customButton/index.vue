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
.saveSearch {
  background-color: transparent;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  width: 100%;
  margin-block-start: 16px;
  padding-block: 10px;
  border-radius: 8px;
}
@media (max-width: 576px) {
  .details {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 14px 7px 14px;
  }
}
</style>
