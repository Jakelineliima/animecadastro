<template>
  <q-page class="back row justify-center items-center">
    <div class="column">
      
        

      <div class="row">
        <div class="q-pa-md">
          <h5 class="text-h5 text-white">Faça Login para aproveitar</h5>
       
            <q-card-section>
              <div class="q-gutter-md q-pb-md">
                <q-input class="input" outlined v-model="usuario" label="Login" />        
              </div>
              <div class="q-gutter-md q-pb-md">
                <q-input class="input" outlined v-model="senha" label="Senha" type="password" />
              </div>
              <div class="q-gutter-md q-pb-md">
                <q-btn class="input" color="dark" label="Login" @click="efetuarLogin()" />
              </div> 
              <div class="q-gutter-md q-pb-md" v-if="token">
                <q-btn class="input" color="dark" label="Sair" @click="efetuarLogout()" />
              </div> 
            </q-card-section>
        
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      usuario: '',
      senha: ''
    }
  },
  methods: {
    ...mapActions('mainstore', ['login','logout','carregarToken']),    
    async efetuarLogin () {
      await this.login({ username: this.usuario, password: this.senha })
      await this.carregarToken()
      if (this.token) {
        this.$router.push('/anime')
      }
    },
    efetuarLogout () {
      this.logout()
    }
  },
  computed: {
    ...mapGetters('mainstore', ['token'])
  },
  created () {
    this.$q.loading.show({
      message: 'Carregando...'
    })

    // hiding in 2s
    this.timer = setTimeout(() => {
      this.$q.loading.hide()
      this.timer = void 0
    }, 1000)
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
.back{
  background-image: url('../assets/nobara.jpg');
  width: 100%;
}
.input{
  background-color: #FFFF;
}
</style>
