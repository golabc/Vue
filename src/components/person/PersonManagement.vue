<template>
  <div class="card">
    <h5 class="card-header">
      {{ $t('person.cardHeader') }}
    </h5>
    <div class="card-body">
      <div class="card-text">
        <AppForm :save="save" :reset-form="resetForm">
          <template v-slot:formBody>
            <input type="text" class="form-control form-control-sm" hidden
                   v-model="person.id"/>
            <AppInput :id="'firstName'" :label="$t('person.firstName')"
                      v-model:textValue="person.firstName"
                      :validation-message="$t('person.firstNameValidation')"/>
            <AppInput :id="'lastName'" :label="$t('person.lastName')"
                      v-model:textValue="person.lastName"
                      :validation-message="$t('person.lastNameValidation')"/>
            <AppInput :id="'nationalCode'" :label="$t('person.nationalCode')"
                      v-model:textValue="person.nationalCode"
                      :validation-message="$t('person.nationalCodeValidation')"/>
          </template>
        </AppForm>

        <br/>
        <AppPagingTable :next-page="nextPage" :page="page" :previous-page="previousPage" :set-page="setPage"
                        :set-page-size="setPageSize" :total-pages="totalPages">
          <template v-slot:tableHeader>
            <th>
              {{ $t('person.id') }}
            </th>
            <th>
              {{ $t('person.firstName') }}
            </th>
            <th>
              {{ $t('person.lastName') }}
            </th>
            <th>
              {{ $t('person.nationalCode') }}
            </th>
            <th style="width: 5%">
              {{ $t('global.operation') }}
            </th>
            <th style="width: 5%">
              {{ $t('global.operation') }}
            </th>
          </template>
          <template v-slot:tableBody>
            <tr v-for="loadedPerson in personList" :key="loadedPerson.id">
              <td>{{ loadedPerson.id }}</td>
              <td>{{ loadedPerson.firstName }}</td>
              <td>{{ loadedPerson.lastName }}</td>
              <td>{{ loadedPerson.nationalCode }}</td>
              <td>
                <button type="button" class="btn btn-sm btn-primary"
                        v-on:click="this.findOne(loadedPerson.id)">
                  {{ $t('global.update') }}
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-sm btn-danger"
                        v-on:click="this.delete(loadedPerson.id)">
                  {{ $t('global.delete') }}
                </button>
              </td>
            </tr>
          </template>
        </AppPagingTable>
      </div>
    </div>
  </div>
</template>


<script>
import EntityManager from '../../common/entityManager';
import {PersonService} from "@/service/PersonService";
import AppPagingTable from "@/components/app/AppPagingTable";
import AppForm from "@/components/app/AppForm";
import AppInput from "@/components/app/AppInput";
import Util from "@/common/Util";

const personService = new PersonService();

export default {
  name: "PersonManagement",
  components: {AppInput, AppForm, AppPagingTable},
  data() {
    return {
      person: {},
      personList: [],
      page: 1,
      size: EntityManager.findOne('defaultPageSize') || 20,
      totalPages: 1
    }
  },
  methods: {
    findAll: async function () {
      personService.findAll(this.page, this.size).then(this.onFindAllResponse);
    },
    onFindAllResponse: function (response) {
      this.personList = response.content;
      this.totalPages = response.totalPages;
      if (this.totalPages < this.page) {
        this.page = this.totalPages;
        this.findAll();
      }
    },
    save: function () {
      personService.save(this.person).then(this.onSaveResponse);
    },
    onSaveResponse: function () {
      this.findAll();
      this.resetForm();
    },
    findOne: function (id) {
      personService.findOne(id).then(this.onFindOneSuccess);
    },
    onFindOneSuccess: function (response) {
      this.person = response;
      this.personList = Util.updateList(this.personList, response);
    },
    delete: function (id) {
      personService.remove(id).then(this.onDeleteSuccess);
    },
    onDeleteSuccess: function () {
      this.findAll();
    },
    setPage: function (page) {
      this.page = page;
      this.findAll();
    },
    setPageSize: function (size) {
      EntityManager.persist("defaultPageSize", size);
      this.size = size;
      this.findAll();
    },
    nextPage: function () {
      this.setPage(this.page + 1);
    },
    previousPage: function () {
      this.setPage(this.page - 1);
    },
    resetForm: function () {
      this.person = {};
    }
  },
  mounted() {
    this.findAll();
  }
}
</script>
<style scoped>
</style>