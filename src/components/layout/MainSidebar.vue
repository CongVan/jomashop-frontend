<template>
  <div>
    <div class="main-sidebar" :class="{ open: openSidebar }">
      <div v-show="!isShowSubMenu" class="main-sidebar__search">
        <b-field>
          <b-input
            :placeholder="$t('home.search-placeholder')"
            type="search"
            icon-right="search"
          >
          </b-input>
        </b-field>
      </div>
      <ul class="main-sidebar__parent" :class="{ 'show-sub': isShowSubMenu }">
        <li
          v-for="(menu, i) in menus"
          :key="i"
          class="main-sidebar__parent-item"
          @click.self.stop="showSubmenu(i)"
        >
          <a @click.stop="showSubmenu(i)">{{ menu.name }}</a>
          <div
            v-if="menu.items.length > 0"
            class="main-sidebar__submenu"
            :class="{ open: submenuIdVisible === i }"
          >
            <div
              class="main-sidebar__submenu-header"
              v-html="menu.name"
              @click.self.stop="showSubmenu(-1)"
            ></div>
            <div
              v-for="(sub, j) in menu.items"
              :key="j"
              class="main-sidebar__children"
              :class="{ 'has-child': sub.items.length > 0 }"
              @click.stop="showChildrenMenu($event)"
            >
              <a v-html="sub.name"></a>
              <ul v-if="sub.items.length > 0">
                <li v-for="(child, k) in sub.items" :key="k">
                  <a v-html="child"></a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="main-sidebar__overlay" @click="openSidebar = false"></div>
  </div>
</template>

<script>
import { event } from '@/utils/event'
import { data as categories } from '@/data/categories'

export default {
  name: 'MainSidebar',
  data() {
    return {
      openSidebar: false,
      isShowSubMenu: false,
      submenuIdVisible: -1,
    }
  },
  computed: {
    menus() {
      return categories
    },
  },
  created() {
    event.$on(
      'toggle.man-sidebar',
      () => (this.openSidebar = !this.openSidebar)
    )
  },
  methods: {
    showSubmenu(index = -1) {
      let isShow = true
      if (index === this.submenuIdVisible || index === -1) {
        isShow = false
      }
      this.submenuIdVisible = isShow ? index : -1
      this.isShowSubMenu = isShow
    },
    showChildrenMenu({ target }) {
      const container = target.tagName === 'DIV' ? target : target.parentNode
      if (!container) return
      const ul = container.querySelector('ul')
      if (!ul) return
      if (Array.from(ul.classList).includes('open')) {
        ul.classList.remove('open')
        container.classList.remove('expand')
      } else {
        ul.classList.add('open')
        container.classList.add('expand')
      }
    },
  },
}
</script>

<style lang="sass" scoped>
$sidebar-width: 280px
.main-sidebar
  position: fixed
  transform: translateX(-$sidebar-width)
  padding: 1em
  left: 0
  top: 0
  width: $sidebar-width
  z-index: 1000
  background: $white
  overflow: auto
  height: 100vh
  transition: transform 0.3s cubic-bezier(0.5,-0.1,1,1)

  &.open
    transform: translateX(0)
    ~.main-sidebar__overlay
      display: block
  &__parent
    position: relative
    transition: transform 420ms cubic-bezier(.14,1.11,.41,1.04)
    &.show-sub
      transform: translateX(-$sidebar-width)
  &__parent-item
      margin: 1.25em 0
      text-transform: uppercase
      &:after
        display: block
        width: 15px
        height: 0
        overflow: visible
        content: "\203A"
        font-size: 26px
        color: #666
        float: right
        line-height: 40px
        text-align: right
        margin-top: -8px
  &__submenu
    width: 100%
    display: none
    transition: transform 420ms cubic-bezier(.14,1.11,.41,1.04)
    margin-top: -30px
    &.open
      display: block
      position: absolute
      top: 0
      left: 0
      transform: translateX($sidebar-width)
  &__parent-item
    cursor: pointer
  &__submenu-header
    padding: 20px 33px 0
    text-align: center
    margin-bottom: 20px
    font-weight: 700
    &:before
      width: 15px
      height: 0
      content: "\2039"
      float: left
      margin-left: -22px
      font-size: 26px
      text-align: right
      color: #666
      margin-top: -8px
      transform-origin: 11px 22px
      transition: transform 350ms ease-in-out
      font-weight: 400
  &__children
    z-index: 1
    margin: 0.5em 0
    padding: 0.5em
    ul
      z-index: -1
      max-height: 0
      visibility: hidden
      background: #f9f9f9
      transition: max-height 250ms cubic-bezier(.64,0,.13,1),visibility 100ms ease-out,transform 150ms ease-out 10ms
      &.open
        max-height: 1000px
        visibility: visible
    li
      padding: 0.5em
      text-transform: uppercase
      font-size: 0.9em
    &.has-child
      &:before
        width: 15px
        height: 0
        content: "+"
        float: right
        margin-right: 20px
        font-size: 22px
        text-align: right
        color: #666
    &.expand
      &:before
        content: '-'
  &__overlay
    position: fixed
    display: none
    top: 0
    left: 0
    right: 0
    z-index: 999
    width: 100%
    height: 100%
    min-height: 100vh
    background: rgba(#fff,0.5)
    transition: display 0.2s ease
</style>
