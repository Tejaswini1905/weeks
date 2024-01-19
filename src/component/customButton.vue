<template>
    <button :style="buttonStyle">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        default: 'blue' 
      },
      size: {
        type: String,
        default: 'medium'
      },
    },
    computed: {
      buttonStyle() {
        return {
          backgroundColor: this.color,
          fontSize: this.size === 'large' ? '20px' : '14px',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
  }
  </style>
  