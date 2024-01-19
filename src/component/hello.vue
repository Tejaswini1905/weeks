<template>
    <div>
    <h1>Calculator</h1>

    <h2 > 
    <span :class="{numClass: true}">{{ result.add }}</span>    
    <span :class="{numClass: true}">{{ result.sub }}</span>  
    <span :class="{numClass: true}">{{ result.mul }}</span>    
    <span :class="{numClass: true}">{{ result.div }}</span>   
    </h2>
   
    <button @click="add" :class="{numClass1: true}">add</button>   
    <button @click="sub" :class="{numClass1: true}">subtract</button>    
    <button @click="multiply" :class="{numClass1: true}">multiply</button>   
    <button @click="divide" :class="{numClass1: true}">divide</button>    
    <button @click = "cleaner" :class="{numClass1: true}"> clear</button>
    
    </div>
    
    
    </template>
    
    <script setup>   
    import {ref} from 'vue'    
    const props=defineProps ({    
    num1: Number,    
    num2: Number,   
    })
    
    const n1=ref(0)   
    const emit=defineEmits(["clear"])   
    const result=ref({   
    add: 0,
    sub: 0,  
    mul: 0,  
    div: 0     
    })
    
    function add(){   
    result.value.add=props.num1 + props.num2    
    };
    
    function sub(){    
    result.value.sub=props.num1 - props.num2    
    };
    
    function multiply(){   
    result.value.mul=props.num1 * props.num2   
    };
    
    function divide() {   
    result.value.div=props.num1 / props.num2  
    };
    
    function cleaner(){   
    Object.keys(result.value).map(item=>{result.value[item]=0})    
    emit('clear', n1.value)   
    }
    
    </script>
    
    <style>
    
    .numClass{    
    padding: 30px;   
    }
    
    .numClass1{   
    margin: 10px;   
    }
    
    </style>