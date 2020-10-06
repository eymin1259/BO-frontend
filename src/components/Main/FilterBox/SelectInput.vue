<template>
  <div class="select">
    <div class="select-box">
      <select @change="setSearch">
        <optgroup>
          <option>Select..</option>
          <option
            :key="key"
            v-for="[key, title] of Object.entries(options)"
            :value="key"
            >{{ title }}</option
          >
        </optgroup>
      </select>
    </div>
    <div class="input-box">
      <input type="text" placeholder="검색어를 입력하세요" @change="setWord" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Object
  },
  data() {
    return {
      search: '',
      word: ''
    };
  },
  methods: {
    setSearch(e) {
      this.search = e.target.value;
    },
    setWord(e) {
      this.word = e.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 15px;
  margin: 10px 0;
  margin-right: 300px;

  .select-box {
    padding-right: 5px;

    select {
      height: 30px;
      width: 100%;
      max-width: 120px;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding: 2px 10px;
      font-size: 13px;
      line-height: 28px;
      color: #333333;
      background-color: white;
      outline: none;
      transition: border-color ease-in-out 0.15s;

      optgroup {
        font-weight: 700;
      }

      &:focus {
        border-color: #999;
      }
    }
  }

  .input-box {
    input {
      height: 30px;
      max-width: 500px;
      width: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding: 2px 10px;
      font-size: 13px;
      line-height: 28px;
      color: #222222;
      background-color: white;
      outline: none;
      transition: border-color ease-in-out 0.15s;

      &:focus {
        border-color: #999;
      }
    }
  }
}
</style>
