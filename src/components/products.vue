
<template>
  <div class="bg-white my-14 px-4">
    <div class="main-containar">
      <h2 class="text-title md:text-[35px] text-[19px] font-Lato font-[900] text-center mb-8">Select products to bundle & save.</h2>
      <div class="flex flex-wrap">
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="Car" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Car Insurance</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="bulding" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Renters</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="house" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Home Insurance</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="Carfor" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Car + Home</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="dogtwo" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Car Pet</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="heart" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Life</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="hearttwo" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Small Business</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
        <div class="w-[48%] md:w-[24%] m-[1%] md:m-[0.5%] rounded-[5px] box-shadow">
            <div class="pt-[15%]">
              <div class="max-w-[190px] m-auto">
                <Vue3Lottie :animationData="truck" :playOnHover='true' :height="200" :width="200" />
              </div>
              <p class="mb-[20px] font-Roboto text-[15px] text-[#000105] text-center font-medium">Commercial Auto</p>
              <div class="text-center pb-2">
                <a href="#" class="m-auto bg-Orenge hover:bg-yellow w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="../assets/img/right-arrow.svg" alt="">
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import Car from '../assets/img/1_car__.json';
import bulding from '../assets/img/2_bulding.json';
import house from '../assets/img/3_house.json';
import Carfor from '../assets/img/4_car.json';
import dogtwo from '../assets/img/5_dog.json';
import heart from '../assets/img/6_heart.json';
import hearttwo from '../assets/img/7_heart.json';
import truck from '../assets/img/8_truck.json';
export default ({
  components: {
    Vue3Lottie,
  },
   data() {
    return {
      Car,
      bulding,
      house,
      Carfor,
      dogtwo,
      heart,
      hearttwo,
      truck
    }
  },
});
</script>