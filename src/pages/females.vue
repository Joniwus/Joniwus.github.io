<template>
    <navbar></navbar>
    <div class="page">
        <div class="container prl-2 pt-2 pb-1">
            <cat-list-item v-for="(item, index) in femaleCats" :key="index" :item="item"></cat-list-item>
        </div>
    </div>
</template>
<script>
import { types, cats } from '../cat-data';

export default {
    computed: {
        femaleCats () {
            return cats.filter((cat) => cat.type === types.female);
        }
    }
};
</script>
<style lang="less">

</style>
