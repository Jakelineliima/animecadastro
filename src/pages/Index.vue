<template>
  <q-page class="flex flex-center">

    <div class="tst">
        <img class="img" src="../assets/nobara.jpg">
          <div class="absolute-full text-subtitle2 flex ">
            
            <h4 class=" text-uppercase">Salve seus animes preferidos</h4>
          </div>
     
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style>

.img{
  width: 100%;
  
}

h4{
 color: #ffff;
margin: 40px auto;
background-color: #00000078;
height: 70px;
border-radius: 10px;
}
@media screen and (max-width: 470px) {
  h4{

height: 88px;

}
.tst{
  margin: 0 auto auto;
}
}
</style>
