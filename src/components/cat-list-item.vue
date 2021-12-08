<template>
  <div class="cat-list-item mb-2" :class="{ 'cat-list-item--collapsed': collapsed }">
    <div class="cat-list-item__head p-1">
      <h2 class="cat-list-item__title">
        {{ item.name }}
      </h2>
      <p class="cat-list-item__description" v-html="item.description">
      </p>
      <transition name="collapse" mode="out-in">
        <div class="cat-list-item__body" v-if="!collapsed">
          <div class="cat-list-item-info-block" v-for="(infoEntry, index) in infoEntries" :key="index">
            <h3 class="cat-list-item-info-block__key">
              {{ infoEntry.title }}
            </h3>
            <p class="cat-list-item-info-block__value" v-html="infoEntry.value">
            </p>
          </div>
        </div>
      </transition>
    </div>
    <div class="cat-list-item__image-gallery p-1">
      <flickity :options="flickityOptions" ref="flickity">
        <div class="cat-list-item__image-container" v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </div>
      </flickity>
    </div>
    <div class="cat-list-item__footer mt-1">
      <button @click="toggleCollapse" class="cat-list-item__collapse">
        <template v-if="collapsed">Mehr anzeigen</template>
        <template v-else>Weniger anzeigen</template>
        <span class="material-icons">expand_less</span>
      </button>
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
                autoPlay: false
            },
            loopId: undefined,
            cancelId: undefined,
            collapsed: true
        };
    },
    computed: {
        infoEntries () {
            return this.item.info;
        },
        images () {
            const images = [];

            for (let i = 1; i <= this.item.image.folderCount; i++) {
                images.push(`img/${this.item.image.folder}/${this.item.image.folder} (${i}).jpg`);
            }

            images.push(...this.item.image.files);

            return images;
        }
    },
    methods: {
        resizeFlickity () {
            this.$refs.flickity.resize();
            this.loopId = setTimeout(() => this.resizeFlickity(), 0);
        },
        toggleCollapse () {
            this.collapsed = !this.collapsed;

            if (this.cancelId) {
                clearTimeout(this.cancelId);
            } else {
                this.resizeFlickity();
            }

            this.cancelId = setTimeout(() => {
                this.cancelId = undefined;

                if (this.loopId) {
                    clearTimeout(this.loopId);
                }
            }, 200);
        }
    }
};
</script>
<style scoped lang="less">
.cat-list-item {
  display: flex;
  flex-wrap: wrap;
  background: @color-secondary-60;
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
  overflow: hidden;
}

.cat-list-item-info-block {
  flex-basis: 33%;
}

.cat-list-item--collapsed .cat-list-item__image-container {
  height: 100px;
}

.cat-list-item__image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  transition: height @transition-duration ease-in-out;

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
}

.cat-list-item__footer {
  width: 100%;
}

.cat-list-item__collapse {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: @color-secondary-100;
  border: none;
  cursor: pointer;
  width: 100%;

  & > .material-icons {
    transition: all @transition-duration linear;
  }

  .cat-list-item--collapsed & .material-icons {
    transform: rotate(180deg);
  }
}
</style>
