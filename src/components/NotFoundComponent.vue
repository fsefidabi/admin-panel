<template>
  <div class="flex flex-col justify-center items-center text-white">
    <p class="mb-10 text-5xl">{{ $t('routes.errors.404Error.title') }}</p>
    <div class="flex flex-col justify-center items-center">
      <p class="text-2xl mb-5 italic">{{ $t('routes.errors.404Error.description') }}</p>
      <router-link :to="'/'">
        <button
            class="bg-green-500 hover:bg-green-600 py-3 px-5 rounded-md text-black text-lg font-bold outline-none focus:outline-none">
          {{ $t('routes.errors.404Error.redirectBtn') }}
        </button>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFoundComponent'
  }
</script>

<style scoped>

</style>