<template>
  <div class="select-date">
    <div class="select-box">
      <select @change="setSearch">
        <optgroup>
          <option
            :key="key"
            v-for="[key, title] of Object.entries(options)"
            :value="key"
            >{{ title }}</option
          >
        </optgroup>
      </select>
    </div>
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
    <div class="date-box">
      <datepicker
        class="left"
        v-model="from"
        placeholder="클릭해주세요"
        format="yyyy-MM-dd"
      />
      <div class="term">~</div>
      <datepicker
        class="right"
        v-model="to"
        placeholder="클릭해주세요"
        format="yyyy-MM-dd"
      />
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js';

export default {
  components: {
    Datepicker
  },
  props: {
    options: Object,
    buttons: Object,
    default: Number
  },
  data() {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - this.default);
    return {
      search: '',
      checked: this.default,
      from: fromDate,
      to: new Date()
    };
  },

  methods: {
    setSearch(e) {
      this.search = e.target.value;
    },
    setChecked(value) {
      if (value === -1) {
        this.checked = value;
        this.setDate(value);
        return;
      }
      this.checked = value;
      this.setDate(value);
    },
    setDate(value) {
      if (value === -1) {
        this.from = '';
        this.to = '';
        return;
      }
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - +value);
      this.from = fromDate;
      this.to = new Date();
    }
  }
};
</script>

<style lang="scss">
.select-date {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 15px;
  margin: 10px 0;
  margin-right: 150px;

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

  .date-box {
    display: flex;

    .left {
      input[type='text'] {
        border-radius: 3px 0 0 3px;
      }
    }

    .right {
      input[type='text'] {
        border-radius: 0 3px 3px 0;
      }
    }
    .vdp-datepicker {
      input[type='text'] {
        height: 34px;
        padding: 4px 12px;
        border: 1px solid #e6e6e6;
        text-align: center;
        font-size: 14px;
        color: #333;
        transition: border-color ease-in-out 0.15s;
        outline: none;

        &:focus {
          border-color: #999;
        }

        &::placeholder {
          text-align: center;
        }
      }
    }

    .term {
      display: flex;
      align-items: center;

      justify-content: center;
      min-width: 39px;
      padding: 6px 12px;
      border: 1px solid #e5e5e5;
      font-size: 14px;
      font-weight: 400;
      line-height: 1;
      color: #555;
      text-align: center;
      background: #e5e5e5;
    }
  }
}
</style>
