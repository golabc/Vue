<template>
  <form :class="this.validationClass" @submit.prevent="this.persistForm" :id="formId">
    <div class="card">
      <div class="card-body">
        <slot name="formBody"/>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-sm btn-primary" @click="this.validateForm()">
          {{ $t('global.submit') }}
        </button>
        <button type="button" class="btn btn-sm btn-primary" v-on:click="this.reset()">
          {{ $t('global.reset') }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AppForm",
  data() {
    return {
      formId: Math.random(),
      validationClass: "has-validation"
    }
  },
  props: {
    save: Function,
    resetForm: Function
  },
  methods: {
    validateForm: function () {
      this.validationClass = "was-validated"
    },
    persistForm: function () {
      this.save();
      this.validationClass = "has-validation";
    },
    reset: function (){
      this.resetForm();
      this.validationClass = "has-validation";
    }
  }
}
</script>

<style scoped>

</style>