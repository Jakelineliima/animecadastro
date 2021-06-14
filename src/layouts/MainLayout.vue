<template>
  <q-layout view="lHh Lpr lFf">
   <q-header class="text-dark bg-white fixed" height-hint="98">
      <q-toolbar class="q-mt-mdquas menu">
        <q-toolbar-title>
          <a href="">
           <img class="logo" src="../assets/logo.png" alt="">
          </a>
        </q-toolbar-title>

        <q-btn-dropdown icon="menu" color="dark" class="menuburgue">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link class="text-dark links q-mx-sm btn" to="/animecad"
                  >Animes Cadastrar</router-link
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link class="text-dark links q-mx-sm btn" to="/anime"
                  >Lista de animes</router-link
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link
                  class="text-dark links q-mx-sm btn"
                  to="/login"
                  >Login</router-link
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link
                  class="text-dark links q-mx-sm btn"
                  to="/criarconta"
                  >Criar conta</router-link
                >
              </q-item-section>
            </q-item>
   
          </q-list>
        </q-btn-dropdown>

        <div class="q-gutter-y-md menubtns">
          <q-tabs>
            <!--Codigo Novo-->

            <q-route-tab
              class=" links q-mx-sm"
              to="/animecad"
              label="ANIMES CADASTRAR"
            />
            <hr/>
             <q-route-tab
              class=" links q-mx-sm"
              to="/anime"
              label="Lista de animes"
            />
      

            <q-btn-dropdown color="dark" label="Entrar">
            <q-route-tab
              class=" links q-mx-sm"
              to="/criarconta"
              label="CRIAR CONTA"
            />

            <q-route-tab
              class="links q-mx-sm"
              to="/login"
              label="Login"
            />
            </q-btn-dropdown>
          </q-tabs>
        </div>



      </q-toolbar>
    </q-header>


    <q-page-container>
      <transition
        name="transitions"
        enter-active-class="animated slideInRight"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view class="layout-view"></router-view>
      </transition>
    </q-page-container>

    <footer>
      <h6 style="text-align: center;">Todos os direitos reservados</h6>
    </footer>
  </q-layout>
</template>
<style>
.logo{
	width: 12%;
}
.menuburgue {
  display: none;
}

@media screen and (max-width: 470px) {
  .menuburgue {
    display: block;
    background-color: black;
  }
  .menubtns{
    display: none;
  }
  .logo{
    width: 50%;
  }
  .links{
    text-decoration: none;
  }
}
</style>

