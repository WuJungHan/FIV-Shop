<template>
  <main class="container mt-3 h100vh">
    <Loading></Loading>
  <nav class="border-bottom pb-3 mb-3">
    <div class="">
      <router-link class=""
      aria-current="page" to="/index">FIV5品牌首頁</router-link>/
      <router-link class=""
      aria-current="page" to="/products">FIV5手造</router-link>/
      <router-link class=""
      aria-current="page" to="/product/:id">{{ product.category }}-{{ product.title }}</router-link>
    </div>
    </nav>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="product-img">
          <img :src="product.imageUrl" alt="" style="height:550px;">
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
        <div>
        <h2>{{ product.title }}</h2>
        <p>{{ product.category }}</p>
        <h3>{{ product.description }}</h3>
        <p>{{ product.content }}</p>
        <p>原價:{{ product.origin_price }}<span>特價:{{ product.price }}</span></p>
        <button class="btn btn-primary">加入購物車</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">

</style>

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
      product: {},
      id: '',
    };
  },
  methods: {
    // 取得資料庫 單一產品
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      // console.log(url);
      // this.$http 代替axios
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res);
          this.product = res.data.product;
          // console.log(this.product);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    // 取得網址上的參數 params.id
    // console.log(this.$route);
    // airbnb 解構寫法 寫成物件id
    const { id } = this.$route.params;
    // console.log(id);
    this.id = id;
    this.getProduct();
  },
};
</script>
