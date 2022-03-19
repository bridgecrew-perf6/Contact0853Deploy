<!-- 
    ContactProfile.vue intends to create the template for every contact, consisting out of an image, name, number, email, and facebook.
    The entries of the contacts can be created, edited or deleted.
-->


<!-- This is the template. This is the output, written in HTML -->
<template>

  <div class="Box">

 <!-- Template for each contact -->
    <div class="Profilepicture">
      <img
        :src="`${Contact.image}`"
        onerror="this.onerror=null; this.src='https://semantic-ui.com/images/avatar2/large/kristy.png'"
        alt="KristysProfilePicture"
      />
    </div>

    <div>

      <div class="Name">
        <p>{{ Contact.fname }} {{ Contact.lname }}</p>
      </div>

      <div class="Contactinformation">
        <p>{{ Contact.mnumber }}</p>
        <br />
        <p>Email: {{ Contact.email }}</p>
        <br />
        <p>Facebook: {{ Contact.facebook }}</p>
      </div>

      <div class="Functionbuttons">

        <div class="Editbutton" v-on:click="editContact">
          <img class="icon" src="../assets/Editbutton.png" />
        </div>

        <div class="Deletebutton" v-on:click="deleteContact">
          <img class="icon" src="../assets/Deletebutton.png" />
        </div>

      </div>

    </div>

  </div>

</template>


<!-- This is the script. This is the logic, written in Javascript -->
<script>

export default {
  name: "ContactProfile",
  data() {
    return {};
  },
  created() {
    console.log(this.Contact);
  },
  props: {
    Contact: { type: Object },
  },
  methods: {
    // This function calls the "edit contact page" when pressed. 
    editContact(){
      this.$router.push("/FunctionEdit/"+this.Contact.contactid)
    },

        // This function asks for confirmation, then deletes the corresponsing contact when "delete button" is pressed.
    async deleteContact() {
      if (confirm("Do you want to proceed to delete the contact information?")) {
        const res = await fetch(
          "http://localhost:5001/contacts/delete/" + this.Contact.contactid,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.go();
          });
      } 
      else {
        console.log("Contact information was not deleted!");
      }
    },
  },
};

</script>

<!-- This is the stylesheet -->
<style scoped>

img {
  height: auto;
  max-height: 100%;
  width: 350px;
  border-radius: 7px;
}

.Profilepicture {
  height: 345px;
  width: 350px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.Name {
  color: rgb(24, 24, 24);
  font-weight: bolder;
  font-size: 20px;
  margin: 5px;
}

.Contactinformation {
  color: rgb(140, 140, 140);
  margin-top: 5px;
  font-size: 15px;
  line-height: 2px;
  text-align: center;
}

.Functionbuttons {
  display: flex;
  margin: 30px;
  justify-content: center;
  align-items: center;
}

.Editbutton img.icon {
  color: white;
  background-color: rgb(7, 97, 187);
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 7px;
  float: left;
  margin-right: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.2s;
}

.Editbutton img.icon:hover {
  background-color: rgba(21, 93, 226, 0.479);
}

.Deletebutton img.icon {
  color: white;
  background-color: rgb(168, 17, 6);
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 7px;
  float: left;
  padding: 8px 12px;
  cursor: pointer;
  margin-right: 10px;
  transition: 0.2s;
  align-items: center;
}

.Deletebutton img.icon:hover {
  background-color: rgba(226, 14, 14, 0.603);
}


.Box {
  margin: 10px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: rgb(140, 140, 140);
  border-radius: 7px;
  opacity: 100%;
  transition: 0.2s;
  width: 350px;
  height: 550px;
}

.Box:hover {
 border-color: black;
 border-width: 0px 1px 1px 1px;
}

</style>