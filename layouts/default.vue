<template>
  <div>

    <b-navbar shadow spaced fixed-top close-on-click>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                TEL-SHOP
            </b-navbar-item>
        </template>
        <template slot="start">
            <nuxt-link class="navbar-item" slot="trigger" role="button" to="/">Beranda</nuxt-link>
        </template>

        <template slot="end">
          <div class="buttons">
            <b-button v-if="userLogin == null" tag="router-link" to="/login" type="is-success">Login</b-button>
            <template v-else>
              <b-button tag="router-link" to="/profil" type="is-primary">{{userLogin.email}}</b-button>
              <b-button @click="exeLogout()" type="is-danger">Keluar</b-button>
            </template>
          </div>
        </template>
    </b-navbar>

    <div class="mContent">
      <nuxt />
    </div>

    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>

    <!-- <section class="main-content columns" style="margin-top: 15px;"> -->
      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside> -->
    <!-- </section> -->

  </div>
</template>

<script>
export default {
  data: ()=> ({
    items: [
      {
        title: 'Home',
        icon: 'home',
        to: { name: 'index' }
      },
    ]
  }),
  computed: {
    userLogin() {
      return this.$store.getters.userLogin
    },
    isLoading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    toast(message, type) {
        this.$buefy.toast.open({
            duration: 2000,
            message: message,
            position: 'is-bottom',
            type: type
        })
    },
    exeLogout() {
      this.$store.dispatch('setUserLogin', null)
      this.toast('Berhasil Logout', 'is-primary')
      this.$router.push('/')
    }
  }
}
</script>
<style>
/* * {
  font-family: Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
} */
  .navbar-menu {
    padding: 10px !important;
  }

  .mContent {
    padding-top: 50px !important;
  }
  @media only screen and (max-width: 1024px) {
    .mContent {
      padding-top: 70px !important;
      padding-right: 10px !important;
      padding-left: 10px !important;
    }
  }

  /* .navbar-start, .navbar-end {
    margin: 10px 0px !important;
  } */
</style>