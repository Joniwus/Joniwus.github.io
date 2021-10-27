<template>
  <component :is="wrapperComponent" class="navbar-link-list" :options="flickityOptions">
    <div class="navbar-link-list__item">
      <a class="navbar-link-list__link" href="/">
        Startseite
      </a>
    </div>
    <div class="navbar-link-list__item">
      <a class="navbar-link-list__link" href="/males">
        Kastraten
      </a>
    </div>
    <div class="navbar-link-list__item">
      <a class="navbar-link-list__link" href="/females">
        Katzen
      </a>
    </div>
    <div class="navbar-link-list__item">
      <a class="navbar-link-list__link" href="/kittens">
        Kitten
      </a>
    </div>
    <div class="navbar-link-list__item">
      <a class="navbar-link-list__link" href="/about">
        Über uns
      </a>
    </div>
    <div class="navbar-link-list__item">
      <a class="navbar-link-list__link" href="/contact">
        Kontakt
      </a>
    </div>
  </component>
</template>
<script>
import windowSizeMixin from '../mixins/windowSizeMixin';

export default {
    mixins: [windowSizeMixin],
    data () {
        return {
            flickityOptions: {
                freeScroll: true,
                contain: true,
                prevNextButtons: false,
                pageDots: false
            }
        };
    },
    computed: {
        wrapperComponent () {
            return this.isMobile ? 'flickity' : 'div';
        }
    }
};
</script>
<style scoped lang="less">
.navbar-link-list {
  background: @color-primary-40;
  width: 100%;

  &__item {
    padding: 0.5rem 1rem;

    &:first-child {
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.3rem 0.6rem;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    white-space: nowrap;
    background: #00000010;
    border: 1px solid #ffffff10;
    border-radius: 1rem;

    &:hover {
      background-color: #00000044;
    }
  }

  @media @medium-and-up {
    display: flex;
    height: 100%;

    &__item {
      padding: 0;
    }

    &__link {
      border: none;
      background: transparent;
      border-radius: 0;
      padding: 0 1rem;
      height: @header-height;
    }
  }
}
</style>
