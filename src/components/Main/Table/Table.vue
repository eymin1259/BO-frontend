<template>
  <div class="table">
    <div class="button-block">
      <div>
        <button
          class="action"
          :key="button.name"
          v-for="button of table.status_buttons"
        >
          {{ button.name }}
        </button>
      </div>
      <div>
        <button
          class="excel"
          :key="button.name"
          v-for="button of table.excel_buttons"
        >
          <i class="file-excel" />
          {{ button.name }}
        </button>
      </div>
    </div>
    <div class="inquiry">
      전체 조회건 수:
      <b>{{ inquiry }}</b>
      건
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <div class="check-header">
                <input type="checkbox" class="allCheck" />
                <label
                  :class="['check-label', all && 'checked']"
                  @click="setAllCheck"
                ></label>
              </div>
            </th>
            <th :key="header" v-for="header of table.table_headers">
              {{ orderMap[header] }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item" v-for="item of result">
            <td>
              <div class="check-header">
                <input type="checkbox" class="allCheck" />
                <label
                  :class="['check-label', all && 'checked']"
                  @click="setAllCheck"
                ></label>
              </div>
            </td>
            <td :key="value" v-for="value of Object.values(item)">
              {{ value }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td :colspan="length + 1">
              <Pagination :page="page" :lastPage="lastPage" />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="button-block">
      <div>
        <button
          class="action"
          :key="button.name"
          v-for="button of table.status_buttons"
        >
          {{ button.name }}
        </button>
      </div>
      <div>
        <button
          class="excel"
          :key="button.name"
          v-for="button of table.excel_buttons"
        >
          <i class="file-excel" />
          {{ button.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { orderMap } from '@/assets/textMap';
import Pagination from '@/components/Main/Pagination/Pagination';
import { mapGetters } from 'vuex';

export default {
  components: { Pagination },
  props: { table: Object },
  data() {
    return {
      orderMap,
      inquiry: undefined,
      all: false,
      length: this.table.table_headers.length,
      page: 0,
      lastPage: 0
    };
  },
  computed: {
    ...mapGetters('orderStore', ['getResult']),
    result() {
      return this.getResult;
    }
  },
  methods: {
    setAllCheck() {
      this.all = !this.all;
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  .button-block {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;

    button {
      height: 22px;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 12px;
      line-height: 22px;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;

      &.action {
        margin-right: 20px;
        color: #fff;
        border: 1px solid #357ebd;
        background-color: #428bca;
      }

      &.excel {
        margin-left: 20px;
        color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;
      }

      i.file-excel {
        margin-top: 1px;
        margin-right: 2px;
        font-size: 14px;
        line-height: 20px;
        font-family: FontAwesome;

        &:before {
          content: '\f1c3';
        }
      }
    }
  }

  .inquiry {
    margin-top: 15px;
    font-size: 13px;
  }

  .table-container {
    overflow-x: auto;
    overflow-y: hidden;
    margin: 10px 0;

    table {
      width: 100%;
      border: 1px solid #ddd;
      border-collapse: collapse;

      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
        line-height: 1.5;
        white-space: nowrap;

        .check-header {
          position: relative;
          width: 19px;
          height: 19px;
          line-height: 19px;

          &:hover {
            .check-label:before {
              background: #fff;
              border-color: rgba(34, 36, 38, 0.35);
            }
          }

          input {
            position: absolute;
            width: 0;
            height: 0;
            top: 0;
            left: 0;
            opacity: 0 !important;
            outline: none;
            z-index: -1;

            &:checked ~ .check-label:before {
              background: #fff;
              border-color: rgba(34, 36, 38, 0.35);
            }
          }

          .check-label {
            position: relative;
            cursor: pointer;
            outline: none;
            transition: color 0.1s ease;

            &:before {
              content: '';
              position: absolute;
              top: 4px;
              left: 0;
              width: 17px;
              height: 17px;
              border: 1px solid #d4d4d5;
              margin-left: -10px;
              background: #fff;
              transition: border 0.1s ease, opacity 0.1s ease,
                transform 0.1s ease;
            }

            &.checked {
              &:after {
                content: '\f00c';
                position: absolute;
                left: -1px;
                top: 4px;
                display: inline-block;
                width: 17px;
                height: 17px;
                padding-left: 3px;
                padding-top: 1px;
                margin-left: -10px;
                color: rgba(0, 0, 0, 0.95);
                font-family: FontAwesome;
                font-weight: bold;
                font-size: 13px;
                text-align: center;
                transition: border 0.1s ease, opacity 0.1s ease,
                  transform 0.1s ease, box-shadow 0.1s ease;
              }
            }
          }
        }
      }

      thead {
        th {
          font-size: 14px;
          font-weight: 600;
          background-color: #eee;

          &:first-child {
            width: 38px;
          }
        }
      }
    }
  }
}
</style>
