<template>
    <div>
      <header>
        <h1>Vue Login Example</h1>
        <button @click="showLoginForm">Login</button>
      </header>
      <div v-if="showLogin">
        <input v-model="loginName" placeholder="Enter login name" />
        <button @click="login">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showLogin: false,
        loginName: '',
      };
    },
    methods: {
      showLoginForm() {
        this.showLogin = !this.showLogin;
      },
      login() {
        // You can perform authentication logic here
        // For simplicity, let's just log the login name
        console.log('Login Name:', this.loginName);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
  }
  
  input {
    margin-right: 10px;
  }
  </style>
  