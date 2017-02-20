<template>
  <div>
    <md-layout md-flex class="layout">
      <md-layout md-flex="25" class="personName">{{person.name}}</md-layout>

      <md-layout>
        <!-- attending -->
        <md-layout md-flex="90">
          <md-input-container>
            <label for="attending">Attending?</label>
            <md-select v-model="person.attending" name="attending" id="attending" required>
              <md-option value="y">Yes, excited to celebrate with you!</md-option>
              <md-option value="n">No, decline with regret</md-option>
            </md-select>
          </md-input-container>
        </md-layout>

        <!--menu-->
        <md-layout md-flex="90">
          <md-input-container v-if="person.attending == 'y'" class="menu-container">
            <label for="menu">Meal selection</label>
            <md-select v-if="person.attending" v-model="person.dinner" name="menu" id="menu" required>
              <md-option value="child" v-if="person.child" selected>Child meal</md-option>
              <md-option value="chicken">Chicken</md-option>
              <md-option value="beef">Beef</md-option>
              <md-option value="veg">Vegetarian</md-option>
              <md-option value="none">No meal</md-option>
            </md-select>
          </md-input-container>
        </md-layout>

        <!--comment-->
        <md-layout md-flex="90">
          <md-input-container v-if="person.attending == 'y' && person.dinner">
            <label>Allergies/Comments</label>
            <md-textarea v-model="person.comments"></md-textarea>
          </md-input-container>
        </md-layout>

      </md-layout>
    </md-layout>
  </div>
</template>

<!--@formatter:off-->
<style lang="sass" scoped>
  .layout {
    margin: 10px 0;
  }

  .personName {
    margin-top: 22px;
  }

  .md-input-container {
    margin: 0 0 9px;
  }
  /*.menu-container {*/
    /*width: 90%;*/
  /*}*/
  .comment-container {
    /*margin: 0 auto;*/

    .md-input-container {
      /*margin-top: -25px;*/
    }
  }
</style>
<!--@formatter:on-->

<script>
  export default {
    props: {
      person: {}
    },
    data: () => ({}),
    methods: {}
  };
</script>
