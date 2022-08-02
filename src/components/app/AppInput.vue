<template>
  <div class="row mb-3">
    <label :for="id" class="col-sm-2 col-form-label">
      {{ label }}
    </label>
    <div class="col-sm-10">
      <input :id="id" type="text" class="form-control form-control-sm" :value="textValue" @input="$emit('update:textValue',$event.target.value)"
             required/>
      <div class="invalid-feedback">
        {{ validationMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    label: String,
    validationMessage: String,
    id: String,
    textValue:String
  },
  emits:["update:textValue"]
}
</script>

<style scoped>

</style>