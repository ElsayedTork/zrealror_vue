<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div
            class="modal-header d-flex justify-content-between align-items-center"
          >
            <h2>wishlist Modael</h2>
            <i class="fa-solid fa-xmark" @click="closeModal"></i>
          </div>
          <hr />
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Enter New Name</label
                >
                <input
                  type="text"
                  placeholder="Enter Name"
                  class="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="saveSerch"
                />
              </div>
            </form>
            <div class="modal-body__container">
              <div class="modal-line"></div>
              <span>or</span>
              <div class="modal-line"></div>
            </div>
            <section>
              <div>
                <label>Select From List</label>
                <div class="modal-body__list__container">
                  <ul>
                    <li
                      class="form-check"
                      v-for="(item, index) in propList"
                      :key="index"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="list"
                        id="flexRadioDefault1"
                        v-model="listElement"
                        :value="item"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {{ item }}
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
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
              @click="sendSearch(indexId)"
            ></custom-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex';
import CustomButton from './../shared/customButton/index.vue';
export default {
  props: ['indexId'],
  data() {
    return {
      saveSerch: '',
      listElement: '',
    };
  },
  computed: {
    ...mapState({
      propList: (state) => {
        return state.propFl.propList;
      },
    }),
  },
  components: {
    CustomButton,
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    sendSearch(index) {
      console.log('listElement', this.listElement);
      this.$store.dispatch('propFl/addFavorit', [index, this.listElement]);
      this.closeModal();
    },
  },
};
</script>
<style scoped lang="scss">
.modal-body__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 20px;
  span {
    color: var(--text-gray-color);
    font-size: 14px;
  }
  .modal-line {
    height: 1px;
    background-color: var(--hr-color);
    width: 46%;
  }
}

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
    font-size: 1.125rem;
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
  input[type='text'] {
    padding-inline: 20px;
    padding-block: 15px;
    border-color: 1px solid var(--border-color);
    margin-block-end: 40px;
    font-size: 0.875rem;
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
.modal-body__list__container {
  border: 1px solid var(--border-color);
  padding: 18px;
  border-radius: 5px;
  max-height: 181px;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--hr-color);
}

::-webkit-scrollbar-thumb {
  background: var(--scrool-color);
  max-height: 50px !important;
  border-radius: 5px;
}
::-webkit-scrollbar-button {
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
