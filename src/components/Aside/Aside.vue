<template>
  <aside>
    <ul class="main-menus">
      <li class="toggler">
        <i class="toggle" />
      </li>
      <li
        class="main-menu"
        :key="main.name"
        v-for="main of menus"
        @click="changeCurrMain(main.param)"
      >
        <a
          :href="main.param === 'home' && '/'"
          :class="[
            'main-link',
            main.param === mainMenu && 'active',
            main.param === checkedMenu && 'checked'
          ]"
        >
          <div>
            <i :class="[main.param]" />
            <span class="name">{{ main.name }}</span>
          </div>
          <div>
            <i class="arrow" />
          </div>
        </a>
        <ul :class="['sub-menus', main.param !== checkedMenu && 'hidden']">
          <li class="sub-menu" :key="sub.name" v-for="sub of main.sub">
            <a
              :class="['sub-link', sub.param === subMenu && 'active']"
              :href="sub.url"
            >
              {{ sub.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
import menus from '@/assets/textMap/aside';
export default {
  data() {
    return {
      menus,
      mainMenu: this.$route.path.split('/')[1],
      subMenu: this.$route.path.split('/')[2],
      checkedMenu: this.$route.path.split('/')[1],
      fold: false
    };
  },
  methods: {
    changeCurrMain(main) {
      this.checkedMenu = main;
    },
    toggleFold() {
      this.fold = !this.fold;
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 45px;
  left: 0;
  width: 215px;
  height: 100%;
  background: #35363a;

  .main-menus {
    .toggler {
      border-bottom: 1px solid transparent;

      .toggle {
        float: right;
        width: 25px;
        height: 30px;
        margin: 15px 0;
        border-radius: 4px 0px 0px 4px;
        background-color: #fcfcfc;
        cursor: pointer;

        &:before {
          margin: 0px 2px 3px 8px;
          display: inline-block;
          font-size: 18px;
          font-family: FontAwesome;
          content: '\f104';
          font-weight: 200;
          line-height: 30px;
          text-shadow: none;
        }
      }

      &:after {
        content: '';
        display: table;
        clear: both;
      }
    }

    .main-menu {
      border-bottom: 1px solid #414247;
      transition: max-height 1.2s;

      &:last-child {
        border-bottom: 0;
      }

      .main-link {
        display: flex;
        justify-content: space-between;
        padding: 10px 13px 10px 15px;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        font-weight: 100;
        text-decoration: none;
        cursor: pointer;
        color: #eee;
        transition: max-height 1.2s;

        &:hover {
          color: #f1f1f1;
          background: #27272b;
        }

        &.active {
          border-right: 4px solid #d12610;
          color: #f1f1f1;
          background: #27272b;
        }

        &.checked {
          background: #27272b;

          .arrow {
            &:before {
              content: '\f107';
            }
          }
        }

        i {
          width: 1.25em;
          margin-top: 1px;
          margin-right: 5px;
          color: #999;
          font-size: 16px;
          text-shadow: none;
          font-family: 'Simple-Line-Icons';
        }
        .home {
          &:before {
            content: '\e069';
          }
        }
        .order {
          &:before {
            content: '\e04d';
          }
        }
        .refund_order {
          &:before {
            content: '\e04e';
          }
        }
        .product {
          &:before {
            content: '\e035';
          }
        }
        .inquiry {
          &:before {
            content: '\e021';
          }
        }
        .account {
          &:before {
            content: '\e005';
          }
        }

        .name {
          font-size: 14px;
        }

        .open {
          &:before {
            font-family: 'FontAwesome';
            content: '\f107';
          }
        }

        .arrow {
          transition: all 1.2s ease-in-out;

          &:before {
            font-family: 'FontAwesome';
            content: '\f104';
          }
        }
      }

      .sub-menus {
        margin: 8px 0px;
        max-height: 100%;
        transition: max-height 0.6s;

        &.hidden {
          overflow: hidden;
          margin: 0px;
          max-height: 0px;
          transition: max-height 0.5s ease;
        }

        .sub-menu {
          margin-top: 1px;
          transition: max-height 0.6s;

          .sub-link {
            display: flex;
            padding: 8px 0px 8px 35px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 300;
            background: none;
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            text-decoration: none;
            cursor: pointer;
            color: #eee;
            transition: max-height 0.6s;

            &:hover {
              color: #fff;
              background: #414247;
            }

            &.active {
              color: #fff;
              background: #414247;
            }
          }
        }
      }
    }
  }
}
</style>
