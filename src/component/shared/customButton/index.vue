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
.canselingSearch {
  background-color: transparent;
  border: 1px solid var(--text-gray-color);
  padding-block: 10px;
  padding-inline: 35px;
  border-radius: 8px;
  color: var(--text-gray-color);
}
.savingSearch {
  color: var(--white-color);
  background-color: var(--main-color);
  padding-block: 10px;
  padding-inline: 44px;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-inline-start: 12px;
}
.resetBtn {
  color: var(--text-gray-color);
  background-color: var(--resetBtn-color);
  border-color: transparent;
  width: 50%;
  display: inline-block;
  margin-inline-end: 6px;
}
.searchBtn {
  color: var(--white-color);
  background-color: var(--main-color);
  border-color: transparent;
  width: 50%;
  display: inline-block;
  margin-inline-start: 10px;
}
@media (max-width: 576px) {
  .details {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 14px 7px 14px;
  }
}
</style>
