<template>
  <div>
    <Loading></Loading>
  </div>
  <div class="container mt-3" v-if="checkSuccess">
    <!-- 訂單詳情 -->
    <div class="d-flex justify-content-between">
      <h2 class="fw-bold">訂單詳情</h2>
      <router-link class="btn btn-primary" to="/orders">回訂單列表</router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="w-25">訂單編號：</th>
          <th>{{ id }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>訂單產生日期：</td>
          <td>{{ order.create_at }}</td>
        </tr>
        <tr>
          <td>訂單金額：</td>
          <td>＄{{ $toCurrency(order.total) }}</td>
        </tr>
        <tr>
          <td>付款狀態：</td>
          <td>{{ order.is_paid ? '付款完成' : '未付款' }}</td>
        </tr>
        <tr>
          <td>出貨狀態：</td>
          <td>未出貨</td>
        </tr>
      </tbody>
    </table>
    <!-- 訂購人資料 -->
    <h2 class="fw-bold">訂購人資料</h2>
    <table class="table">
      <thead>
        <tr>
          <th class="w-25">姓名：</th>
          <th>{{ order.user.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>電話：</td>
          <td>{{ order.user.tel }}</td>
        </tr>
        <tr>
          <td>地址：</td>
          <td>{{ order.user.address }}</td>
        </tr>
        <tr>
          <td>信箱：</td>
          <td>{{ order.user.email }}</td>
        </tr>
        <tr>
          <td>備註：</td>
          <td>{{ order.message }}</td>
        </tr>
      </tbody>
    </table>
    <!-- 訂購產品清單 -->
    <h2 class="fw-bold">訂購產品清單</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">商品</th>
          <th scope="col">品名</th>
          <th scope="col">類別</th>
          <th scope="col">數量</th>
          <th scope="col">價格</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>
            <div
              class=""
              style="width=120px;height: 120px;background-size: cover;
            background-position: center; background-repeat:no-repeat;"
              :style="{ 'background-image': `url(${item.product.imageUrl})` }"
            ></div>
          </td>
          <td>{{ item.product.title }}</td>
          <td>{{ item.product.category }}</td>
          <td>{{ item.qty }}/{{ item.product.unit }}</td>
          <td>＄{{ $toCurrency(item.final_total) }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <!-- <td class="text-end">總計：＄{{ countPrice }}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// padeLoading component
import Loading from '../../components/PageLoading.vue';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      checkSuccess: '',
      order: {},
      id: '',
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
          if (res.data.success) {
            // console.log(res);
            // console.log(res.data.orders);
            const ordersAry = res.data.orders;
            this.checkSuccess = true;
            ordersAry.forEach((item) => {
              if (item.id === this.id) {
                this.order = item;
                // console.log(this.order);
              }
            });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    upDataOrder() {
      // 管理控制台 [需驗證]-修改訂單
      // [API]: /api/:api_path/admin/order/:id [方法]: put
      // const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/${id}`;
      // console.log(url);
    },
  },
  created() {
    // 取得網址上的參數 params.id
    // console.log(this.$route);
    // airbnb 解構寫法 寫成物件id
    const { id } = this.$route.params;
    // console.log(id);
    this.id = id;
    this.getOrdersList();
  },
};
</script>
