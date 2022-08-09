
<template>
  <div class="md:bg-[#F7F7F7] py-10 px-5 -mt-[21px] relative">
    <Carousel :settings='settings' :breakpoints='breakpoints' :wrap-around="true" :autoplay="3000">
      <Slide v-for="item in boardfields" :key="item.url">
        <div class='carousel__item opacity-60 hover:opacity-100 transition-all'>
          <img class="w-[90%] m-auto block md:w-[150px] lg:w-[200px] pointer-events-none" :src='item.url' alt="">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default defineComponent({
  name: 'ExamplePagination',
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
     boardfields: [
      { url: 'public/img/Nationwide-Insurance-Logo.svg' },
      { url: 'public/img/olympus.svg' },
      { url: 'public/img/peoples-trust.svg' },
      { url: 'public/img/Plymouth_Rock_Assurance.svg' },
      { url: 'public/img/progressive.svg' },
      { url: 'public/img/Safeco-Insurance-Logo.svg' },
      { url: 'public/img/safeport.svg' },
      { url: 'public/img/sagesure.svg' },
      { url: 'public/img/security-first.svg' },
      { url: 'public/img/st-johns.svg' },
      { url: 'public/img/swyfft.svg' },
      { url: 'public/img/tower-hill.svg' },
      { url: 'public/img/Travelers-logo.svg' },
      { url: 'public/img/TypTap.svg' },
      { url: 'public/img/universal.svg' },
      { url: 'public/img/Universal-North-America-Logo.svg' },
      { url: 'public/img/upc.svg' },
      { url: 'public/img/velocity.svg' },
      { url: 'public/img/wellington-logo-lg.svg' },
    ],
    settings: {
      itemsToShow: 2,
      snapAlign: 'left',
      touchDrag: false,
    },
    breakpoints: {
      576: {
        itemsToShow: 3,
        snapAlign: 'left',
      },
      768: {
        itemsToShow: 4,
        snapAlign: 'left',
      },
      1200: {
        itemsToShow: 5,
        snapAlign: 'left',
      },
      1600: {
        itemsToShow: 6,
        snapAlign: 'left',
      },
      1800: {
        itemsToShow: 8,
        snapAlign: 'left',
      },
    },
  }),
});
</script>