<template>
  <div class="container mt-5">
    <div class="form-group">
        <h1 class="text-center">Add Book</h1>
        <form @submit.prevent="addBook">
            <div class="form-group">
                <label for="isbn" class="form-label">ISBN:</label>
                <input type="text" class="form-control" v-model="isbn" id="isbn" required />
            </div>
            <div>
                <label for="name" class="form-label">NAME:</label>
                <input type="text" class="form-control" v-model="name" id="name" required />
            </div>
            <button type="submit">Add Book</button>
        </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';

export default {
    setup() {
        const isbn = ref('');
        const name = ref('');

        const addBook = async () => {
            try {
                const isbnNumber = Number(isbn.value);
                if (isNaN(isbnNumber )){
                    alert('ISBN must be a valid number');
                    return;
                }
                
                await addDoc(collection(db, 'books'), {
                    isbn: isbnNumber,
                    name: name.value
                });
                isbn.value = '';
                name.value = '';
                alert('Book added successfully!');

            }catch(error) {
                console.error('Error adding book: ',error);
            }
        };

        return {
            isbn,
            name,
            addBook
        };
    },
};
</script>

<style>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}
input[type="text"] {
  width: 50%;
  padding: 8px;
  margin: 10px 0;
}
button {
  background-color: #007BFF;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
