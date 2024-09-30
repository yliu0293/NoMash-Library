<template>
  <div>
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count !==null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      count: null,
      error: null,
    };
  },
  methods: {
    async getBookCount() {
      try {
        const response = await axios.get('https://countbooks-7obwzd3fjq-uc.a.run.app');
        this.count = response.data.count;
        this.error = null;
      } catch (error) {
        console.error('error fetching book count: ', error);
        this.error = error;
        this.count = null;
      }
    },
  },
};
</script>