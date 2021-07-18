<template>
  <main>
    <div class="container d-flex justify-content-center mt-3">
      <!-- index 橫幅 -->
      <swiper :autoplay="autoplay" :navigation="true" class="mySwiper border border-3">
        <!-- slide 1 -->
        <swiper-slide
          style="
            background: url('https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80') center / cover;
            height: 400px;
          "
        ></swiper-slide>
        <!-- slide 2 -->
        <swiper-slide
          style="
            background: url('https://images.unsplash.com/photo-1566325645218-73b67fd824a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80') center / cover;
            height: 400px;
          "
        ></swiper-slide>
        <!-- slide 3 -->
        <swiper-slide
          style="
            background: url('https://images.unsplash.com/photo-1578651559882-286b3b791a3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') center / cover;
            height: 400px;
          "
        ></swiper-slide>
        <!-- slide 4 -->
        <swiper-slide
          style="
            background: url('https://images.unsplash.com/photo-1586878340506-af074f2ee999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') center / cover;
            height: 400px;
          "
        ></swiper-slide>
        <!-- slide 5 -->
        <swiper-slide
          style="
            background: url('https://images.unsplash.com/photo-1585506172580-9564a524231f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') center / cover;
            height: 400px;
          "
        ></swiper-slide>
      </swiper>
      <!-- <div class="mt-3 index-banner"></div> -->
    </div>
    <!-- index 產品分類按鈕 -->
    <div class="container mt-3">
      <ul class="row">
        <li class="col-6 col-md-3 animate__animated animate__fadeInDown">
          <button
            type="button"
            class="
              btn btn-secondary
              w-100
              text-white
              border-success border-2
              p-3
              my-btn
              first-product-btn
              fs-3
              fw-bold
            "
          >
            FIV-戒指
          </button>
        </li>
        <li
          class="
            col-6 col-md-3
            product-icon
            animate__animated animate__fadeInDown animate__delay-1s
          "
        >
          <button
            type="button"
            class="
              btn btn-secondary
              w-100
              text-white
              border-top-0 border-bottom-0 border-success
              p-3
              my-btn
              main-product-btn
              second-product-btn
              fs-3
              fw-bold
            "
          >
            FIV-對戒
          </button>
        </li>
        <li
          class="
            col-6 col-md-3
            product-icon
            mt-3 mt-md-0
            animate__animated animate__fadeInDown animate__delay-2s
          "
        >
          <button
            type="button"
            class="
              btn btn-secondary
              w-100
              text-white
              border-top-0 border-bottom-0 border-success
              p-3
              my-btn
              main-product-btn
              third-product-btn
              fs-3
              fw-bold
            "
          >
            FIV-手鐲
          </button>
        </li>
        <li
          class="
            col-6 col-md-3
            product-icon
            mt-3 mt-md-0
            animate__animated animate__fadeInDown animate__delay-3s
          "
        >
          <button
            type="button"
            class="
              btn btn-secondary
              w-100
              text-white
              border-top-0 border-bottom-0 border-success
              p-3
              my-btn
              main-product-btn
              fourth-product-btn
              fs-3
              fw-bold
            "
          >
            FIV-項鍊
          </button>
        </li>
      </ul>
    </div>
    <!-- index FIV 品牌區塊 -->
    <section class="container mt-3">
      <h2>FIV品牌館</h2>
      <div class="border-top border-bottom">123</div>
    </section>
    <!-- index 產品圖片 -->
    <section class="container mt-3">
      <h2>FIV手造</h2>
      <div class="border-top border-bottom">123</div>
    </section>
    <!-- index 訂閱區塊 -->
    <section
      id="subscription"
      class="
        container-fluid
        subscription-bg
        text-white
        d-flex
        flex-column
        justify-content-center
      "
    >
      <div class="container">
        <h2 class="">有任何我們能幫助您的嗎？</h2>
        <form class="" action="#">
          <label for="email" class="">
            輸入電子信箱<br />
            將有專業人員在線幫您解決所有問題</label
          ><br />
          <input
            class=""
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
          <input class="" type="submit" value="送出" />
        </form>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
// Import Swiper styles
@import 'swiper/swiper.scss';
@import '~swiper/components/navigation/navigation.min.css';

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:root {
  --animate-delay: 0.3s;
  --swiper-theme-color: #b39971;
}
.index-banner {
  height: 400px;
  width: 100%;
  background: url('https://upload.cc/i1/2021/06/06/pZsXyV.jpg') center center /
    100%;
  border-radius: 5px;
}

.my-btn {
  transition: 0.5s;
  box-shadow: 0px 2px 10px #464e46;
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0px 10px 15px #464e46;
    // center center / 100%;
    // background: #dad299;
    // color: #fff;
    // box-shadow: 0 0 5px #dad299,
    //             0 0 25px #dad299,
    //             0 0 50px #19547b,
    //             0 0 200px #19547b;
    // -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
  }
}
.first-product-btn {
  background: url('https://upload.cc/i1/2021/06/06/0LTkeZ.jpg') center center /
    100%;
  &:hover {
    background: url('https://upload.cc/i1/2021/06/06/NEVBcA.jpg') center center /
      110%;
  }
}
.second-product-btn {
  background: url('https://upload.cc/i1/2021/06/06/YsG7zf.jpg') center center /
    100%;
  &:hover {
    background: url('https://upload.cc/i1/2021/06/06/a4DvuF.jpg') center center /
      110%;
  }
}
.third-product-btn {
  background: url('https://upload.cc/i1/2021/06/06/WyrF51.jpg') center center /
    100%;
  &:hover {
    background: url('https://upload.cc/i1/2021/07/15/HxMyh4.jpg') center center /
      110%;
  }
}
.fourth-product-btn {
  background: url('https://upload.cc/i1/2021/06/06/suBLkg.jpg') center center /
    100%;
  &:hover {
    background: url('https://upload.cc/i1/2021/06/06/HvZ5qE.jpg') center center /
      110%;
  }
}
.subscription-bg {
  height: 40vh;
  background: url('https://images.unsplash.com/photo-1493662042295-319935c83112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80')
    top / 100%;
  background-attachment: fixed;
}
// .my-btn-bg{
//   background: linear-gradient(to right, #616161, #9bc5c3);
// }
// .product-icon{}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // swiper 自動撥放
      autoplay: {
      // 使用者操作swiper之後，是否禁止autoplay
        disableOnInteraction: false,
        // 自動切換的時間間隔（單位ms）
        delay: 4000,
      },
      loop: true,
    };
  },
};
</script>
