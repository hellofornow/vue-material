<template>
  <page-content page-title="RSVP">
    <div class="main-content">
      <div class="content">
        <form novalidate @submit.stop.prevent="submitCode">
          <div class="input-field">
            <md-input-container>
              <label>Please enter your code</label>
              <md-input v-model="code" type="text" autofocus></md-input>
            </md-input-container>
            <md-layout md-align="center">
              <md-button type="submit" class="md-raised md-primary submitBtn">Submit</md-button>
            </md-layout>
          </div>
        </form>
      </div>
    </div>
  </page-content>
</template>

<style lang="sass" scoped>
  .content {
    max-width: 500px;
    margin: 0 auto;
  }
  .submitBtn {
    padding: 0 40px;
  }
</style>

<script>
  export default {
    data: () => ({
      code: '29'
    }),
    methods: {
      submitCode() {
        this.$http.get('/api/code/' + this.code).then((response) => {
          console.log(response);
        }, (error) => {
          // error callback
        });
      }
    }
  };
</script>
