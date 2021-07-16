<template>單一產品頁{{ id }}</template>

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
