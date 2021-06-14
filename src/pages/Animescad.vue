<template>
  <q-page class="divpri">
	  
  	<div class="q-pa-md cards" style="max-width: 300px">
		  <h6>Cadastre seus animes preferidos</h6>
    	<div class="q-gutter-md q-pb-md">
    		<q-input class="input" outlined v-model="nome" label="Nome" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-input class="input" outlined v-model="episodio" label="Episodio" />
    	</div>
		<div class="q-gutter-md q-pb-md">
    		<q-input class="input" outlined v-model="temporada" label="Temporada" />
    	</div>
    	<div class="q-gutter-md q-pb-md">
    		<q-btn color="dark" label="Cadastrar anime" @click="cadastrarAnime()" />
    	</div>
    </div>
  </q-page>
</template>
<style>
.divpri{
	display: flex;
	justify-content: center;
}
.cards{
	width: 70%;
	text-align: center;
}
@media screen and (max-width: 470px) {
 .input{
	width: 100%;
 }
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
  	return {
  		nome: '',
  		episodio: '',
		temporada: ''
  	}
  },
  methods: {
  	...mapActions('mainstore',['adicionarAnime']),
  	async cadastrarAnime () {
  		await this.adicionarAnime({ nome: this.nome, episodio: this.episodio, temporada: this.temporada  })
  		this.$router.push('/anime')
  	}
  }
}
</script>
