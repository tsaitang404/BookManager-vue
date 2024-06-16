<template>
  <p v-if="auth.check()">
    {{ auth.user() }}
  </p>
  <p v-else>You have not login!</p>
</template>
<script lang="ts" setup>
import { useAuth } from "vue-auth3"

const auth = useAuth()
</script>
