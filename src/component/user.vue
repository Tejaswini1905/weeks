<template>
    <div>
      <h2>User Details</h2>
      <div v-if="loggedIn">
        <p>Welcome, {{ loginName }}!</p>
        <!-- Add more user details as needed -->
      </div>
      <div v-else>
        <p>Please log in to see user details.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['loginName'],
    computed: {
      loggedIn() {
        return this.loginName !== '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  