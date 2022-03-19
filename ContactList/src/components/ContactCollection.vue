<!--
    ContactCollection.vue shows the entry field for searching the list of contact entries. 
-->

<template>

  <div class="container">
    <!-- If contacts are found with the element inside the entry field, the contacts will be displayed-->
    <div v-for="(contact, index) in searchFilter" :key="index">
      <contact :Contact="contact" />
    </div>

    <!-- If no contact is found with the element inside the entry field, the message "sorry, no search results" will be displayed" -->
    <span v-if="searchFilter.length == 0" class="noResults">
      Error! No results found, please try again.  
    </span>

  </div>
</template>

<script>
import Contact from "./ContactProfile.vue";

export default {
  // this function fetches all of the data for the contacts from the server
  name: "ContactCollection",
  async created() {
    const res = await fetch("https://contact0853.herokuapp.com/contacts/getmany", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
    // this part forms the data sets into the json format,transforms them and is saved in contacts 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.Contacts = data;
      });
  },

  data() {
    return {
      Contacts: "",
    };
  },

  components: {
    Contact,
  },

  props: {
    searchWord: "",
  },

  methods: {},

  computed: {
     // this function filters the input from the user in the search element and ignores different captualization of words
    searchFilter: function () {
      console.log("Searchword: " + this.searchWord);
      return Object.values(this.Contacts).filter((contact) => {

        return (
          contact.fname.toLowerCase().match(this.searchWord.toLowerCase()) ||
          contact.lname.toLowerCase().match(this.searchWord.toLowerCase())
        );

      });
    },
  },

};

</script>

<!-- This is the stylesheet -->
<style scoped>

.noResults{
  color: rgb(15, 116, 70);
  margin-top: 15px;
  font-size: 15px;
}

.container {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

</style>