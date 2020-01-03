<template>
<div>
    <div class="container">
        <p v-if="profil == null">Anda belum login, klik <nuxt-link to="/login">disini</nuxt-link> untuk login</p>
        <p v-else>{{profil}}</p>
    </div>
</div>
</template>
<script>
export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        const user = store.getters.userLogin
        if (user == null) {
            return {profil: null}
        }else {
            return {profil: user}
        } 
    },
}
</script>