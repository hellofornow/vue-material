<template>
  <page-content page-title="RSVP">
    <div class="main-content">
      <div class="step1" v-if="people.length == 0">
        <form @submit.stop.prevent="submitCode">
          <div class="input-field">
            <md-input-container v-bind:class="codeValidateClass">
              <label>Please enter your code</label>
              <md-input v-model="code" type="text" required autofocus v-bind:disabled="submitting"></md-input>
              <span class="md-error">Invalid code</span>
            </md-input-container>
            <md-layout md-align="center">
              <md-button type="submit" class="md-raised md-primary submitBtn" v-bind:disabled="submitting">Submit</md-button>
            </md-layout>
            <md-layout md-align="center">
              <md-spinner md-indeterminate v-if="submitting"></md-spinner>
            </md-layout>
            <div class="error" v-if="serverError && !submitting">
              <div>An error occured! Please try again.</div>
              <div>I've been notified</div>
              <div>Please email me at amir.toole@gmail.com if you're concerned</div>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="step2">
        <h3>Welcome! We're very excited to share our special day with you.</h3>
        <div class="person-container">
          <person v-for="person in people" v-bind:person="person"></person>
        </div>
      </div>
    </div>
  </page-content>
</template>

<!--@formatter:off-->
<style lang="sass" scoped>
  @import '../../../src/core/stylesheets/variables.scss';

  .main-content > div {
    margin: 0 auto;
  }

  .step1 {
    max-width: 500px;
  }

  .submitBtn {
    padding: 0 40px;
  }

  .step2 {
    max-width: 700px;

    @media (max-width: 600px) {
      max-width: 100%;
    }

    .person-container {
      div:not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
    }
  }

  .error {
    margin-top: 30px;
  }
</style>
<!--@formatter:on-->

<script>
  export default {
    data: () => ({
      code: '29',
      submitting: false,
      codeValidateClass: '',
      people: [],
      serverError: false
    }),
    methods: {
      submitCode() {
        this.submitting = true;
        this.serverError = false;
        if (this.code.trim().length === 0) {
          this.codeValidateClass = 'md-input-invalid';
          this.submitting = false;
          return;
        }
        this.$http.get('/api/code/' + this.code).then((response) => {
          this.submitting = false;
          if (response.body.length === 0) {
            this.codeValidateClass = 'md-input-invalid';
            return;
          }
          this.codeValidateClass = '';
          this.people = response.body;
        }, (error) => {
          this.submitting = false;
          this.serverError = true;
        });
      }
    },
    mounted() {
      setTimeout(() => {
//        this.submitCode();
      }, 100);
    }
  };
</script>
