<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <router-link to="/" class="navbar-brand col-md-3 col-lg-2 me-0 px-3" style="text-align: center">
      {{ $t('global.appName') }}
    </router-link>
    <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
            :aria-label="$t('global.menu')">
      <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100" type="text"
           :style="'text-align : '+$t('global.direction')"
           :placeholder="$t('global.search')"
           :aria-label="$t('global.search')"/>
    <div class="navbar-nav col-sm-auto">
      <select class="form-select col-sm-auto" v-model="$i18n.locale" @change="persistLang()">
        <option v-for="lang in languages" :key="`Lang${lang.code}`" :value="lang.code">
          {{ lang.value }}
        </option>
      </select>
    </div>
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">
          {{ $t('global.exit') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import EntityManager from "@/common/entityManager";

export default {
  name: "appHeader",
  data() {
    return {
      languages: [{
        code: 'fa',
        value: 'فارسی'
      }, {
        code: 'en',
        value: 'English'
      }]
    }
  },
  methods: {
    persistLang: function () {
      EntityManager.persist('selectedLang', this.$i18n.locale);
    }
  }
}
</script>

<style scoped>
</style>