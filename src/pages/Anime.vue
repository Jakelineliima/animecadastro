<template>
  <q-page>

    <q-item-label header style="text-align: center">
      <h4>Seus animes salvos</h4>
    </q-item-label>
    <div class="card">
    <div class="q-pa-md q-gutter-md " v-for="anime in Animes" :key="anime.id"> 
      <q-card class="my-card" style="max-width: 300px;">
      <q-card-section color="purple-2">
        <div class="text-h6">Titulo:  {{ anime.nome }}</div>
        <div class="text-subtitle2">Episodio: {{ anime.episodio }}</div>
        <div class="text-subtitle2">Temporada: {{ anime.temporada }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical class="btns">

              <q-btn size="18px" flat dense round icon="edit" @click="alterar(anime.id)" />
              <q-btn size="18px" flat dense round icon="delete" @click="remover(anime.id)" />

      </q-card-actions>
    </q-card>
        
         
    </div>
    </div>
    <q-btn
      round
      color="dark"
      class="fixed"
      style="right: 18px; bottom: 18px"
      @click="abrirCadastroAnime()"
    >
      <q-icon name="add" />
    </q-btn> 
  </q-page>
</template>

<style>
.card{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btns{
      display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'PageAnime',
  methods: {
    ...mapActions('mainstore', ['obterAnimes','selecionarAnime','removerAnime']),
    abrirCadastroAnime () {
      this.$router.push('/animecad')
    },
    alterar (animesId) {
      this.selecionarAnime(animesId)
      this.$router.push('/animesalteracao')
    },
    remover (animesId) {
      this.$q.dialog({
        title: 'Confirma',
        message: 'Tem certeza que deseja excluir o anime?',
        cancel: {
          label: 'Cancelar'
        },
        ok: {
          label: 'OK'
        },
        persistent: true
      }).onOk(() => {
        this.removerAnime(animesId)
        Notify.create({ color: 'positive', position: 'top', message: 'Anime Excluído!'})  
      }).onCancel(() => {
        
      })
    }
  },
  computed: {
    ...mapGetters('mainstore', ['Animes'])
  },
  created () {
    this.obterAnimes() 

    this.timer = setTimeout(() => {
      this.$q.loading.hide()
      this.timer = void 0
    }, 1000)

  }
}
</script>