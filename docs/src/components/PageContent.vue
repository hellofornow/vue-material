<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" class="main-header">
      <div class="md-title">
        <router-link exact to="/">
          <md-icon>face</md-icon> Amy and Amir's Wedding
        </router-link>
      </div>
      <div>
        <router-link exact to="/rsvp">RSVP</router-link>
      </div>
    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
  a {
    color: #d81b60 !important;
    font-weight: 500;
  }
  a:hover {
    text-decoration: none !important;
  }
  .page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column
  }

  .main-header {
    z-index: 2;
    color: #fff !important;
  }

  .nav-trigger {

  @media (min-width: 560px) {
    display: none;
  }
  }
  .md-title {
    flex: 1;

  @media (min-width: 560px) {
    margin-left: 8px;
  }
  }
</style>

<script>
  export default {
    props: {
      pageTitle: String
    },
    methods: {
      toggleSidenav() {
        this.$root.toggleSidenav();
      }
    }
  };
</script>
