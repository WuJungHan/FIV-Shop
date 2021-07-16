<template>
  <div class="container">
    <table class="table">
      <thead></thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.title }}</td>
          <td></td>
          <td></td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="goToProductPage(item)"
            >
              立即選購
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <!-- 將card元件放置畫面 -->
    <!-- <Card></Card> -->
  </div>
</template>

<script>
// ../../上上層
// import Card from '../../components/Card.vue';

export default {
  // 區域註冊元件
  // components: {
  //   Card,
  // },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    goToProductPage(item) {
      // 使用this.$router 調用push方法 轉頁
      // console.log(this.$router);
      // console.log(item);
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    // 客戶購物 [免驗證]-取得商品列表
    // api: /api/:api_path/products?page=:page
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
    // this.$http 代替axios
    this.$http
      .get(url)
      .then((res) => {
        // console.log(res);
        this.products = res.data.products;
        // console.log(this.products);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
