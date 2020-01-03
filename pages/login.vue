<template>
<div class="container">
    <div class="columns is-multiline is-centered">
        <div class="column is-6">

            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <b-field label="Email">
                            <b-input placeholder="Email" icon="email" v-model="email"></b-input>
                        </b-field>
                        <b-field label="Username" v-if="registerOn">
                            <b-input placeholder="Username" icon="account" v-model="username"> </b-input>
                        </b-field>
                        <b-field label="Password">
                            <b-input type="password" placeholder="Password" icon="key" password-reveal v-model="password"></b-input>
                        </b-field>

                        <template v-if="registerOn == false">
                            <div>
                                <p>Anda tidak punya akun? <a @click="toggleAction()">Daftar sekarang</a></p>
                                <b-button type="is-success" @click="exeLogin()">Masuk</b-button>
                            </div>
                        </template>
                        <template v-else>
                            <div>
                                <p>Sudah punya akun? <a @click="toggleAction()">Login disini</a></p>
                                <b-button type="is-info" @click="exeRegister()">Daftar</b-button>        
                            </div>
                        </template>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
    </section>
</div>
</template>
<script>
export default {
    data: ()=>({
        registerOn: false,
        email: '',
        password: '',
        username: '',
    }),
    methods: {
        clearInput () {
            this.email = '',
            this.password = '',
            this.username = ''
        },
        toggleAction() {
            this.registerOn = !this.registerOn
            this.clearInput()
        },
        toast(message, type) {
            this.$buefy.toast.open({
                duration: 2000,
                message: message,
                position: 'is-bottom',
                type: type
            })
        },
        exeLogin() {
            if (this.email == ""  || this.password == "") {
                this.toast('Email / Password tidak valid', 'is-danger')
            }else {
                const obj = {
                    email: this.email,
                    username: this.username
                }
                this.$store.dispatch('setUserLogin', obj)
                this.toast('Berhasil login sebagai ' + this.email, 'is-primary')
                this.$router.push('/')
            }
        },
        exeRegister() {
            if (this.email == "" || this.username == "" || this.password == "" ) {
                this.toast('Data tidak boleh kosong', 'is-danger')
            }else {
                this.exeLogin()
            }
        }
    }
}
</script>