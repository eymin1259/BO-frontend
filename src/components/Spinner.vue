<template>
  <div class="spinner-whole">
    <img class="loading-img" src="/img/ico_brandi_loading.png" />
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
};
</script>

<style>
.spinner-whole {
  position: fixed;
}

.background {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.loading-img {
  position: absolute;
  width: 200px;
  height: auto;

  top: 50%;
  right: 50%;
}
</style>
