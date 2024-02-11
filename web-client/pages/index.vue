<script setup lang="ts">
const {data:message} = await useFetch('http://localhost:5057/api/home')
</script>
<template>
    <div>
      {{ message }}
    </div>
  </template>
  