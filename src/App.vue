<template>
  <div>
    <Header />
    <div class="container">
      <Aside />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Aside from '@/components/Aside/Aside';

export default {
  name: 'Home',
  components: {
    Header,
    Aside
  }
};
</script>

<style lang="scss">
@import './styles/_reset.scss';
.container {
  margin-top: 45px;
  color: #222;

  main {
    min-height: 695px;
    margin-left: 215px;
    padding: 25px 20px 20px 20px;
    border-radius: 0 0 0 4px;
    margin-top: 0px;
    background-color: #fafafa;
  }
}
</style>
