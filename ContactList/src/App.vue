<!-- 
    App.vue is the start of the application.
    This is our route compenent. Everything that is called, goes through this file.
    All of the created components will be embedded in this file.
-->

<!-- This is the template. This is the output, written in HTML -->
<template>

  <div id="app">
    <div id="nav">
      <router-link to="/Home"></router-link>
      <router-link to="/FunctionEdit"></router-link>
      <router-link to="/UserLogin"></router-link>
      <router-link to="/FunctionCreate"></router-link>
    </div>
    <router-view />
  </div>

</template>

<!-- This is the script. This is the logic, written in Javascript -->
<script>

export default {
  name: "App",
};

</script>

