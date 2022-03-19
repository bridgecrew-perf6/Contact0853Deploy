<!-- 
    Home.vue creates the main view for the contacts
-->

<template>

  <div class="container">
    <contact-header />
    <functionalities @search="getSearchword"></functionalities>
    <div class="entries">
      <contact-collection v-bind:searchWord="searchWord"/>
    </div>
  </div>

</template>

<script>
// retrieving the components
import Functionalities from "../components/Functionalities.vue";
import ContactHeader from "../components/ContactHeader.vue";
import ContactCollection from "../components/ContactCollection.vue";

export default {
  
  name: "Home",
  props: {},
  data() {
    return {
      searchWord: "",
    };
  },


  components: {
    ContactHeader,
    ContactCollection,
    Functionalities,
  },

  methods: {
     getSearchword (value) {
      this.searchWord = value
    }
  },


};

</script>


<!-- This is the stylesheet -->
<style scoped>

.entries {
  margin-top: 130px;
}

</style>

