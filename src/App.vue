<template>
  <ion-app>
    <Menu></Menu>
    <ion-router-outlet id='main-content'/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from '@/components/MenuPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  }
});
</script>