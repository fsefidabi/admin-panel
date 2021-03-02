<template>
  <div class="min-h-screen mt-2 flex flex-col justify-center items-center">
    <div :dir="this.dir" class="w-full px-5 flex justify-between">
      <div class="px-2 light-text"> 
        <router-link to="/email-builder">
          <i v-if="$i18n.locale === 'fa'" class="fa fa-caret-right ml-3 rtl:ml-3"></i>
          <i v-else class="fa fa-caret-left mr-3 rtl:ml-3"></i>
          {{ $t('navbar.navItems.dashboard') }}
        </router-link>
      </div>
    </div>
    <div class="w-screen mt-2 mx-0 border-b border-gray-600 border-opacity-20"></div>
    <EmailEditor ref="emailEditor" :locale="locale" v-on:load="editorLoaded" class="w-full pr-3 h-64" />
  </div>
</template>

<script>
  import EmailEditor from 'vue-email-editor/src/components/EmailEditor.vue'

  export default {
    name: 'GrapeJs',
    props: ['dir'],
    emits: ['toggleTheme', 'load'],
    components: { EmailEditor },
    data() {
      return {
        locale: localStorage.vuex ? JSON.parse(localStorage.vuex).locale : 'en',
      }
    },
    methods: {
      editorLoaded() {
        // Pass your template JSON here
        // this.$refs.emailEditor.editor.loadDesign({});
      },

      log() {
        console.log(this.dir)
      }
    }
  }
</script>

<style>

</style>
