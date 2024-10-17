<template>
    <div>
      <h1>Add Book</h1>
      <input v-model="newBook.title" placeholder="Enter book title">
      <input v-model="newBook.author" placeholder="Enter author name">
      <button @click="addBook">Add Book</button>
      <p v-if="error">{{ error }}</p>
      <p v-if="successMessage">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newBook: {
          title: '',
          author: ''
        },
        error: null,
        successMessage: null
      };
    },
    methods: {
      async addBook() {
        try {
          const response = await axios.post('https://us-central1-week7-susin.cloudfunctions.net/addBook', this.newBook);
          console.log(response);
          this.successMessage = 'Book added successfully!';
          this.error = null;
          this.newBook = { title: '', author: '' }; 
        } catch (error) {
          console.error('Error adding book:', error);
          this.error = error.message;
          this.successMessage = null;
        }
      }
    }
  }
  </script>
  
  ////////