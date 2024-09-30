<template>
  <div>
    <h1>Book Counter</h1>
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
    this.getBookCountAPI();
  },
  
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get('https://countbooks-7obwzd3fjq-uc.a.run.app');
        this.jsondata = response.data;
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