<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover" style="text-align: center">
      <thead class="table-dark">
      <tr>
        <slot name="tableHeader"/>
      </tr>
      </thead>
      <tbody>
      <slot name="tableBody"/>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AppTable"
}
</script>

<style scoped>

</style>