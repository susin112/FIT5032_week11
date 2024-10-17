<template>
  <div>
    <h1>All Books</h1>
    <pre v-for="book in books" :key="book.id">{{ JSON.stringify(book, null, 2) }}</pre>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [], 
      error: null
    };
  },
  mounted() {
    this.getAllBooks();
  },
  methods: {
    async getAllBooks() {
      try {
        const response = await axios.get('https://us-central1-week7-susin.cloudfunctions.net/getAllBooks');
        this.books = response.data; 
        this.error = null;
      } catch (error) {
        console.error('Error fetching books:', error);
        this.error = error;
        this.books = [];
      }
    },
  },
};
</script>

  <style>
  .book-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  .book-container pre {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 15px;
  }
  </style>


//////