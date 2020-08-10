<template>
  <section>
    <b-carousel
      v-model="carousel"
      :arrow="true"
      :arrow-both="true"
      :arrow-hover="false"
      :indicator="false"
      :animated="animated"
      :has-drag="drag"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :pause-info="pauseInfo"
      :pause-info-type="pauseType"
      :interval="interval"
      :repeat="repeat"
    >
      <b-carousel-item v-for="(c, i) in carousels" :key="i">
        <div class="has-text-centered">
          <h1 class="title">{{ c.title }}</h1>
        </div>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: 'NewsBanner',
  data() {
    return {
      carousel: 0,
      animated: 'slide',
      drag: true,
      autoPlay: false,
      pauseHover: true,
      pauseInfo: false,
      repeat: true,
      pauseType: 'is-primary',
      interval: 3000,
      carousels: [
        { title: 'Learn more about our response to COVID-19.' },
        { title: 'DOORBUSTERS | LIMITED QUANTITIES' },
        { title: 'WEEKLY SALE EVENTS | UP TO 80% OFF!', color: 'info' },
        {
          title:
            'FREE NEXT DAY AIR DELIVERY on orders over $1000. Use code  FREENDA',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="sass" scoped>
.carousel
  min-height: 40px
  height: 40px
  background: $black
  color: $white
  /deep/h1
    color: $white
    font-size: 1em
    line-height: 40px
  /deep/.carousel-arrow
    display: none
    +desktop
      display: block
</style>
