<template>
  <main class="container mt-3 mb-3">
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
          <!-- <img :src="product.imageUrl" alt="" style="height:550px;"> -->
          <div class="mx-auto" style="height: 500px;max-width: 500px;
          background-size: contain; background-position: center; background-repeat:no-repeat;"
            :style="{ 'background-image' : `url(${product.imageUrl})`}"></div>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
        <div>
        <h2>{{ product.title }}</h2>
        <p>{{ product.category }}</p>
        <h3>{{ product.description }}</h3>
        <p>{{ product.content }}</p>
        <p>原價:<span class="line-through">{{ product.origin_price }}</span>
              特價:<span class="text-danger fw-bold fs-5">{{ product.price }}</span></p>
        <p>數量:
          <input min="1" max="99" type="number" class="" v-model.number="qty">
        </p>
        <button class="btn btn-success me-3" @click="addCart()">加入購物車</button>
        <router-link class="btn btn-primary" to="/products">回上頁</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.line-through{
  text-decoration:line-through;
}
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
      qty: 1,
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
    // 加入購物車
    addCart() {
      // 客戶購物 [免驗證]-加入購物車
      //  /api/:api_path/cart
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.id,
        qty: Number(this.qty),
      };
      // console.log(url, { data: cart });
      this.$http.post(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            // 如果成功 跳出提示
            alert(res.data.message);
          } else {
            // 如果未成功加入 跳出提示
            alert(res.data.message);
          }
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
