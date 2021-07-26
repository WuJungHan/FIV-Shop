<template>
<div>
  <Loading></Loading>
  </div>
<main class="container mt-3">
  <h2 class="fw-bold">訂單管理</h2>
  <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">訂單編號</th>
      <th scope="col">訂購人姓名</th>
      <th scope="col">訂購人備註</th>
      <th scope="col">付款狀態</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody class="fw-bold">
    <tr v-for="item in orders" :key="item.id">
      <td>{{ item.create_at }}</td>
      <td>{{ item.user.name }}</td>
      <td>{{ item.message }}</td>
      <td class="text-danger">{{ item.is_paid ?  '付款完成' : '未付款' }}</td>
      <td><button class="btn btn-primary" @click="goToOrder(item)">查看</button></td>
      <td><button class="btn btn-warning" @click="deleteOrder(item)">刪除</button></td>
    </tr>
  </tbody>
</table>
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
          if (res.data.success) {
            // console.log(res);
            this.orders = res.data.orders;
            console.log(this.orders);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goToOrder(item) {
      this.$router.push(`/order/${item.id}`);
    },
    deleteOrder(item) {
      if (window.confirm(`確定刪除${item.create_at}訂單嗎?`) === true) {
        // 管理控制台 [需驗證] - 刪除訂單
        // /api/:api_path/admin/order/:id [方法]: delete
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
        this.$http
          .delete(url)
          .then((res) => {
            if (res.data.success) {
              // console.log(res);
              alert(res.data.message);
              this.getOrdersList();
            } else {
              alert(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('已取消');
      }
    },
  },
  created() {
    this.getOrdersList();
  },
};
</script>
