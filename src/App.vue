<template>
  <div class="main" :class="{header1 : true}">
    <h1>vue</h1>
    <h4>login:Tejaswini</h4>
    </div>
   
    <div :class="{search1:true}">
      <input type="text" v-model="searchItem" placeholder="Search" />
      <ul v-if="searchItem.length > 0">

<li v-for="item in filteredItems" :key="item.id">

{{ item.name }} - {{ item.gender }}

</li>

</ul>
    </div>
    <div :class="{body1:true}">
    <div>
      <form @submit.prevent="addDetails">
        <label for="name">Name:</label>
        <input v-model="newLogin.name" type="text" id="name" />
        <label for="age">Age:</label>
        <input v-model.number="newLogin.age" type="number" id="age" />
        <label for="dateOfBirth">Date Of Birth:</label>
        <input v-model="newLogin.dateOfBirth" type="text" id="dateOfBirth" />
        <label for="gender">Gender:</label>
        <select v-model="newLogin.gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button>Add Details</button>
      </form>
    </div>
    <div>
      <ul >
        <li v-for="(login, index) in filterlogin" :key="index" :class="{card: true}">
          Name: {{login.name}}, Age: {{login.age}}, DOB: {{login.dateOfBirth}}, Gender: {{login.gender}}
          <!-- {{ formatData(login) }} -->
          <!-- <div v-if="login.gender === 'female' ? genderImage='../public/images/665871_users_512x512.png' : genderImage='../public/images/images.png'">
            <img :src={{genderImage}} />
          </div> -->
          <button @click="editEmployee(index)">edit</button>
          <button @click="deleteEmployee(index)">delete</button>
        </li>
      </ul>
    </div>
    <div v-if="showEdit===true">
      <form @submit.prevent="editDetails(idx)">
        <label for="name">Name:</label>
        <input v-model="filterlogin[idx].name" type="text" id="name" />
        <label for="age">Age:</label>
        <input v-model.number="filterlogin[idx].age" type="number" id="age" />
        <label for="dateOfBirth">Date Of Birth:</label>
        <input v-model="filterlogin[idx].dateOfBirth" type="text" id="dateOfBirth" />
        <label for="gender">Gender:</label>
        <select v-model="filterlogin[idx].gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button @click="editDetails(idx)">Edit Details</button>
      </form>
    </div></div>
  
</template>

<script setup>
import { ref, computed } from 'vue';
const searchItem = ref("");
const filteredItems = computed(() => {
return filterlogin.value.filter((item) => {
return item.name.toLowerCase().includes(searchItem.value.toLowerCase());
});

});
const filterlogin = ref([{
  name: "Sursh",
  age: 23,
  dateOfBirth: '23 jan 2023',
  gender: 'male'
}]);
const newLogin = ref({
  name: '',
  age: 0,
  dateOfBirth: '',
  gender: '',
});

const addDetails = () => {
  filterlogin.value.push({ ...newLogin.value });
console.log(filterlogin.value)
  // newLogin.value = {
  //   name: '',
  //   age: 0,
  //   dateOfBirth: '',
  //   gender: '',
  // };
};

// const formatData = (login) => {
  
//   return `Name: ${login.name}, Age: ${login.age}, DOB: ${login.dateOfBirth}, Gender: ${login.gender}` ;
// };
const showEdit=ref(false)
const idx=ref(0)
const editEmployee = (index) => {
  console.log(`Editing employee at index ${index}`);
 showEdit.value=!showEdit.value
 idx.value=index
};

const editDetails = (idx)=>{
  showEdit.value=!showEdit.value
}

const deleteEmployee = (index) => {
  console.log(`Deleting employee at index ${index}`);
 
  filterlogin.value.splice(index, 1);
};
</script>

<style>
.main{
margin-right: 50px;
border: 2px solid rgb(71, 70, 70);

}
.card{
  border: 1px solid;
  list-style-type: none;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  width: 600px;
}
.header1 {
  display: flex;
  justify-content: space-between;
}
h4{
  border:3px solid rgb(82, 80, 80);
  margin-right:5px;
  padding:5px
}
.search1{
  margin:10px;

}
/* .body1{
  border:2px solid rgb(71, 70, 70);
} */
</style>

