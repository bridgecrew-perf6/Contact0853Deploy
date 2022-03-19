<!-- 
    FunctionEdit.vue creates the view for the edit contact page
-->

<template>

  <div class="container">
    <contact-header></contact-header>
    <div class="head" align="left">
      <p class="contact">Contact</p>
      <p class="editfunction">Edit</p>
    </div>

    <div class="editContactForm" align="left">
      <form @submit.prevent="saveEntries">
        <label>First Name*:</label>
        <br />
        
        <input
          id="fname"
          type="text"
          placeholder="Firstname"
          v-model="FunctionEdit[0].fname"
          required
        />
  
      <br />
        <label>Last Name*:</label>
        
        <br />
        
        <input
          id="lname"
          type="text"
          placeholder="Lastname"
          v-model="FunctionEdit[0].lname"
          required
        />

        <label> Mobile Number*:</label>
        
        <br />
        
        <input
          id="mobileNum"
          type="text"
          placeholder="Mobile Number"
          v-model="FunctionEdit[0].mnumber"
          required
        />

        <br />
        
        <label>E-Mail Adress:</label><br />
        
        <input
          id="email"
          type="email"
          placeholder="E-Mail"
          v-model="FunctionEdit[0].email"
        />

        <label> Facebook Username: </label><br />
        
        <input
          id="facebook"
          type="text"
          placeholder="Facebook"
          v-model="FunctionEdit[0].facebook"
        />

        <label> Image </label><br />
        <input
          id="imageUrl"
          type="url"
          placeholder="Image URL"
          v-model="FunctionEdit[0].image"
        />
        <div class="buttons">
          <button type="submit" class="savefunction">
            Save
          </button>
          <button class="closefunction" v-on:click="goToHome"> Close </button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>

// importing the components
import ContactHeader from "../components/ContactHeader.vue";

export default {
  name: "FunctionEdit",
  components: {
    ContactHeader,
  },

  // fetching the data for the contacts from the server
  async created() {
    const res = await fetch(
      "https://contact0853.herokuapp.com/contacts/getone/" + this.$route.params.id,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },

      }
    )

      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.FunctionEdit = data;
      });
  },


  methods: {
    // directs the user to the contact page
    goToHome() {
      this.$router.push("/home");
    },

    // updating the entries of the contacts
    async saveEntries() {

      delete this.FunctionEdit[0]["_id"];
      console.log(this.FunctionEdit[0]);
      const res = await fetch(
        "https://contact0853.herokuapp.com/contacts/update/" + this.$route.params.id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.FunctionEdit[0]),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.error == 1) alert(data.msg);
          else {
            alert("Sucessfully updated Contact!");
            this.goToHome();
          }
        });
    },
  },

  data() {
    return {
      FunctionEdit: [{}],
    };
  },

};

</script>

<!-- This is the stylesheet -->
<style scoped>

.editContactForm {
  min-width: 200px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
}

.contact {
  font-weight: bold;
  font-size: 25px;
}

.head {
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: solid rgb(140, 140, 140) 2px;
  margin-bottom: 10px;
  padding-left: 20px;
}

.editfunction {
  color: white;
  background-color: rgb(4, 153, 153);
  padding: 5px 10px 5px 10px;
  margin: 15px;
  font-size: 12px;
}

input {
  font-size: 15px;
  width: 95%;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
}

label {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.buttons {
  justify-content: center;
  display: flex;
}

.savefunction {
  color: black;
  padding: 10px;
  border: solid black 1px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 10px;
}

.savefunction:hover {
  background: rgb(44, 136, 8);
  color: white;
}

.closefunction {
  color: black;
  padding: 10px;
  border: solid 1px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 10px;
  border-left: 0px;
}

.closefunction:hover {
  color: white;
  background: rgb(214, 65, 6);
}

</style>