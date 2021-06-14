import { LocalStorage, Notify } from "quasar";
import { api } from "boot/axios";

const state = {
  token: "",
  produtos: "",
  Animes: [],
  Contacriar: [],
  animeSelecionado: "",
  usuarioSelecionado: "",
  verUsuario: ""
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  SET_ANIMES(state, Animes) {
    state.Animes = Animes;
  },
  SELECIONAR_ANIME(state, animesId) {
    const index = state.Animes.findIndex(p => p.id === animesId);
    state.animeSelecionado = state.Animes[index];
  },
  ADICIONAR_ANIME(state, Animes) {
    state.Animes.push(Animes);
  },
  ALTERAR_ANIME(state, Animes) {
    const index = state.Animes.findIndex(p => p.id === animes.id);
    state.Animes.set(index, Animes);
  },
  REMOVER_ANIME(state, animesId) {
    const index = state.Animes.findIndex(p => p.id === animesId);
    state.Animes.splice(index, 1);
  },

  //CONTA
  ADICIONAR_CONTA(state, Usuario) {
    state.Contacriar.push(Usuario);
  },
  SET_CONTA(state, Contacriar) {
    state.Contacriar = Contacriar;
  },
  VER_CONTA(state, UsuarioId) {
    const index = state.Contacriar.findIndex(p => p.id === UsuarioId);
    state.verUsuario = state.Contacriar[index];
  },
  SELECIONAR_CONTA(state, UsuarioId) {
    const index = state.Contacriar.findIndex(p => p.id === UsuarioId);
    state.usuarioSelecionado = state.Contacriar[index];
  },
  ALTERAR_CONTA(state, usuario) {
    const index = state.Contacriar.findIndex(p => p.id === usuario.id);
    state.Contacriar.set(index, usuario);
  },
  REMOVER_CONTA(state, UsuarioId) {
    const index = state.Contacriar.findIndex(p => p.id === UsuarioId);
    state.Contacriar.splice(index, 1);
  }
};

const actions = {
  async login({ commit }, usuario) {
    let response = await api.post("/login", usuario, {
      headers: { "Content-Type": "application/json" }
    });
    if (response) {
      await LocalStorage.set("token", response.data.token);
      await commit("SET_TOKEN", response.data.token);
      api.interceptors.request.use(config => {
        if (response.data.token) {
          config.headers["Authorization"] = `Bearer ${response.data.token}`;
          config.headers["Content-Type"] = "application/json";
        }
        return config;
      });
      api.interceptors.response.use(response => {
        return response;
      });
      Notify.create({ color: "positive", message: "Seja bem vindo! " });
    }
  },
  async logout({ commit }) {
    await LocalStorage.remove("token");
    await commit("SET_TOKEN", null);
  },
  async carregarToken({ commit }) {
    let token = await LocalStorage.getItem("token");
    await commit("SET_TOKEN", token);
    api.interceptors.request.use(config => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    });
    api.interceptors.response.use(response => {
      return response;
    });
  },
  adicionarAnime({ commit }, anime) {
    api.post("/animecad", anime).then(response => {
      commit("ADICIONAR_ANIME", response.data);
      Notify.create({
        color: "positive",
        position: "lefth",
        message: "Anime Cadastrado!"
      });
    });
  },
  obterAnimes({ commit }) {
    api.get("/animecad").then(response => {
      commit("SET_ANIMES", response.data);
    });
  },
  selecionarAnime({ commit }, animesId) {
    commit("SELECIONAR_ANIME", animesId);
  },
  alterarAnime({ commit }, anime) {
    api.put("/anime/" + anime.id, anime).then(response => {
      commit("ALTERAR_ANIME", response.data);
    });
  },
  removerAnime({ commit }, animesId) {
    api.delete("/anime/" + animesId).then(response => {
      commit("REMOVER_ANIME", animesId);
    });
  },
  //CONTA
  adicionarConta({ commit }, Conta) {
    api.post("/criarconta", Conta).then(response => {
      commit("ADICIONAR_CONTA", response.data);
      Notify.create({
        color: "positive",
        position: "top",
        message: "Seu conta foi criada com sucesso."
      });
    });
  },
  obterUsuario({ commit }) {
    api.get("/anime").then(response => {
      commit("SET_CONTA", response.data);
    });
  },
  verVaga({ commit }, UsuarioId) {
    commit("VER_CONTA", UsuarioId);
  },

  selecionarUsuario({ commit }, UsuarioId) {
    commit("SELECIONAR_CONTA", UsuarioId);
  },
  alterarUsuario({ commit }, usuario) {
    api.put("/usuariolog/" + usuario.id, usuario).then(response => {
      commit("ALTERAR_CONTA", response.data);
    });
  },
  removerUsuario({ commit }, UsuarioId) {
    api.delete("/usuariolog/" + UsuarioId).then(response => {
      commit("REMOVER_CONTA", UsuarioId);
    });
  }
};

const getters = {
  token: state => state.token,
  Animes: state => state.Animes,
  animeSelecionado: state => state.animeSelecionado,
  Contacriar: state => state.Contacriar
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
