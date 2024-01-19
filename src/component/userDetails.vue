<!-- <template>
    <div>

    </div>
</template>

<script setup>
let userDetails=[
    {name:"Tejaswini", Age ="21",DOB ="1-11-1111"},
    {name:"Mukesk", Age ="21",DOB ="2-11-1111"},
    {name:"Anju", Age ="21",DOB ="3-11-1111"}
]

</script>

<style lang="scss" scoped>

</style> -->

<template>
    <div>
      <h2>User Details</h2>
      <div v-if="loggedIn">
        <ul>
          <li v-for="user in filteredUsers" :key="user.name">
            <strong>Name:</strong> {{ user.name }} |
            <strong>Age:</strong> {{ user.Age }} |
            <strong>DOB:</strong> {{ user.DOB }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Please log in to see user details.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['loginName', 'userData'],
    computed: {
      loggedIn() {
        return this.loginName !== '';
      },
      filteredUsers() {
        return this.userData.filter(user => user.name.toLowerCase().includes(this.loginName.toLowerCase()));
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  </style>
  