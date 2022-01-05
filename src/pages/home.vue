<template>
    <navbar></navbar>
    <div class="page">
        <div class="container">
        <h1> Willkommen auf der Seite der Weserfjords </h1>
        <h2> Wir haben neue Kitten im Haus </h2>
            <flickity class="home-slider" :options="flickityOptions">
                <div class="home-slider__item">
                    <img src="/img/E_Wurf/E_Wurf.jpg" />
                </div>
            </flickity>
            <p> Das sind von Links nach Rechts: Elaine, Erwin, Emil </p>
            <p> Mit einem <a href="/litters"> Klick hier</a> gelangen Sie zu mehr Bildern </p>

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
