<template>
  <main class="container mt-3">
    <Loading></Loading>
    <nav class="d-flex justify-content-between border-bottom">
      <div class="">
        <router-link class="" aria-current="page" to="/index"
          >FIV5品牌首頁</router-link
        >/
        <router-link class="" aria-current="page" to="/products"
          >FIV5手造</router-link
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
                class="list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold"
                aria-current="true"
                @click="getProducts()"
              >
                全部商品
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold"
                aria-current="true"
                @click="getRingProducts()"
              >
                手造戒指
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold"
                aria-current="true"
                @click="getLoversRingProducts()"
              >
                手造對戒
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold"
                aria-current="true"
                @click="getBraceletProducts()"
              >
                手造手鐲
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold"
                aria-current="true"
                @click="getNecklaceProducts()"
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
            class="card mb-3 me-5  my-card animate__animated animate__fadeIn"
            style="width: 18rem"
          >
          <!-- card background-image -->
          <div class="my-card-img-div">
            <!-- <img :src="item.imageUrl" class="card-img-top  my-card-img" alt="..." /> -->
            <div class="card-img-top my-card-img"
            style="height: 220px; background-size: cover; background-position: center"
            :style="{ 'background-image' : `url(${item.imageUrl})`}"></div>
          </div>
            <div class="card-body">
              <h5 class="card-title border-bottom pb-2 fw-bold fs-3">{{ item.title }}</h5>
              <p class="card-text fw-bold">{{ item.category }}</p>
              <p>{{ item.description }}</p>
              <p>{{ item.content }}</p>
              <p>原價:<span class="line-through">{{ item.origin_price }}</span>
              特價:<span class="text-danger fw-bold fs-5">{{ item.price }}</span></p>
            </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-outline-primary me-md-2" type="button"
    @click="goToProductPage(item)">產品詳情</button>
  <button class="btn btn-primary" type="button" @click="addCart(item.id)">立即選購</button>
</div>
          </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.line-through{
  text-decoration:line-through;
}
.my-card{
  transition:0.5s;
  &:hover{
    box-shadow: 0px 0px 10px #464e46;
  }
}
.my-card-width{
  width: 33%;
}
.my-card-img-div{
  overflow: hidden;
}
.my-card-img{
  width: 100%;
  height: 250px;
  transform:scale(1,1);
  transition:0.5s;
  &:hover{
    transform:scale(1.2,1.2);
  }
}
</style>

<script>
// ../../上上層
// import Card from '../../components/Card.vue';
// padeLoading component
import Loading from '../../components/PageLoading.vue';
import emitter from '../../assets/javascript/emitter';

export default {
  // 區域註冊元件
  components: {
    // Card,
    Loading,
  },
  data() {
    return {
      products: [],
      categoryProducts: [],
    };
  },
  methods: {
    getProducts() {
      this.products = this.categoryProducts;
    },
    goToProductPage(item) {
      // 使用this.$router 調用push方法 轉頁
      // console.log(this.$router);
      // console.log(item);
      this.$router.push(`/product/${item.id}`);
    },
    getRingProducts() {
      const arr = [];
      this.categoryProducts.forEach((item) => {
        if (item.category === '戒指') {
          arr.push(item);
        }
      });
      // console.log(arr);
      this.products = arr;
      // console.log(this.products);
    },
    getLoversRingProducts() {
      const arr = [];
      this.categoryProducts.forEach((item) => {
        if (item.category === '對戒') {
          arr.push(item);
        }
      });
      // console.log(arr);
      this.products = arr;
      // console.log(this.products);
    },
    getBraceletProducts() {
      const arr = [];
      this.categoryProducts.forEach((item) => {
        if (item.category === '手鐲') {
          arr.push(item);
        }
      });
      // console.log(arr);
      this.products = arr;
      // console.log(this.products);
    },
    getNecklaceProducts() {
      const arr = [];
      this.categoryProducts.forEach((item) => {
        if (item.category === '項鍊') {
          arr.push(item);
        }
      });
      // console.log(arr);
      this.products = arr;
      // console.log(this.products);
    },
    addCart(id, _qty = 1) {
      // 客戶購物 [免驗證]-加入購物車
      // [API]: /api/:api_path/cart
      // [參數]: { "data": { "product_id":"-L9tH8jxVb2Ka_DYPwng","qty":1 } }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: _qty,
      };
      // console.log(url, { data: cart });
      this.$http.post(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            // 如果成功 跳出提示
            alert(res.data.message);
            // 對應front.vue的emitter監聽
            emitter.emit('updata-cart');
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
    // 客戶購物 [免驗證]-取得商品列表
    // api: /api/:api_path/products?page=:page
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
    // this.$http 代替axios
    this.$http
      .get(url)
      .then((res) => {
        // console.log(res);
        this.products = res.data.products;
        this.categoryProducts = res.data.products;
        // console.log(this.products);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
