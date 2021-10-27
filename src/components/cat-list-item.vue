<template>
  <div class="cat-list-item">
    <div class="cat-list-item__head">
      <h2 class="cat-list-item__title">
        {{ item.name }}
      </h2>
      <p class="cat-list-item__description" v-html="item.description">
      </p>
    </div>
    <div class="cat-list-item__image-gallery">
      <flickity :options="flickityOptions">
        <div class="cat-list-item__image-container" v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </div>
      </flickity>
    </div>
    <div class="cat-list-item__body">
      <template v-if="!collapsed">
        <div class="cat-list-item-info-block" v-for="(info, index) in infoEntries" :key="index">
          <h3 class="cat-list-item-info-block__key">
            {{ info[0] }}
          </h3>
          <p class="cat-list-item-info-block__value">
            {{ info[1] }}
          </p>
        </div>
      </template>
      <button @click="toggleCollapse">collapse</button>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            flickityOptions: {
                imagesLoaded: true,
                wrapAround: true,
                autoPlay: 3000,
                pauseAutoPlayOnHover: true
            },
            collapsed: false
        };
    },
    computed: {
        infoEntries () {
            return Object.entries(this.item.info);
        },
        images () {
            const images = [];

            for (let i = 1; i <= this.item.image.folderCount; i++) {
                images.push(`img/${this.item.image.folder}/${this.item.name} (${i}).jpg`);
            }

            images.push(...this.item.image.files);

            return images;
        }
    },
    methods: {
        toggleCollapse () {
            this.collapsed = !this.collapsed;
        }
    }
};
</script>
<style scoped lang="less">
.cat-list-item {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
}

.cat-list-item__head {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
}

.cat-list-item__image-gallery {
  flex-basis: 50%;
  height: 100%;
}

.cat-list-item__body {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
}

.cat-list-item-info-block {
  flex-basis: 33%;
}

.cat-list-item__image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
