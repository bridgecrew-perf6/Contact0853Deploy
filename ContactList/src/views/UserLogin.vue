<!-- 
    UserLogin.vue creates the view for the login page
-->

<template>

  <div>
    <contact-header />
    <div class="container">
      <div class="form">
        <form @submit.prevent="">
          <label for="uname"><b>User Account:</b></label
          ><br />
          <input
            type="text"
            placeholder="bob"
            v-model="uname"
            required
          />
          <br />
          <label for="psw"><b>Password:</b></label
          ><br />
          <input
            type="password"
            placeholder="1234"
            v-model="password"
            required
          />
          <br />
          <my-buttons class="button" name="Login" @userClick="submitData" />
          <p class="incorrect" v-if="isFalse">
            Error! Username cannot be found, please try again.
          </p>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
// importing the components
import MyButtons from "../components/MyButtons.vue";
import ContactHeader from "../components/ContactHeader.vue";

export default {
  name: "UserLogin",
  props: {},
  data() {
    return {
      uname: "",
      password: "",
      isFalse: false,
    };
  },

  components: {
    ContactHeader,
    MyButtons,
  },

  methods: {
    //sends the data to the server and confirms them
    async submitData() {
      const res = await fetch("http://localhost:5001/auth", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.uname.trim(),
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
         if (data.status == 0) {
            this.isFalse = true;
          } else if (data.status == 1) {
            this.isFalse = false;
            this.$router.push("/Home");
          }
        });
    },
  },


};
</script>


<!-- This is the stylesheet -->
<style scoped>

/* Bordered form */
.container {
  justify-content: center;
  display: flex;
  margin-top: 60px;
}

.form {
  border: 1px solid #8a848491;
  width: 70%;
  max-width: 300px;
  padding: 10px 30px 10px 10px;
  border-radius: 5px;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  padding: 8px;
  width: 100%;
  margin: 15px;
  border: 1px solid #8a848491;
  box-sizing: border-box;
}

.button {
  margin: 10px;
  width: 100%;
}

/* Add padding to containers */

.incorrect {
  color: red;
  font-size: 15px;
}
</style>

