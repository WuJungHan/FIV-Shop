<template>
<main class="position-relative">

  <!-- 導覽列navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark my-navbar-bg position-sticky top-0">
    <div class="container">
      <router-link class="navbar-brand caveat fs-1" to="/">FIV5</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"

      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto my-2 my-lg-0"
        style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/index">
              FIV5品牌首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/products">
              FIV5手造
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/discount">
              FIV5優惠
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/shop">
              FIV5門市
            </router-link>
          </li>
        </ul>
        <ul class="d-flex">
          <li class="nav-item position-relative">
            <router-link class="nav-link text-white" aria-current="page" to="/cart">
              購物車<span class="position-absolute top-0
              start-100 translate-middle badge
              rounded-pill bg-secondary">
              +99 <span class="visually-hidden">unread messages</span></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" aria-current="page" to="/login">
              後台訂單管理
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 主顯示區塊前台子頁面用  -->
  <router-view></router-view>
  <!-- footer -->
  <section class="bg-dark">
    <div class="container text-center text-light">
      <div class="row">
        <div class="col pt-3">
          <p><span>icon</span>,FIV5 made in 2021</p>
          <p>僅作為個人作品，無任何商業用途，未經同意請勿轉載</p>
        </div>
      </div>
    </div>
  </section>
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
.caveat{
  font-family:  'Caveat', cursive;
}
.my-navbar-bg{
  background: linear-gradient(to right, #ffd89b, #19547b);
  z-index: 999;
}
.front-bg{
  width: 100%;
  height: 100vh;
  background:
  linear-gradient(to right, rgba(3, 3, 3, 0.8), rgba(2, 2, 2, 0.8)),
  url(https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80)no-repeat center/100% 100%;
}
.front-text-bg{
  height: 100px;
  background: rgba(255, 252, 252, 0.3);
}
.brand-btn{
  background: #ffd89b;
  &:hover{
    background: #c7a979;
  }
}
.product-btn{
  background: #19547b;
  &:hover{
    background: #123d5a;
  }
}
</style>

<script>

export default {
  // 區域註冊元件
  components: {
  },
  data() {
    return {
    };
  },
};
</script>
