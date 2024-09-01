<template>
  <div>
    <h1>Access Denied</h1>
    <p>You do not have permission to view this page.</p>
    <router-link to="/login">Login first here</router-link>
  </div>
</template>

<script>
export default {
  name: 'AccessDenied',
};
</script>