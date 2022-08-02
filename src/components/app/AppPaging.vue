<template>
  <div class="row">
    <div class="col-sm-11">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled':page===1}" v-on:click="this.goPreviousPage()">
          <a class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="loadedPage in getPageList" :class="{'active':loadedPage===page}"
            :key="loadedPage">
          <a class="page-link" v-on:click="this.setPage(loadedPage)">
            {{ loadedPage }}
          </a>
        </li>
        <li class="page-item" :class="{'disabled':page===totalPages}" v-on:click="this.goNextPage()">
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-sm-1">
      <select class="form-select" v-model="size" v-on:change="this.setPageSize(size)">
        <option v-for="size in sizeList" :key="size">{{ size }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import Option from "@/common/option";
import EntityManager from "@/common/entityManager";

export default {
  name: "AppPaging",
  data() {
    return {
      size: EntityManager.findOne('defaultPageSize') || 20,
      sizeList: Option.PAGE_SIZE_LIST,
    }
  },
  props: {
    page: Number,
    totalPages: Number,
    previousPage: Function,
    setPage: Function,
    nextPage: Function,
    setPageSize: Function
  },
  computed: {
    getPageList() {
      let pageList = [];
      let counter = 1;
      while (this.totalPages >= counter) {
        pageList.push(counter);
        counter++;
      }
      return pageList;
    }
  },
  methods: {
    goNextPage: function () {
      if (this.page !== this.totalPages) {
        this.nextPage();
      }
    },
    goPreviousPage() {
      if (this.page !== 1) {
        this.previousPage();
      }
    }
  }
}
</script>

<style scoped>

</style>