<template>
    <div class="navbar">
      <div class="navbar-logo">
        <span class="navbar-logo__icon material-icons">pets</span>
        <span class="navbar-logo__text">Weserfjords</span>
      </div>
      <navbar-link-list></navbar-link-list>
    </div>
</template>
<script>
export default {

};
</script>
<style lang="less">
.navbar {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: @color-secondary-60;
    height: @header-height-mobile;
    z-index: 100;
    box-shadow: 0 0 2px 0 black;

    @media @medium-and-up {
        background-color: @color-secondary-60;
        height: @header-height;
        flex-direction: row;
    }
}

.navbar-logo {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: @color-primary-100;
  height: 100%;

  &__text {
    font-size: 1.5rem;
  }

  &__icon {
    font-size: 1.3rem;
    margin-right: 0.2rem;
  }
}
</style>
