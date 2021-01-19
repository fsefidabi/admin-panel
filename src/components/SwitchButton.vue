<template>
  <div class="w-full p-3 rounded-3xl bg-white dark:bg-blueGray-900 shadow-xl">
    <label class="flex flex-row-reverse rtl:flex-row justify-center items-center cursor-pointer">
      <input class="input" type="checkbox" :checked="darkMode" @change="$emit('switchTheme')">
      <span class="switch relative flex items-center flex-shrink-0"></span>
      <span class="mr-3 rtl:ml-3 main-text-color overflow-hidden overflow-ellipsis whitespace-nowrap">Dark Mode</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'DarkModeBtn',
    inheritAttrs: false,
    props: ['darkMode'],
    emits: ['switchTheme']
  }
</script>

<style scoped>
  .input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .switch {
    --switch-container-width: 45px;
    --switch-size: calc(var(--switch-container-width) / 1.8);
    height: var(--switch-size);
    flex-basis: var(--switch-container-width);
    border-radius: var(--switch-size);
    background-color: #e2e8f0;
    transition: background-color 0.25s ease-in-out;
  }

  .switch::before {
    content: "";
    position: absolute;
    left: 1px;
    height: calc(var(--switch-size) - 4px);
    width: calc(var(--switch-size) - 4px);
    border-radius: 9999px;
    background-color: white;
    transition: transform 0.375s ease-in-out;
    border: 2px solid #e2e8f0;
  }

  .input:checked + .switch {
    @apply bg-indigo-600
  }

  .input:checked + .switch::before {
    @apply border-indigo-200;
    transform: translateX(calc(var(--switch-container-width) - var(--switch-size)))
  }

  .input:focus + .switch::before {
    @apply border-coolGray-400
  }

  .input:focus:checked + .switch::before {
    @apply border-indigo-200
  }

  .input:disabled + .switch {
    @apply bg-gray-400
  }

  .input:disabled + .switch::before {
    @apply bg-gray-500 border-gray-500
  }
</style>