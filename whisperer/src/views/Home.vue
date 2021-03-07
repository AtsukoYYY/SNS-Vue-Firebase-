<template>
  <div class="home">
    <div class="row">
      <div class="col-md-3 card shadow-sm mx-4 my-1 p-3" v-for="whisper in orderBy(whispers,'date',-1)"
        :key="whisper.id">
        <div class="row">
          <svg class="col-3 bd-placeholder-img" width="60px" height="60px" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="60px" height="60px" fill="#777" />
          </svg>
          <div class="col-9  align-items-center text-left">
            <div class=""> {{whisper.name}}<span class="mr-auto text-muted"> @{{whisper.uid}}</span></div>
            <h5 class="card-text"> {{whisper.content}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    db
  } from '../main'
  import Vue2Filters from 'vue2-filters'

  export default {
    name: 'home',
    components: {},
    data() {
      return {
        whispers: []
      }
    },
    firestore() {
      return {
        whispers: db.collection('whispers')
      }
    },
    mixins: [Vue2Filters.mixin]
  }
</script>