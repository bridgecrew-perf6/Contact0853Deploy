<!-- 
    FunctionCreate.vue creates the view for the new contact page which enables the user to create new contacts
-->

<template>
  <div class="container">
    <contact-header></contact-header>
    <div class="head" align="left">
      <p class="contactLabel">Contact</p>
      <p class="add">Add</p>
    </div>

    <div class="newContactForm" align="left">
      <form @submit.prevent="saveEntries">
        <label>Contact ID*</label><br />
        <input
          id="contactID"
          type="number"
          placeholder="Contact ID"
          v-model="newContact.contactid"
          required
        />
        <label>First Name*</label><br />
        <input
          id="fname"
          type="text"
          placeholder="Firstname"
          v-model="newContact.fname"
          required
        />
        <label>Last Name*</label><br />
        <input
          id="lname"
          type="text"
          placeholder="Lastname"
          v-model="newContact.lname"
          required
        />
        <label>Mobile No*</label><br />
        <input
          id="mobileNum"
          type="text"
          placeholder="Mobile Number"
          v-model="newContact.mnumber"
          required
        />
        <br />
        <label>E-Mail</label><br />
        <input
          id="email"
          type="email"
          placeholder="E-Mail"
          v-model="newContact.email"
        />
        <label>Facebook</label><br />
        <input
          id="facebook"
          type="text"
          placeholder="Facebook"
          v-model="newContact.facebook"
        />
        <label>Image Url</label><br />
        <input
          id="imageUrl"
          type="url"
          placeholder="Image URL"
          v-model="newContact.image"
        />
        <div class="buttons">
          <button type="submit" class="save">Save</button>
          <button class="close" v-on:click="goToHome">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ContactHeader from "../components/ContactHeader.vue";

export default {
  name: "FunctionCreate",
  components: {
    ContactHeader,
  },

  methods: {
    goToHome() {
      this.$router.push("/home");
      window.scrollTo(0, 0);
    },

    async saveEntries() {
      console.log(this.newContact);
      const res = await fetch("https://contact0853.herokuapp.com/contacts/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.newContact),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error == 1) alert(data.msg);
          else {
            alert("Added Contact");
            this.goToHome();
          }
        });
    },
  },

  data() {
    return {
      newContact: {
        contactid: "",
        fname: "",
        lname: "",
        mnumber: "",
        email: "",
        facebook: "",
        image: "",
      },
    };
  },
  
};
</script>

<!-- This is the stylesheet -->
<style scoped>
.newContactForm {
  min-width: 200px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
}

.contactLabel {
  font-weight: bold;
  font-size: 25px;
}

.head {
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: solid rgb(221, 221, 221) 2px;
  margin-bottom: 10px;
  padding-left: 20px;
}

.add {
  color: white;
  background-color: rgb(4, 153, 153);
  padding: 5px 10px 5px 10px;
  margin: 15px;
  font-size: 12px;
}

input {
  font-size: 15px;
  width: 97%;
  padding: 7.5px;
  margin-top: 5px;
  margin-bottom: 20px;
}

label {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.buttons {
  display: flex;
  justify-content: center;
}

.save {
  color: black;
  padding: 10px;
  border: solid black 1px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 10px;
}

.save:hover {
  background: rgb(44, 136, 8);
  color: white;
}

.close {
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

.close:hover {
  color: white;
  background: rgb(214, 65, 6);
}
</style>