<template>
  <md-layout md-row class="layout">
    <md-layout md-flex-medium="33">{{person.name}}</md-layout>
    <md-layout md-flex-medium="33">
      <md-input-container>
        <md-checkbox class="md-primary" name="attending" v-model="person.attending">
          Attending
        </md-checkbox>
      </md-input-container>
    </md-layout>
    <md-layout md-flex-medium="33">
      <md-input-container v-if="person.attending" class="menu-container">
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
    <md-layout md-flex-medium="33"></md-layout>
    <md-layout md-flex-medium="66" md-align="right" class="comment-container">
      <md-input-container v-if="person.attending && person.dinner">
        <label>Allergies/Comments</label>
        <md-textarea v-model="person.comments"></md-textarea>
      </md-input-container>
    </md-layout>
  </md-layout>
</template>

<!--@formatter:off-->
<style lang="sass" scoped>
  .layout {
    align-items: center;
    margin-top: 10px;
  }
  .menu-container {
    width: 90%;
  }
  .comment-container {
    /*margin: 0 auto;*/

    .md-input-container {
      margin-top: -25px;
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
