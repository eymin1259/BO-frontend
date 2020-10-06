<template>
  <div v-if="this.pageText.length > 0" class="pagination">
    <div
      :class="[
        isNaN(button) ? 'page-ellipsis' : 'page-button',
        index === 0 && 'begin',
        index === pageText.length - 1 && 'last'
      ]"
      :key="button"
      v-for="(button, index) of pageText"
    >
      {{ button }}
    </div>
  </div>
</template>

<script>
export default {
  props: { page: Number, lastPage: Number },
  computed: {
    pageText() {
      if (this.lastPage <= 5) {
        return [
          ...Array(this.lastPage)
            .fill()
            .map((_, index) => index + 1)
        ];
      }
      if (this.page > 0 && this.page < 4) {
        return [
          ...Array(4)
            .fill()
            .map((_, index) => index + 1),
          '...',
          this.lastPage
        ];
      }
      if (this.page > this.lastPage - 3 && this.page <= this.lastPage) {
        return [
          1,
          '...',
          ...Array(4)
            .fill()
            .map((_, index) => this.lastPage - 3 + index)
        ];
      }
      return [
        1,
        '...',
        ...Array(3)
          .fill()
          .map((_, index) => this.page - 1 + index),
        '...',
        this.lastPage
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin: 10px 0;

  .page-button {
    padding: 6px 12px;
    margin-left: -1px;
    font-size: 13px;
    line-height: 1.5;
    color: #428bca;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;

    &:hover {
      color: #2a6496;
      background-color: #eee;
      border-color: #ddd;
    }

    &.begin {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &.last {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  .page-ellipsis {
    padding: 6px 12px;
    border: 1px solid #ddd;
    margin-left: -1px;
    font-size: 13px;
    line-height: 1.5;
    background-color: #fff;
    color: black;
  }
}
</style>
