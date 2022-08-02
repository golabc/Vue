<template>
  <div :dir="$t('global.direction')">
    <AppHeader/>
    <div class="container-fluid">
      <div class="row">
        <AppNav/>
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <br>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import AppHeader from "@/components/app/AppHeader";
import AppNav from "@/components/app/AppNav";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav
  }
}</script>
<style>
</style>