<template>
    <navbar></navbar>
    <div class="page">
        <div class="container">
            <flickity class="home-slider" :options="flickityOptions">
                <div class="home-slider__item">
                    <img src="/img/Abbey/Abbey (1).jpg" />
                </div>
                <div class="home-slider__item">
                    <img src="/img/Abbey/Abbey (2).jpg" />
                </div>
            </flickity>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            flickityOptions: {
                imagesLoaded: true,
                wrapAround: true,
                autoPlay: 3000,
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
