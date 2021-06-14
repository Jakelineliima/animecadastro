<template>
<q-page class="back row justify-center items-center">
  <div class="column">
    <div class="row">
    <div class="back">
      <q-form  class="q-gutter-md justify-center">
         <h5 class="text-h5 text-white">Aproveite sua agenda de animes</h5>
        <div class="form">
          <q-input
            class="input"
            filled
            v-model="username"
            type="text"
            label="Digite nome de usuário*"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Digite um nome válido!',
            ]"
          />

          <q-input
            class="input"
            filled
            type="password"
            v-model="password"
            label="Crie uma senha *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Digite uma senha!',
            ]"
          />
        </div>
        <div class="q-gutter-md q-pb-md">
          <q-btn

            color="primary"
            label="Criar conta"
            @click="efetuarCadastro()"
          />
        </div>
      </q-form>
    </div>
  </div>
  </div>
</q-page>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      
      
    }
  },
  methods: {
    ...mapActions('mainstore', ['adicionarConta']),    
    async efetuarCadastro() {
       await this.adicionarConta({
        username: this.username,
        password: this.password,
        roles: 'ADMIN',
        ativo: true

        
      });
    }
  },
  

}
</script>
<style lang="stylus">
.titulo {
  color: rgb(25, 118, 210);
  font-weight: bold;
  margin: 69px 0 14px;
}

.btncriar {
  width: 16%;
  background-color: black;
}

.entrar {
  margin: 30px auto 65px;
}

.formulario {
  text-align: center;
  display: contents;
}

.input {
  width: 345px;
  border-radius: 12px;
  margin: 9px auto;
   background-color: #FFFF;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back{
  background-image: url('../assets/nobara.jpg');
  width: 100%;
}
</style>
