<template>
<div>
  <Loading></Loading>
</div>
  <!-- 目前動作區塊 -->
  <div class="row text-center">
    <div class="col-4 bg-secondary">
      <h5 class="fw-bold pt-3">STEP 01</h5>
      <p class="fs-5 fw-bold">確認訂單商品</p>
    </div>
    <div class="col-4">
      <h5 class="fw-bold pt-3">STEP 02</h5>
      <p class="fs-5 fw-bold">輸入訂購資料</p>
    </div>
    <div class="col-4">
      <h5 class="fw-bold pt-3">STEP 03</h5>
      <p class="fs-5 fw-bold">付款/完成訂單</p>
    </div>
  </div>
  <!-- 訂單產品 -->
  <div class="content">
    <div class="table-wrap">
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col" class="text-center">商品資訊</th>
      <th scope="col">商品名稱</th>
      <th scope="col">數量</th>
      <th scope="col">單價</th>
      <th scope="col">折扣價</th>
      <th scope="col">小計</th>
      <th scope="col">刪除</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in cartProduct" :key="item.id">
      <td class="d-flex align-items-center">
        <img :src="item.product.imageUrl" alt="" style="width:150px;height:150px;">
      </td>
      <td>{{ item.product.title }}</td>
      <td>{{ item.qty}}</td>
      <td>{{ item.product.origin_price }}</td>
      <td>{{ item.product.price }}</td>
      <td>{{ item.total }}</td>
      <td>
        <button type="button" class="btn btn-primary">刪除</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
    <!-- 計算區塊 -->
    <div class="row">
      <div class="col-0 col-md-7"></div>
      <div class="col-12 col-md-1">共{{ cartProduct.length }}項</div>
      <div class="col-12 col-md-4">總金額:{{ countPrice }}</div>
    </div>
    <!-- 下一步 -->
    <div>
      <div>
        <router-link class="btn btn-primary" to="/check-orderer">下一步</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
// padeLoading component
import Loading from '../../components/PageLoading.vue';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      id: '',
      cartProduct: [],
      countPrice: 0,
    };
  },
  methods: {
    getCartList() {
      // 客戶購物 [免驗證]-取得購物車列表
      // /api/:api_path/cart get
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      // this.$http 代替axios
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res.data.data.carts);
          this.cartProduct = res.data.data.carts;
          // console.log(this.cartProduct);
          // console.log(typeof this.cartProduct);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    countAllPrice() {
      // 客戶購物 [免驗證]-取得購物車列表
      // /api/:api_path/cart get
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      // this.$http 代替axios
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res.data.data.carts);
          res.data.data.carts.forEach((item) => {
            this.countPrice += item.final_total;
          });
          // console.log(this.countPrice);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getCartList();
    this.countAllPrice();
  },
};
</script>
