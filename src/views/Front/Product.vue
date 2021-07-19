<template>
  <main class="container mt-3">
  <nav class="">
    <div class="">
      <router-link class=""
      aria-current="page" to="/index">FIV5品牌首頁</router-link>/
      <router-link class=""
      aria-current="page" to="/products">FIV5手造</router-link>/
      <router-link class=""
      aria-current="page" to="/product/:id">FIV5{{ id }}</router-link>
    </div>
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    };
  },
  created() {
    // 取得網址上的參數 params.id
    // console.log(this.$route);
    // airbnb 解構寫法 寫成物件id
    const { id } = this.$route.params;
    console.log(id);
    this.id = id;
  },
};
</script>
