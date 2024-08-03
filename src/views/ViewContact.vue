<template>

  <div>
   <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold"> View Contact</p>
          <p class="fst-italic">
              Contact Details 
            </p>
        </div>
      </div>
    </div>

    <!-- Sipinner -->
 <div v-if="loading">
  <div class="container">
    <div class="row">
      <div class="col">
        <Spinner/>
      </div>
    </div>
  </div>
 </div>

 <!-- Error Message -->
 <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold"> {{ errorMessage  }}</p>
        </div>
      </div>
    </div>
 </div>


    <div class="container" v-if="!loading && isDone()">
        <div class="row align-items-center">
            <div class="col-md-4">
               <img :src="contact.photo" alt="" class="contact-img-big"> 
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                <li class="list-group-item">Name: <span class="fw-bold"> {{contact.name}} </span></li>
                <li class="list-group-item">Email: <span class="fw-bold"> {{contact.email}} </span></li>
                <li class="list-group-item">Mobile: <span class="fw-bold"> {{contact.mobile}} </span></li>
                <li class="list-group-item">compagny: <span class="fw-bold"> {{contact.compagny}} </span></li>
                <li class="list-group-item">Title: <span class="fw-bold">{{contact.title}} </span></li>
                <li class="list-group-item">Group: <span class="fw-bold"> {{group.name}} </span></li>
              </ul>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <router-link to="/" class="btn btn-success">
                <i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
            </div>
        </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>

import { ContactService } from '../services/ContactService'
import {onMounted, reactive, ref} from "vue";


const  contactId = ref<string | null>(null);
const loading = ref<boolean>(false);
const  contact = reactive<Contact>({
  id: '',
  name: '',
  photo: '',
  email: '',
  mobile: '',
  compagny: '',
  title: '',
  groupId: ''
});
const  group = ref<any>(null);
const  errorMessage = ref<string | null>(null);


onMounted( async () => {
  if(contactId.value !== null){
    try{
      loading.value =true
      let response = await ContactService.getContact(contactId.value)
      let groupResponse = await ContactService.getGroup(response.data)
      contact.value = response.data
      group.value = groupResponse.data
      loading.value = false
    }
    catch(error){
      //errorMessage.value = error
      loading.value = false
    }
  }
});

const  isDone =  () =>  {
  return Object.keys(contact).length > 0 && Object.keys(group).length > 0
}

  // export default {
  //     name: "ViewContact",
  //     data(){
  //       return {
  //         contactId: this.$route.params.contactId,
  //         loading:  false,
  //         contact: {},
  //         errorMessage: null,
  //         group: {}
  //       }
  //     },
  //
  //     created: async function(){
  //       try{
  //         this.loading =true
  //         let response = await ContactService.getContact(this.contactId)
  //         let groupResponse = await ContactService.getGroup(response.data)
  //         this.contact = response.data
  //         this.group = groupResponse.data
  //         this.loading = false
  //       }
  //       catch(error){
  //         this.errorMessage = error
  //         this.loading = false
  //       }
  //     },
  //     methods: {
  //       isDone(){
  //         return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0
  //       }
  //     }
  // }
  
  </script>
  
  <style>
  
  </style>