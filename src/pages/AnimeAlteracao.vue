<template>
  <q-page>
  	<div class="q-pa-md form">

    	<div class="q-gutter-md q-pb-md input">
    		<q-input class="q-input" standout v-model="animeSelecionado.nome" label="Nome" />
    	</div>
    	<div class="q-gutter-md q-pb-md input">
    		<q-input class="q-input" standout v-model.number="animeSelecionado.episodio" label="Episodio" />
    	</div>
		<div class="q-gutter-md q-pb-md input">
    		<q-input class="q-input" standout v-model.number="animeSelecionado.temporada" label="Temporada" />
    	</div>
    	<div class="q-gutter-md q-pb-md input">
    		<q-btn color="dark" label="Alterar" @click="alterar()" />
    	</div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageAnimeAlteracao',
  data () {
  	return {
  		nome: '',
  		episodio: '',
		temporada: ''
  	}
  },
  methods: {
  	...mapActions('mainstore',['alterarAnime']),
  	async alterar () {
      await this.alterarAnime(this.animeSelecionado)
      this.$router.push('/anime')
  	}
  },
  computed: {
    ...mapGetters('mainstore', ['animeSelecionado'])
  }
}
</script>
<style>
.form {
	display: flex;
	flex-direction: column;
}

.input {
	display: flex;
	justify-content: center;
}
.q-input{
	width: 55%;
}
</style>