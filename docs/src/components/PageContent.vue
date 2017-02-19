<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" class="main-header">
      <div class="md-title">
        <router-link exact to="/">
          <md-icon>face</md-icon> Amy and Amir's Wedding
        </router-link>
      </div>
      <div class="rsvp" v-if="pageTitle != 'RSVP'">
        <router-link exact to="/rsvp">
          <md-button class="md-raised md-primary">RSVP</md-button>
        </router-link>
      </div>
    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
  a {
    color: #d81b60 !important;
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
  .md-title {
    flex: 1;
    .md-icon {
      vertical-align: top;
    }
    @media (max-width: 920px) {
      margin-left: 8px;
    }
    @media (min-width: 920px) {
      margin-left: 15% !important;
    }
  }
  .rsvp {
    @media(max-width: 920px) {
      margin-right: 5px;
    }
    @media(min-width: 920px) {
      margin-right: 20px;
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
