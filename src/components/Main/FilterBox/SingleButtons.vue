<template>
  <div class="button-block">
    <div class="title-box">{{ title }} :</div>
    <ul class="button-box">
      <li
        :class="['button', checked === -1 && 'checked']"
        @click="setChecked(-1)"
      >
        전체
      </li>
      <li
        :class="['button', checked === +key && 'checked']"
        :key="key"
        v-for="[key, value] of Object.entries(buttons)"
        @click="setChecked(+key)"
      >
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NAMESPACE from '@/store/modules/types';

export default {
  props: { title: String, buttons: Object, filterKey: String, default: Number },
  data() {
    return {
      checked: this.default,
      namespace: this.$route.params.subMenu
    };
  },
  computed: {
    ...mapState({
      getValue(state, getters) {
        return getters[NAMESPACE[this.namespace] + `/get${this.filterKey}`];
      }
    }),
    value() {
      return this.getValue;
    }
  },
  methods: {
    ...mapActions({
      setValue(dispatch, value) {
        return dispatch(
          NAMESPACE[this.namespace] + `/set${this.filterKey}`,
          value
        );
      }
    }),
    setChecked(value) {
      this.checked = value;
      this.setValue(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.button-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 15px;
  margin: 5px 0;

  .title-box {
    width: 125px;
    height: 30px;
    padding: 7px 0 0 10px;
    font-size: 14px;
  }

  .button-box {
    display: flex;
    flex-wrap: wrap;
    margin-right: 25px;

    .button {
      display: flex;
      align-items: center;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid #e6e6e6;
      margin-right: 2px;
      font-size: 14px;
      color: #333;
      line-height: 1.5;
      background-color: white;
      user-select: none;
      cursor: pointer;

      &:hover {
        border-color: #adadad;
        background-color: #e6e6e6;
      }

      &.checked {
        background-color: #428bca;
        color: white;
      }
    }
  }
}
</style>
