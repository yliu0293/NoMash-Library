<template>
  <div>
    <h1>All Books</h1>
    <pre>{{ jsondata }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsondata: null,
      error: null,
    };
  },

  mounted() {
    this.getAllBookAPI();
  },
  
  methods: {
    async getAllBookAPI() {
      try {
        const response = await axios.get('https://getbooks-7obwzd3fjq-uc.a.run.app');
        this.jsondata = response.data;
        this.error = null;
      } catch (error) {
        console.error('error fetching books: ', error);
        this.error = error;
        this.count = null;
      }
    },
  },
};
</script>