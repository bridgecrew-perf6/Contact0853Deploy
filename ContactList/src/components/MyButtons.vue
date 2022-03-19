<!-- 
    MyButtons.vue intends to create button for the application.
-->

<!-- This intends to create the button class. The button can be assigned via prop, which will load the corresponsing css element-->
<template>

  <button :class="[orange ? 'orange': grey ? 'grey': 'blue']" v-on:click="userClick">
    {{name}}
  </button>

</template>


<script>

export default {

  name: "MyButtons",
  props: {
      name: '',
      data: '',
       grey: {
        type: Boolean,
        default: () => false,
      },

      orange: {
        type: Boolean,
        default: () => false,
      },

      blue: {
        type: Boolean,
        default: () => false,
      },
     
  },
  methods: {
    // This method gives functionaility to the button. When the button is clicked, it performs an action.
    userClick(){
      this.$emit('userClick');
    }
  }
};

</script>

<style scoped>

/* Set a style for all buttons */
button {
  color: white;
  padding: 11px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  font-weight: bold;
  white-space: nowrap;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

.blue {
  background: rgb(4, 153, 153);
}

.orange {
  background: rgb(241, 156, 27);
}

.grey {
  color: black;
  background: rgb(140, 140, 140);
 
}

</style>

