<template>
  <div class="profile__center__about">
    <header class="d-flex justify-content-between align-items-center">
      <h4>statistics</h4>
    </header>
    <hr />

    <div class="profile__center__about__body pb-4 d-flex align-items-center">
      <div
        class="profile__center__about__body__item me-2"
        v-for="statistic in statistics"
        :key="statistic.id"
      >
        <span>{{ statistic.type }} Requests</span>
        <div class="d-flex align-items-center justify-content-start">
          <figure :class="statistic.type">
            <img
              :src="require(`./../../../assets/images/${statistic.srcImg}`)"
              :alt="statistic.type"
            />
          </figure>
          <b class="ms-2">{{ statistic.num }}</b>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      statistics: [],
    };
  },
  created() {
    this.statistics = this.$store.state.statistics;
  },
};
</script>
<style lang="scss"></style>
