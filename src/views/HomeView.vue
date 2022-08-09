<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue';
import ClientSlider from '@/components/ClientSlider.vue';
import Products from '@/components/products.vue';
import WhyChoose from '@/components/WhyChoose.vue';
import Pricing from '@/components/Pricing.vue';
import Testimonials from '@/components/Testimonials.vue';
import Footer from '@/components/Footer.vue';
</script>


<template>
  <main>
    <Header />
    <HelloWorld />
    <ClientSlider />
    <Products />
    <WhyChoose />
    <Pricing />
    <Testimonials />
    <Footer/>
    <!-- <router-link to="/about">Go to Foo</router-link> -->   
  </main>
</template>
