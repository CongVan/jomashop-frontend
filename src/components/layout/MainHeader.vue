<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar__contact is-hidden-mobile">
      <div class="navbar-item">
        <span>{{ $t('home.chat-or-call') }}</span>
      </div>
    </div>
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="main-navbar"
        @click="handleOnClickBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <a class="navbar-item navbar-item__logo" href="/">
        <div class="navbar-brand__logo" />
        <img
          class="navbar-brand__logo--img"
          src="https://cdn.jomashop.com/skin/frontend/enterprise/joma/images/jomashop_logo_2019.png"
          alt="jomashop"
        />
      </a>
      <div class="navbar-item is-hidden-desktop">
        <a class="navbar-item__search-icon"> <b-icon icon="search" /> </a>
        <a class="navbar-item__cart-icon"> <i class="navbar-item__cart" /> </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <b-field class="navbar-item__search">
          <b-input
            :placeholder="$t('home.search-placeholder')"
            type="search"
            icon-right="search"
          >
          </b-input>
        </b-field>
        <b-dropdown aria-role="list" class="is-hidden-touch" hoverable>
          <button slot="trigger" class="button is-text">
            <span>{{ $t('account.my-account') }}</span>
          </button>

          <b-dropdown-item aria-role="listitem">
            {{ $t('buttons.login') }}
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">
            {{ $t('buttons.register') }}
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">
            {{ $t('account.whist-list') }}
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">
            {{ $t('account.track-order') }}
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          aria-role="menu"
          class="is-hidden-touch"
          position="is-bottom-left"
          hoverable
        >
          <button slot="trigger" class="button is-text">
            <div class="navbar-item__cart"></div>
          </button>
          <b-dropdown-item aria-role="menuitem">
            {{ $t('account.whist-list') }}
          </b-dropdown-item>
          <b-dropdown-item aria-role="menuitem">
            {{ $t('account.track-order') }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import { event } from '@/utils/event'

export default {
  name: 'MainHeader',
  methods: {
    handleOnClickBurger() {
      event.$emit('toggle.man-sidebar')
    },
  },
}
</script>

<style lang="sass" scoped>
.navbar
  +desktop
    margin-top: 57px
  &__contact
    margin-right: auto
    display: none
    +desktop
      display: flex
      width: 33%

  .navbar-item
    &__logo
      margin: 0 auto
    &__search
      margin: 0 2em 0 0
      /deep/input
        box-shadow: none
        border-radius: 0
        border-color: transparent
        border-bottom: 1px solid #000
    &__cart
      background: url(https://cdn.jomashop.com/skin/frontend/enterprise/joma/images/joma-sprite-ver-3.png) no-repeat -300px -343px;
      background-size: 387px 646px
      width: 28px
      height: 38px
      display: block
    &__search-icon
      margin-right: 10px
      .icon
        width: 28px
        height: 38px
  .navbar-end
    +desktop
      width: 33%

  .navbar-brand
    position: relative
    align-items: center
    justify-content: space-between
    +desktop
      width: 33%
      .navbar-item
        margin: 0 auto
    .navbar-burger
      margin-left: 0
      span
        left: calc(50% - 12px)
    &__logo
      width: 170px
      height: 28px
      background: url(https://cdn.jomashop.com/skin/frontend/enterprise/joma/images/joma-sprite-ver-6.png) no-repeat -68px -353px;
      background-size: 387px 646px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      margin-top: 4px
      &--img
        display: none
        max-width: 232px
        +desktop
          display: block
      +desktop
        display: none
  .navbar-burger
    span
      width: 23px
      height: 3px
      &:nth-child(1)
        top: calc(50% - 10px)
      &:nth-child(2)
        top: calc(50% - 2px)
      &:nth-child(3)
        top: calc(50% + 6px)
</style>
