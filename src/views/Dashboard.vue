<!-- 後台 -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <router-link class="navbar-brand" to="/">FIV-logo</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li>
            <router-link
              class="nav-link"
              aria-current="page"
              to="/order-products"
              >後台訂單</router-link
            >
          </li>
          <li>
            <router-link
              class="nav-link"
              aria-current="page"
              to="/product-management"
              >後台產品管理</router-link
            >
          </li>
          <li>
            <a href="#" class="nav-link" @click.prevent="signout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <p>後台外框-頭尾共用</p>
  <!-- 主顯示區塊後台子頁面用 配合checkLogin()決定是否顯示子router區塊-->
  <router-view v-if="checkSuccess"></router-view>
  <!-- footer -->
  <section>表尾</section>
</template>

<script>
export default {
  data() {
    return {
      checkSuccess: '',
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    // 確認登入-token
    checkLogin() {
      // 取出token 驗證
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      // 如果有token
      if (token) {
        // axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        // 登入及驗證-檢查用戶是否仍持續登入
        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.post(url).then((res) => {
          // console.log(res);
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            alert(res.data.message);
            this.$router.push('/login');
          }
        });
      } else {
        alert('未有登入資訊');
        this.$router.push('/login');
      }
    },
    // 登出並清除token轉回登入頁
    signout() {
      document.cookie = 'hexToken=;expires;';
      alert('已清除token登出');
      this.$router.push('/login');
    },
  },
};
</script>
