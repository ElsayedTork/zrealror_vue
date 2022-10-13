<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div
            class="modal-header d-flex justify-content-between align-items-center"
          >
            <h2>Save Search</h2>
            <i class="fa-solid fa-xmark" @click="closeModal"></i>
          </div>
          <hr />
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Enter Search Name</label
                >
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="saveSerch"
                />
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <custom-button
              @click="closeModal"
              text="Cancel"
              btnClass="canselingSearch"
            ></custom-button>
            <custom-button
              text="Save"
              btnClass="savingSearch"
              @click="sendSearch"
            ></custom-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import CustomButton from './../shared/customButton/index.vue';
export default {
  props: ['arrSave'],
  data() {
    return {
      saveSerch: '',
    };
  },
  components: {
    CustomButton,
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    sendSearch() {
      console.log('this.arrSave', this.arrSave);
      // this.$store.dispatch('addSearch', this.saveSerch);
      let newSavedSerch = { name: this.saveSerch, dataSearch: this.arrSave };
      this.$store.dispatch('savedSerch', newSavedSerch);
      this.closeModal();
    },
  },
};
</script>
<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-color);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border-radius: 16px;
  width: 606px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: var(--white-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  hr {
    margin-block-start: 23px;
    margin-block-end: 32px;
  }
}

.modal-header {
  h2 {
    color: var(--placeholder-color);
    font-weight: 700;
    font-size: 20px;
  }
  i {
    color: var(--close-color);
    font-size: 18px;
    cursor: pointer;
  }
}

.modal-body {
  margin: 20px 0;
  label {
    color: var(--text-edit-color);
    font-size: 0.875rem;
    font-weight: 500;
    margin-block-end: 12px;
  }
  input {
    padding-inline: 20px;
    padding-block: 15px;
    border-color: 1px solid var(--border-color);
    margin-block-end: 40px;
  }
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
