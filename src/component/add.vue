<template>
    <div id="add-blog">
      <header>
        <h3>Vue</h3>
        <form>
          <label>Login name:</label>
          <input type="text" v-model.lazy="title">
          <label>Age:</label>
          <input type="text" v-model.lazy="Age">
          <label>DOB:</label>
          <input type="text" v-model.lazy="DOB">
        </form>
      </header>
      <div v-if="preview">
        <p>name:</p>
        <p>Age:</p>
        <p>DOB:</p>
      </div>
    </div>

</template>

<script>

export default {
    data(){ 
        blog:{
            name:"",
            Age:"",
            DOB:""
        }
        }
    },
    methods:{

    }

</script>

<style scoped>

</style>