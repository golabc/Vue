<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style="overflow: auto;">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="file"></span>
              {{ $t('global.desktop') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="shopping-cart"></span>
              {{ $t('global.bag') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="users"></span>
              {{ $t('global.users') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="bar-chart-2"></span>
              {{ $t('global.reports') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="layers"></span>
              {{ $t('global.mails') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/person" class="nav-link">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="user"></span>
              {{ $t('global.persons') }}
            </button>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="layers"></span>
              {{ $t('global.mails') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="layers"></span>
              {{ $t('global.mails') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="layers"></span>
              {{ $t('global.mails') }}
            </button>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <button class="btn btn-sm btn-dark"
                    style="width: 100%" :style="'text-align : '+$t('global.align')">
              <span data-feather="layers"></span>
              {{ $t('global.mails') }}
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav"
}
</script>

<style scoped>

</style>