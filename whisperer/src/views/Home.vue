<template>
  <div class="home">
    <div class="list">
      <li v-for="whisper in whispers" :key="whisper.id" class="item">
        {{whisper.content}}
        {{whisper.uid}}
      </li>
    </div>
  </div>
</template>

<script>

import { db } from '../main'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      whispers: []
    }
  },
  firestore () {
    return {
      whispers: db.collection('whispers')
    }
  }
}
</script>
