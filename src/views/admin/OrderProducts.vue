<template>
<div>
  <Loading></Loading>
  </div>
<main class="container">
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
      orders: [],
    };
  },
  methods: {
    getOrdersList() {
      // 管理控制台 [需驗證]-取得訂單列表
      // /api/:api_path/admin/orders?page=:page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(res);
          this.orders = res.data.orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getOrdersList();
  },
};
</script>
