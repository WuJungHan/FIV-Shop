<template>
  <main class="container mt-3">
    <nav class="d-flex justify-content-between">
      <div class="">
        <router-link class="" aria-current="page" to="/index"
          >FIV品牌首頁</router-link
        >/
        <router-link class="" aria-current="page" to="/products"
          >FIV手造</router-link
        >
      </div>
      <div class="d-flex d-none d-md-block">
        <input
          class="me-2"
          type="search"
          placeholder="請輸入產品名稱"
          aria-label="Search"
        />
        <button class="btn btn-outline-primary" type="">尋找手造</button>
      </div>
    </nav>

    <div class="row mt-3">
      <!-- 側邊導覽 -->
      <div class="col-12 col-md-2">
        <div class="list-group text-center">
          <ul>
            <li>
              <button
                type="button"
                class="list-group-item list-group-item-action pt-2 pb-2"
                aria-current="true"
              >
                全部商品
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-2 pb-2"
                aria-current="true"
              >
                手造戒指
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-2 pb-2"
                aria-current="true"
              >
                手造對戒
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-2 pb-2"
                aria-current="true"
              >
                手造手鐲
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-2 pb-2"
                aria-current="true"
              >
                手造項鍊
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- 主商品card區塊 -->
      <div class="col-12 col-md-10 d-flex flex-wrap">
          <div
            v-for="item in products"
            :key="item.id"
            class="card mb-3 me-5"
            style="width: 18rem"
          >
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class="btn btn-primary"
                @click="goToProductPage(item)"
              >
                立即選購
              </button>
            </div>
          </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.my-card-width{
  width: 33%;
}
</style>

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
