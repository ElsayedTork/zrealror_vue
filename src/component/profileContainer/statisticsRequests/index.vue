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
<style lang="scss" scoped>
.profile__center__about {
  background-color: var(--white-color);
  border-radius: 16px;
  header {
    padding-inline: 32px;
    padding-block: 13px;
    h4 {
      font-weight: 600;
      font-size: 1.125rem;
    }
  }

  &__body {
    padding-inline: 32px;
    margin-block-start: 32px;
    &__name {
      h3 {
        color: rgba(27, 37, 52, 1);
        font-size: 1.25rem;
        font-weight: 600;
        margin-block-end: 8px;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
      }
    }
    &__item {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px;
      width: 200px;
      span {
        font-weight: 500;
      }
      div {
        margin-block-start: 20px;
        figure {
          padding: 14px !important;
          border-radius: 8px;
          img {
            width: 20px;
            height: 20px;
          }
        }
        figure.Open {
          background-color: rgba(127, 186, 122, 0.12);
        }
        figure.Closed {
          background-color: rgba(255, 117, 76, 0.12);
        }
      }
    }
    &__data {
      margin-block-end: 32px;
      margin-block-start: 42px;
      ul {
        margin-block-end: 32px;
        li {
          list-style: none;
          margin-block-end: 6px;
          &:first-child {
            color: #49505b;
            font-weight: 500;
          }
          &:last-child {
            color: #5f666f;
            font-weight: 400;
            font-size: 0.875rem;
          }
        }
      }
    }
  }
}
</style>
