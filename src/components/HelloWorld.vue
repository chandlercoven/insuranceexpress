<template>
  <div class="relative pt-5 md:pt-0">
    <div class="md:absolute top-[20%] left-1/2 text-center md:translate-x-[-50%] w-full z-10">
      <h1 class="text-gry px-4 text-lg leading-[1.5] marker:font-black font-merriweather xl:text-[46px] font-[800] lg:text-[35px] md:text-[30px] md:leading-[46px] ">
        Insurance Simplified. <br class="hidden md:block"> #1 Insure-Tech Agency In The USA
      </h1>
      <p class="text-light-gry font-roboto md:py-[39px] py-[20px]">Simplifying the way you shop for insurance</p>
      <a href="#0" class="btn-shadow inline-block underline font-roboto text-sm px-[45px] py-[15px] bg-Orenge rounded text-white drop-shadow-[-1px_7px_10px_0px_rgb(209,2,2,50)] hover:bg-[#C00202] transition-all duration-500 hover:scale-90">GET A QUOTE</a>
    </div>
    <div class="flex items-baseline md:pt-36 xl:pt-0 justify-between">
      <div class="traficAnimation w-full md:w-[45%]">
          <Vue3Lottie :animationData="TraficAnimation" :height="200" :width="200" />
      </div>
      <div class="w-[10%]"></div>
      <div class="dogjson hidden md:block w-[45%] pl-[150px]">
          <Vue3Lottie :animationData="DogJSON1" :height="200" :width="200" />
      </div>
    </div>
  </div>
</template>

<script>
  import { Vue3Lottie } from 'vue3-lottie'
  import TraficAnimation from '../assets/img/Chandler_01_2807.json'
  import DogJSON1 from '../assets/img/Chandler_02_2807.json'

  export default {
    components: {
      Vue3Lottie,
    },
    data() {
      return {
        TraficAnimation,
        DogJSON1,
      }
    },
    
  }
</script>


<style scoped>

</style>
