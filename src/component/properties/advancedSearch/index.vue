<template>
  <div class="search">
    <h4>Advanced Search</h4>
    <section class="search__filter">
      <ul>
        <li>
          <h6>Property Category</h6>
          <div class="dropdown">
            <button
              class="dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>5 Star</span>
              <img src="./../../../assets/images/properties/Shape.png" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">5 Star</a></li>
              <li><a class="dropdown-item" href="#">4 Star</a></li>
              <li><a class="dropdown-item" href="#">3 Star</a></li>
            </ul>
          </div>
        </li>
        <li>
          <h6>Property Location</h6>
          <div class="dropdown">
            <button
              class="dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>5 Star</span>
              <img src="./../../../assets/images/properties/Shape.png" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">5 Star</a></li>
              <li><a class="dropdown-item" href="#">4 Star</a></li>
              <li><a class="dropdown-item" href="#">3 Star</a></li>
            </ul>
          </div>
        </li>
        <li>
          <h6>Property Type</h6>
          <div class="dropdown">
            <button
              class="dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>5 Star</span>
              <img src="./../../../assets/images/properties/Shape.png" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">5 Star</a></li>
              <li><a class="dropdown-item" href="#">4 Star</a></li>
              <li><a class="dropdown-item" href="#">3 Star</a></li>
            </ul>
          </div>
        </li>
        <li>
          <h6>Floor</h6>
          <div class="dropdown">
            <button
              class="dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>5 Star</span>
              <img src="./../../../assets/images/properties/Shape.png" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">5 Star</a></li>
              <li><a class="dropdown-item" href="#">4 Star</a></li>
              <li><a class="dropdown-item" href="#">3 Star</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <div>
        <label for="customRange3" class="form-label">Example range</label>
        <input
          type="range"
          class="form-range"
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.search {
  border-radius: 8px;

  h4 {
    font-size: 1.25rem;
    color: var(--text-color-secondary);
    font-weight: 700;
    background-color: #eef2f3;
    padding-inline-start: 20px;
    padding-block: 14px;
  }
  .search__filter {
    padding-inline: 20px;
    background-color: var(--white-color) !important;
    ul {
      li {
        list-style: none;
        padding-block-start: 24px;
        h6 {
          font-size: 1rem;
          color: var(--text-color-secondary);
          font-weight: 500;
        }
        .dropdown-toggle {
          width: 100%;
          border-color: transparent;
          text-align: left;
          background-image: linear-gradient(to right, #f6f7f9, #ffffff);
          color: var(--placeholder-color);
          border: 1px solid var(--border-color);
          font-weight: 500;
          font-size: 0.875rem;
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
