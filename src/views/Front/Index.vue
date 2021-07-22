<template>
  <main>
    <div class="container d-flex justify-content-center mt-3">
      <!-- index 橫幅 -->
      <swiper :autoplay="autoplay" :navigation="true" class="mySwiper
        border border-3 animate__animated animate__fadeIn">
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
    <section class="container mt-3">
      <ul class="row mt-3">
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
            FIV5-戒指
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
            FIV5-對戒
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
            FIV5-手鐲
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
            FIV5-項鍊
          </button>
        </li>
      </ul>
    </section>
    <!-- index FIV5 品牌區塊 -->
    <section class="container mt-3">
      <h2 class="border-bottom pb-2 fw-bold">關於品牌</h2>
      <div class="d-flex justify-content-center animate__animated animate__fadeIn">
      <div class="mt-3 p-3 brand-bg d-flex d-flex justify-content-center align-items-center rounded-1 border border-3" style="background:linear-gradient(to right, rgba(3, 3, 3, 0.6), rgba(2, 2, 2, 0.6)), url('https://upload.cc/i1/2021/06/06/pZsXyV.jpg') center /auto; height: 550px; width: 1100px;">
      <div class="brand-text p-3 p-md-5 fw-bold rounded-1" style="background:#fff;
      height: 300px; max-width: 500px;opacity:0.7;">
      <h3 class="">Lorem, ipsum dolor !</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur, vitae.ipsum dolor sit amet consectetur
          adipisicing elit. Consectetur, vitae.ipsum dolor sit
          amet consectetur adipisicing elit. Consectetur, vitae.</p>
      </div>
      </div>
      </div>
    </section>
    <!-- index FIV5 最新消息 -->
    <section class="container mt-3 news">
      <h2 class="border-bottom pb-2 fw-bold">最新消息</h2>
      <!-- news first-product  -->
      <div class="mt-3 row">
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-5">
          <div class="first-product-bg product-bg rounded-1 animate__animated animate__fadeIn
            " style="">
            <div class="hover text-white d-flex justify-content-center align-items-center">
              <h4 class="product-bg-text">FIV5</h4>
              </div>
          </div>
        </div>
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center text-center">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rem!</p>
          <router-link class="btn btn-primary w-50 mx-auto" to="/products">產品詳情</router-link>
        </div>
        <div class="col-0 col-md-1"></div>
      </div>
      <!-- news second-product-bg -->
      <div class="mt-3 row">
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center text-center">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rem!</p>
          <router-link class="btn btn-primary w-50 mx-auto" to="/products">產品詳情</router-link>
        </div>
        <div class="col-12 col-md-5">
          <div class="second-product-bg product-bg rounded-1 animate__animated animate__fadeIn
            " style="">
            <div class="hover text-white d-flex justify-content-center align-items-center">
              <h4 class="product-bg-text">FIV5</h4>
              </div>
          </div>
        </div>
        <div class="col-0 col-md-1"></div>
      </div>
      <!-- news third-product-bg-->
      <div class="mt-3 row">
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-5">
          <div class="third-product-bg product-bg rounded-1 animate__animated animate__fadeIn
            " style="">
            <div class="hover text-white d-flex justify-content-center align-items-center">
              <h4 class="product-bg-text">FIV5</h4>
              </div>
          </div>
        </div>
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center text-center">
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rem!</p>
          <router-link class="btn btn-primary w-50 mx-auto" to="/products">產品詳情</router-link>
        </div>
        <div class="col-0 col-md-1"></div>
      </div>
    </section>
    <!-- 飾品工藝 影片+介紹區塊 -->
    <section class="container mt-3">
      <h2 class="border-bottom pb-2 fw-bold">飾品工藝</h2>
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <!-- 崁入 youtube autoplay=1 自動撥放 如不要請移除-->
          <iframe width="100%" height="350"
          src="https://www.youtube.com/embed/HjBXUahbo80?&autoplay=1" frameborder="0"
          allowfullscreen></iframe>
        </div>
        <div class="col-12 col-md-6  d-flex flex-column justify-content-center">
          <div class="">
          <h3 class="fw-bold">每鍛傳奇，造就不斐</h3>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Reprehenderit nostrum sed autem labore modi eos!</p>
          </div>
        </div>
      </div>
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
        mt-3
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
.news{
  transition: 1s;
  .first-product-bg{
    background:url('https://upload.cc/i1/2021/06/06/tXB4zw.jpg') center /100%;
  }
  .second-product-bg{
    background:url('https://upload.cc/i1/2021/06/06/WyrF51.jpg') center /100%;
  }
  .third-product-bg{
    background:url('https://upload.cc/i1/2021/07/15/byfrL1.jpg') center /100%;
  }
  .product-bg{
    height: 300px;
  }
  .product-bg-text{
    display: none;
  }
  .hover{
    height: 100%;
    width: 100%;
    // background: rgba(0,0,0,0.5);
    transition:0.5s;
    &:hover{
      background: rgba(0,0,0,0.5);
    }
    &:hover .product-bg-text{
      display: inline;
    }
  }
}
.subscription-bg {
  height: 40vh;
  background: url('https://images.unsplash.com/photo-1493662042295-319935c83112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80')
    top / cover;
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
      // youtube
      // videoId: 'lG0Ys-2d4MA',
      // playerVars: {
      //   autoplay: 1,
      // },
    };
  },
  methods: {
    // playVideo() {
    //   this.player.playVideo();
    // },
    // playing() {
    //   console.log(' we are watching!!!');
    // },
  },
  computed: {
    // player() {
    //   return this.$refs.youtube.player;
    // },
  },
  created() {
  },
};
</script>
