<template>
  <!-- 主視覺圖 -->
  <div class="front-bg h100vh p-3 text-white">
    <div class="container">
      <div class="row h100vh align-items-center">
        <div class="col-0 col-md-8">
        </div>
        <!-- 文字區塊 -->
        <div class="col-12 col-md-4 front-text-bg rounded-3 p-3">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, obcaecati.</p>
          <div class="d-flex justify-content-center mt-5">
            <!-- 連結區塊 -->
          <router-link class="btn brand-btn" to="/index">FIV5品牌</router-link>
          <router-link class="btn product-btn" to="/products">FIV5產品</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.h100vh{
  height: 100vh;
}
.front-bg{
  width: 100%;
  height: 100vh;
  background:
  linear-gradient(to right, rgba(3, 3, 3, 0.8), rgba(2, 2, 2, 0.8)),
  url(https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80)no-repeat center/100% 100%;
}
.front-text-bg{
  height: 300px;
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
