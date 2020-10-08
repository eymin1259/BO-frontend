<template>
  <div class="loading-container">
    <div class="loading-block">
      <img src="@/assets/images/brandi_loading.png" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.document.body.style.overflowY = 'hidden';
  },
  beforeDestroy() {
    window.document.body.style.overflowY = 'auto';
  }
};
</script>

<style lang="scss" scoped>
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  cursor: wait;

  .loading-block {
    position: absolute;
    padding: 0px;
    margin: 0px;
    width: 45%;
    top: 45%;
    left: 25%;
    text-align: center;
    color: rgb(0, 0, 0);
    border: 0px;
    z-index: 1011;
    cursor: wait;
  }
}
</style>
