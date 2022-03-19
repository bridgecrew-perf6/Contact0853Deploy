<!-- 
    ContactHeader.vue intends to create a header for the application.
-->

<!-- This part display the elements within the header -->
<template>

  <div class="header">
    <!-- This creates a logo from vue on the left side of the header -->
    <div class="leftside">
      <img class="Vuelogo" src="../assets/Vuelogo.png" />
      <div class="link">
        <a>Contacts</a>
      </div>
    </div>

    <!-- This creates a button to call the function "goToLogin" so the user can go to the login page on the right side of the header -->
    <div class="rightside">
      <div class="link" v-on:click="toLogin">
        <img class="AnonymousUser" src="../assets/AnonymousUser.png" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ContactHeader",
  props: {},
  methods: {
    // This method sends the user on-click to the Login-Page
    toLogin(){
            this.$router.push("/userlogin")
    }
  }
};

</script>


<style scoped>

.header {
  color: white;
  background: black;
  border-bottom: solid rgb(140, 140, 140) 1px;
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  top: 0px;
}

.link {
  color: rgb(140, 140, 140);
  border-left: solid 1px black;
  border-right: solid 1px black;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  transition: 0.2s;
}

.link:hover{
  background: black;
  color: white
}

.leftside {
  height: 100%;
  align-items: center;
  display: flex;
  padding-left: 25px;
}

.rightside {
  padding-right: 25px;
  margin-left: auto;
}

.AnonymousUser {
  opacity: 60%;
  transition: 0.2s;
  height: 30px;
}

.AnonymousUser:hover{
  opacity: 100%;
}

.Vuelogo {
  height: 30px;
  padding-right: 25px;
}

</style>