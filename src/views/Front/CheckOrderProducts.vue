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
      <th scope="col">商品名稱 <i class="bi bi-alarm"></i></th>
      <th scope="col">數量</th>
      <th scope="col" class="d-none d-md-table-cell">單價</th>
      <th scope="col" class="d-none d-md-table-cell">折扣價</th>
      <th scope="col">小計</th>
      <th scope="col">刪除</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in cartProduct" :key="item.id">
      <td class="d-flex align-items-center">
        <!-- <img :src="item.product.imageUrl" alt="" style="width:150px;height:150px;"> -->
        <div style="width:150px;height:150px; background-size: cover; background-position: center"
            :style="{ 'background-image' : `url(${item.product.imageUrl})`}"></div>
      </td>
      <td>{{ item.product.title }}</td>
      <td>
        <input min="1" max="99" type="number" v-model.number="item.qty"
        class="form-control" ref="qty" @change="updataProductQty(item)">
      </td>
      <td class="d-none d-md-table-cell">{{ item.product.origin_price }}</td>
      <td class="d-none d-md-table-cell">{{ item.product.price }}</td>
      <td>{{ item.total }}</td>
      <td>
        <button type="button" class="btn btn-primary" @click="deleteProduct(item.id)">刪除</button>
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
    <div class="mb-3">
      <div class="d-flex justify-content-between">
        <button class="btn btn-primary" @click="deleteAllProducts">清空購物車</button>
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
import emitter from '../../assets/javascript/emitter';

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
          if (res.data.success) {
            // console.log(res.data.data.carts);
            this.cartProduct = res.data.data.carts;
            // console.log(this.cartProduct);
            // console.log(typeof this.cartProduct);
          } else {
            alert(res.data.message);
          }
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
          if (res.data.success) {
            // console.log(res.data.data.carts);
            res.data.data.carts.forEach((item) => {
              this.countPrice += item.final_total;
            });
            // console.log(this.countPrice);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteProduct(id) {
      // 客戶購物 [免驗證]-刪除某一筆購物車資料
      // /api/:api_path/cart/:id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      // console.log(url);
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            // 如果成功 跳出提示
            alert(res.data.message);
            this.getCartList();
            this.countPrice = 0;
            this.countAllPrice();
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
    deleteAllProducts() {
      // 客戶購物 [免驗證]-刪除全部購物車
      // [API]: /api/:api_path/carts
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            // 如果成功 跳出提示
            alert(res.data.message);
            this.getCartList();
            this.countPrice = 0;
            this.countAllPrice();
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
    productQtyAdd() {

    },
    productQtySubtract() {
    },
    updataProductQty(item) {
      // console.log(item);
      if (item.qty > 0) {
        const data = {
          product_id: item.id,
          qty: item.qty,
        };
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
        // console.log(data, url);
        this.$http.put(url, { data })
          .then((res) => {
            if (res.data.success) {
              // 如果成功 跳出提示
              alert(res.data.message);
              this.getCartList();
              this.countPrice = 0;
              this.countAllPrice();
            } else {
              // 如果未成功加入 跳出提示
              alert(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('數量不可小於零');
      }
    },
  },
  created() {
    this.getCartList();
    this.countAllPrice();
  },
};
</script>
