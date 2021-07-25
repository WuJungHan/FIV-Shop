<template>
<div><Loading></Loading></div>
<main class="container">
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
  </table>
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
