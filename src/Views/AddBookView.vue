<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>

    <!-- Update Book -->
    <div>
      <h2>Update Book</h2>
      <div>
        <label for="updateISBN">New ISBN:</label>
        <input type="text" v-model="updateISBN" id="updateISBN" required />
      </div>
      <div>
        <label for="updateName">New Name:</label>
        <input type="text" v-model="updateName" id="updateName" required />
      </div>
      <button @click="updateBook(updateISBN, { name: updateName })">Update Book</button>
    </div>

    <!-- Delete Book -->
    <div>
      <h2>Delete Book</h2>
      <div>
        <label for="deleteISBN">Book ISBN:</label>
        <input type="text" v-model="deleteISBN" id="deleteISBN" required />
      </div>
      <button @click="deleteBook(deleteISBN)">Delete Book</button>
    </div>

    <!-- Retrieve Books -->
    <div>
      <h2>Retrieve Books</h2>
      <button @click="retrieveBooks">Retrieve Books</button>
    </div>

    
    <BookList />
  </div>
</template>

<script>
import { ref } from 'vue';

import { collection, addDoc, doc, updateDoc, deleteDoc, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

import BookList from '../components/BookList.vue'; // Import the BookList component

export default {
  components: {
    BookList, // Register the BookList component
  },
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value,
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    };
    // Update book
    const updateBook = async (isbn, updatedData) => {
      try {
        // Query to find the document by ISBN
        const q = query(collection(db, 'books'), where('isbn', '==', Number(isbn)));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log('No matching documents found!');
          return;
        }

        // Loop through all matching documents
        querySnapshot.forEach(async (docSnapshot) => {
          const bookRef = doc(db, 'books', docSnapshot.id); // Get the reference using the document ID
          await updateDoc(bookRef, updatedData); // Update the document with the new data
          console.log('Book updated successfully!');
        });
      } catch (error) {
        console.error('Error updating book: ', error);
      }
    };

    // delete book
    const deleteBook = async (isbn) => {
      try {
        // Query the collection to find the document with the specified ISBN
        const q = query(collection(db, 'books'), where('isbn', '==', Number(isbn)));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log('No matching documents found!');
          return;
        }

        // Loop through all matching documents
        querySnapshot.forEach(async (docSnapshot) => {
          await deleteDoc(doc(db, 'books', docSnapshot.id)); // Delete the document using its ID
          console.log('Book deleted successfully!');
        });
      } catch (error) {
        console.error('Error deleting book: ', error);
      }
    };

    // retrive from database
    const retrieveBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1000), 
          orderBy('isbn', 'asc'),   
          limit(10)                 
        );

        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });

        console.log('Books retrieved:', booksArray);
      } catch (error) {
        console.error('Error retrieving books: ', error);
      }
    };

    return {
      isbn,
      name,
      addBook,
      updateBook,
      deleteBook,
      retrieveBooks,
    };
  },
};
</script>
