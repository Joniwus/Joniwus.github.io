<template>
  <navbar></navbar>
  <div class="page">

      <div class="container prl-2 pt-2 pb-1">
          <h1>E-Wurf</h1>
          <cat-list-item v-for="(item, index) in litterCats" :key="index" :item="item"></cat-list-item>
      </div>
  </div>
</template>
<script>
import { cats, types } from '@/cat-data';

export default {
    computed: {
        litterCats () {
            return cats.filter((cat) => cat.type === types.litter);
        }
    }
};
</script>
<style lang="less">

</style>
