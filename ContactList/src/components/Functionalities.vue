<!-- 
    Functionalities.vue creates the search bar for the application to look through the contacts.
-->

<template>

  <div>
    <div class="white"></div>
    <div class="input-group">
      <p class="contactSign">Contacts</p>
      <input
        type="text"
        class="searchbar"
        placeholder="Type a contact name"
        v-model="searchWord"
        @keyup.enter="enterSearch"
      />
      <button-temp class="button" name="Search" v-bind:grey=true v-on:click="enterSearch"/>
      <button-temp
        class="button"
        name="+ Add"
        v-bind:orange="true"
        @userClick="createSwitch"
      />
    </div>
  </div>

</template>

<script>
import ButtonTemp from "./MyButtons.vue";

export default {
  name: "SearchBar",
  components: {
    ButtonTemp,
  },
    // this takes in the entry of the user in the search field
  data(){
    searchWord: ''
  },

  props: {},

  methods: {
    // this function is performed, when the user presses the add+ button to create a new user. It forwars the user to the /newcontactpage
    createSwitch() {
      this.$router.push("/FunctionCreate");
    },
    // this function is performed, when the user presses the search function. this.searchWord is the entry he/she entered in the search field
    enterSearch (event) {
      this.$emit('search', this.searchWord)
    }
  },
};

</script>

<!-- This is the stylesheet -->
<style scoped>

.input-group {
  align-items: center;
  justify-content: center;
  position: fixed;
  width: calc(100% - 57px);
  min-width: 200px;
  top: 45px;
  margin: 20px 30px 10px 30px;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.searchbar {
  padding: 8px;
  margin: 3px;
  width: 100%;
}

.button {
  margin-left: 3px;
}

.contactSign {
  margin-right: 15px;
  font-weight: bold;
}

.white {
  background-color: white;
  border-bottom: solid 1px rgb(140, 140, 140);
  position: fixed;
  top: 40px;
  width: 100%;
  height: 70px;
  backdrop-filter: blur(1000px);
}

</style>