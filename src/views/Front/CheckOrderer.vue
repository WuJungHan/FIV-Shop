<template>
  <div>
  <Loading></Loading>
</div>
  <!-- 目前動作區塊 -->
  <div class="row text-center">
    <div class="col-4">
      <h5 class="fw-bold pt-3">STEP 01</h5>
      <p class="fs-5 fw-bold">確認訂單商品</p>
    </div>
    <div class="col-4 bg-secondary">
      <h5 class="fw-bold pt-3">STEP 02</h5>
      <p class="fs-5 fw-bold">輸入訂購資料</p>
    </div>
    <div class="col-4">
      <h5 class="fw-bold pt-3">STEP 03</h5>
      <p class="fs-5 fw-bold">付款/完成訂單</p>
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
};
</script>
