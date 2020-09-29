<template>
  <div>
    <div class="drop-list" v-show="isColorOpen">
      <i class="fas fa-times"></i>
      <input v-model="testInput" type="text" />
      <ul>
        <li v-for="(color, idx) in option.color_option" :key="idx">
          {{ color }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { option } from '@/assets/mock/productRegist.js';
export default {
  name: 'DropList',
  data() {
    return {
      option: option,
      closeClicked: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/commonD.scss';

.drop-list {
  background-color: $midgrey;
  position: relative;
  top: 0;
  height: 230px;
  cursor: pointer;
  overflow: scroll;

  input[type='text'] {
    width: 90%;
    height: 25px;
    margin: 10px 0;
    border: 1px solid $darkgrey;
    border-radius: 5px;
    background-color: $lightgrey;
  }

  li {
    display: flex;
    align-items: center;
    height: 30px;

    &:hover {
      color: white;
      background-color: $coolgrey;
    }
  }
}
</style>
