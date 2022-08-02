<template>
  <div class="card">
    <div class="card-body">
      <AppTable>
        <template v-slot:tableHeader>
          <slot name="tableHeader"/>
        </template>
        <template v-slot:tableBody>
          <slot name="tableBody"/>
        </template>
      </AppTable>
    </div>
    <div class="card-footer">
      <AppPaging :next-page="nextPage" :page="page" :previous-page="previousPage" :set-page="setPage"
                 :set-page-size="setPageSize" :total-pages="totalPages"/>
    </div>
  </div>
</template>

<script>
import AppTable from "@/components/app/AppTable";
import AppPaging from "@/components/app/AppPaging";

export default {
  name: "AppPagingTable",
  components: {AppPaging, AppTable},
  props: {
    page: Number,
    totalPages: Number,
    nextPage: Function,
    previousPage: Function,
    setPage: Function,
    setPageSize: Function
  }
}
</script>

<style scoped>

</style>