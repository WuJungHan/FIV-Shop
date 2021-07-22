<template>
<main>
  <Loading></Loading>
</main>
</template>

<script>
// padeLoading component
import Loading from '../../components/PageLoading.vue';

export default {
  components: {
    // Card,
    Loading,
  },
  data() {
    return {
      id: '',
    };
  },
  created() {
  },
};
</script>
