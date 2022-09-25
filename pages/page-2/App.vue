<template>
  <div class="home">hello world</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  alert('hello world');
});
</script>
<style lang="scss">
.home {
  font-size: 20px;
}
</style>
