<template>
    <div class="container mt-5">
      <h1>Books with ISBN > 1000</h1>
      <ul>
        <li v-for="book in books" :key="book.id" class="book-item">
          <div class="book-info">
            Name: {{ book.name }} - ISBN: {{ book.isbn }}
          </div>
          
          <div class="button-group">
            <button class="btn-delete" @click="deleteBook(book.id)">Delete</button>
            <button class="btn-update" @click="openUpdateDialog(book)">Update</button>
          </div>
          
        </li>
      </ul>
      <div v-if="showUpdateForm" class="update-form">
        <input type="text" v-model="currentBook.name" placeholder="Enter new name">
        <input type="number" v-model="currentBook.isbn" placeholder="Enter new ISBN">
        <button @click="updateBook(currentBook.id)">Save Changes</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import db from '../firebase/init.js';
  import { collection, query, where, orderBy, limit, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

  export default {
    setup() {
        const books = ref([]);
        const currentBook = ref({});
        const showUpdateForm = ref(false);
        
        const fetchBooks = async () => {
            try {
                const q = query(
                  collection(db, 'books'), 
                  where('isbn', '>', 1000), 
                  orderBy('isbn'),
                  limit(10)
                  );
                const querySnapshot = await getDocs(q);
                const booksArray = [];
                querySnapshot.forEach((doc) => {
                    booksArray.push({ id: doc.id, ...doc.data() });
                });
                books.value = booksArray;
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        const openUpdateDialog = (book) => {
          currentBook.value = { ...book };
          showUpdateForm.value = true;
        };

        const updateBook = async (id) => {
          try {
              await updateDoc(doc(db, 'books', id), {
                name: currentBook.value.name,
                isbn: Number(currentBook.value.isbn)
              });
              fetchBooks();
              showUpdateForm.value = false;
              alert('Book updated successfully!');
            } catch (error){
              console.error('Error updating book:', error);
              alert('Failed to update book.')
            }
          };

        const deleteBook = async (id) => {
            try{
              await deleteDoc(doc(db, 'books', id));
              fetchBooks();
              alert('Book deleted successfully!');
            } catch (error){
              console.error('Error deleting book:', error);
              alert('Failed to delete book.')
            }
        };
    
        onMounted(() => {
            fetchBooks();
        });

        return {
            books,
            deleteBook,
            currentBook,
            showUpdateForm,
            openUpdateDialog,
            updateBook
        };
    }
};
  </script>


<style>
.book-item {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding: 10px 0;
}

.book-info {
  flex: 1; 
}

.button-group {
  margin-left: 20px; 
}

.button-group button {
  margin-right: 10px;
}

.update-form input {
  width: 100%; 
  margin-bottom: 10px; 
}

.form-control {
  display: block;
  width: 100%; 
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-delete, .btn-update {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-delete {
  background-color: #f44336; 
  color: white;
}

.btn-update {
  background-color: #2196f3; 
  color: white;
}


.button-group button:last-child {
  margin-right: 0; 
}
</style>