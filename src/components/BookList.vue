<template>
  <div>
    <h2>Book List</h2>
    <ul v-if="books.length">
      <li v-for="book in books" :key="book.id">
        <strong>{{ book.name }}</strong> - ISBN: {{ book.isbn }}
      </li>
    </ul>
    <p v-else>No books available.</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: 'BookList',
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'books'));
        books.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books
    };
  }
};
</script>
