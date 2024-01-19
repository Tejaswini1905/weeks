<!-- <template>
    <div> -->
      <!-- <input v-model="name" placeholder="Enter your name" />
      <button @click="submitName">Submit</button>
      
    <div v-if="savedName">
      
      
    <p>Saved Name: {{ savedName }}</p>
    </div>  -->



    <!-- <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
    <ProductCard :product="p"/>
    </div>
    </div> 
    </div>
  </template>
  
  <script setup> -->

<!-- //   export default {
//     data() {
//       return {
//         name: "",
//         savedName: null,
//       };
//     },
//     methods: {
//       submitName() {
//         this.savedName = this.name;
//       alert(`Hello, ${this.name}!`);
//       },
//     },
//   };

         const {data:products}= await useFetch('https://api.escuelajs.co/api/v1/products')
        definePageMeta({
            layout:'products'
        })
  </script> -->
  
  <!-- <style>
  /* Add your styles here if needed */
  </style> 
   -->



   <template>
    <div>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products">
          <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    //  fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
  
    definePageMeta({
      layout: "products",
    })
  </script>