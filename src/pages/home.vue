<template>
  <navbar></navbar>
  <div class="page">
    <flickity class="home-slider" :options="flickityOptions">
      <div class="home-slider__item">
        <img src="../../public/img/Abbey/IMG_20170115_101602.jpg" />
      </div>
      <div class="home-slider__item">
        <img src="../../public/img/Abbey/IMG_20170201_142321.jpg" />
      </div>
    </flickity>
  </div>
</template>
<script>
export default {
    data () {
        return {
            flickityOptions: {
                imagesLoaded: true,
                wrapAround: true,
                autoPlay: 2000,
                pauseAutoPlayOnHover: true
            }
        };
    }
};
</script>
<style lang="less">
.home-slider {
  height: 400px;
}

.home-slider__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
