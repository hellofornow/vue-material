<template>
  <div class="container">
    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="sass">
  @import '../../src/core/stylesheets/variables.scss';

  [v-cloak] {
    display: none;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
  }

  body.md-theme-amir {
    background: url('/assets/background.jpg') no-repeat left !important;
  }
  .md-theme-amir.md-toolbar {
    background: none !important;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;
  }

  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
    transform: translate3D(0, 0, 0);
    transition: $swift-ease-out;
    transition-delay: .2s;
  }

  .md-router-enter,
  .md-router-leave {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    .main-content {
      opacity: 0;
      overflow: hidden;
    }
  }

  .md-router-leave {
    z-index: 1;
    transition: $swift-ease-in;
    transition-duration: .25s;
  }

  .md-router-enter {
    z-index: 2;
    transition: $swift-ease-out;

    .main-content {
      transform: translate3D(0, 10%, 0);
    }
  }

  code {
    &:not(.hljs) {
      margin-left: 1px;
      margin-right: 1px;
      padding: 0 4px;
      display: inline-block;
      border-radius: 2px;
      font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;

      pre {
        margin: 8px 0;
      }
    }
  }

  .phone-viewport {
    width: 360px;
    height: 540px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid rgba(#000, .12);
  }

  .api-table tr > td:first-child {
    white-space: nowrap;
  }

  .md-whiteframe-1dp {
    box-shadow: none !important;
  }
</style>

<script>
  export default {
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      };
    },
    computed: {
      logo() {
        return 'assets/amyamir.jpg';
      }
    },
    methods: {
      toggleSidenav() {
        this.$refs['main-sidebar'].toggle();
      }
    }
  };
</script>
