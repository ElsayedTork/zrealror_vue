<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <i class="fa-solid fa-chevron-left"></i>
          </a>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/prop">1</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/prop">2</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/prop">3</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/prop">4</router-link>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
    export default{
        data(){
            
        }
    }
</script>
<style lang="scss" scoped>
.pagination {
  width: fit-content;
  margin-inline: auto;
  .page-item {
    margin-inline-end: 10px;
    .page-link {
      background-color: transparent;
      color: var(--text-edit-color);
      &:focus {
        color: var(--white-color);
        background-color: var(--main-color);
        padding-inline: 13px;
        padding-block: 10px;
        box-shadow: none !important;
        border-radius: 8px;
      }
    }
    &:first-of-type,
    &:last-of-type {
      .page-link {
        background-color: var(--white-color);
        padding-inline: 13px;
        padding-block: 10px;
        border-radius: 8px;
        &:focus {
          background-color: var(--white-color);
          color: var(--text-edit-color);
        }
      }
    }
  }
}
</style>
