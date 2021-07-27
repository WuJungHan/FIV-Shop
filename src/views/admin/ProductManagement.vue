<template>
<div><Loading></Loading></div>
<main class="container mt-3">
  <button class="btn btn-primary">新增產品</button>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>產品圖片</th>
        <th>產品名稱</th>
        <th>分類</th>
        <th>原價</th>
        <th>售價</th>
        <th>是否上架</th>
        <th>編輯/刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr class=""  v-for="item in productsAry" :key="item.id">
        <th>
          <div class="" style="width=150px;height: 150px;background-size: cover;
            background-position: center; background-repeat:no-repeat;"
            :style="{ 'background-image' : `url(${item.imageUrl})`}"></div>
        </th>
        <th>{{ item.title }}</th>
        <th>{{ item.category }}</th>
        <th>{{ item.origin_price }}</th>
        <th>{{ item.price }}</th>
        <th><div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">
    {{ item.is_enabled ? '上架' : '未上架'}}
    </label>
</div></th>
        <th>
          <button class="btn btn-outline-success me-1">編輯</button>
          <button class="btn btn-primary">刪除</button>
        </th>
      </tr>
      </tbody>
  </table>
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
      id: '',
      productsAry: [],
      // 蒐集全域元件需要的頁碼data
      pagination: {},
    };
  },
  mounted() {
  },
  methods: {
    // 全域元件pagination 使用$emit操作 代入item(page)作為參數 來達成切換頁面並重新渲染 記得api補上 ?page=:${page}
    // page = 1意思是當沒有參數帶入時,參數預設1
    getProducts(page = 1) {
      // 管理控制台 [需驗證]- 取得後台產品列表
      // [API]: /api/:api_path/admin/products?page=:page [方法]: get
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url) // 資料庫每個人path是獨立的
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            this.productsAry = res.data.products; // 將空陣列賦與後台products資料
            this.pagination = res.data.pagination;// 將頁碼res帶到data內供元件使用
            console.log(this.productsAry, this.pagination);
          } else {
            // console.log(productsData);
            alert('請重新登入!');
          }
        })
        .catch((error) => { //  接收錯誤回傳
          // handle error
          console.log(error);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
