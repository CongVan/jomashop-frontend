<template>
  <div>
    <news-banner />
    <main-header />
    <main-sidebar />
    <nuxt />
  </div>
</template>

<script>
import MainHeader from '@/components/layout/MainHeader'
import NewsBanner from '@/components/layout/NewsBanner'
import MainSidebar from '@/components/layout/MainSidebar'
export default {
  components: { MainSidebar, NewsBanner, MainHeader },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>
