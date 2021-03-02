<template>
  <div class="min-h-screen my-2 flex flex-col justify-center items-center">
    <div :dir="this.dir" class="w-full px-5 flex justify-between sticky top-0 left-0">
      <div class="px-2 light-text"> 
        <router-link to="/email-builder" :dir="dir">
          <i v-if="$i18n.locale === 'fa'" class="fa fa-caret-right ml-3"></i>
          <i v-else class="fa fa-caret-left mr-3 rtl:ml-3"></i>
          {{ $t('navbar.navItems.dashboard') }}
        </router-link>
      </div>
    </div>
    <div class="w-screen mt-2 mx-0 border-b border-gray-600 border-opacity-20"></div>
    <div id="gjs" class="pr-3 bg-gray-200"></div>
    <div class="w-44 fixed bottom-3 left-3 rtl:right-3" style="z-index: 1000">
      <SwitchButton :dark-mode="darkMode" @switch-theme="$emit('toggleTheme')" class="bg-transparent" />
    </div>
  </div>
</template>

<script>
  import { onMounted } from 'vue'
  import 'grapesjs/dist/css/grapes.min.css'
  import grapesjs from 'grapesjs'
  import fa from 'grapesjs/locale/fa'
  import gjsBlocksBasic from 'grapesjs-blocks-basic'
  import gjsForms from 'grapesjs-plugin-forms'
  import tUIImageEditor from 'grapesjs-tui-image-editor'
  import gjsCkeditor from 'grapesjs-plugin-ckeditor'
  import styleFilter from 'grapesjs-style-filter'
  import gjsExportPlugin from 'grapesjs-plugin-export';
  import SwitchButton from '@/components/SwitchButton'

  export default {
    name: 'GrapeJs',
    props: ['darkMode', 'dir'],
    emits: ['toggleTheme'],
    components: { SwitchButton },
    setup() {
      onMounted(() => {
        const editor = grapesjs.init({
          container : '#gjs',
          height: '100vh',
          width: '100%',
          fromElement: true,
          // storageManager: { type: 0 },
          i18n: {
            // locale: 'en', // default locale
            // detectLocale: true, // by default, the editor will detect the language
            // localeFallback: 'en', // default fallback
            messages: {
              fa
            },
          },
          plugins: [gjsBlocksBasic, gjsForms, tUIImageEditor, gjsCkeditor, styleFilter, gjsExportPlugin],
          pluginsOpts: {
            [tUIImageEditor]: { 
              labelApply: 'Apply'
            },
            [gjsCkeditor]: {
              position: 'right',
              options: {
                // skin: 'moono-dark',
                extraPlugins: 'justify,colorbutton,panelbutton,font,sourcedialog,showblocks,bidi,basicstyles',
                toolbar: [
                  { name: 'basicstyles', items : [ 'Font', 'FontSize', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
                  { name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] },
                  { name: 'insert', items: [ 'SpecialChar' ] },
                  { name: 'save', items: [ 'Undo','Redo' ] },
                  { name: 'lists', items: [ 'NumberedList', 'BulletedList' ] },
                  { name: 'basicstyles', items : [ 'TextColor', 'BGColor' ] },
                  { name: 'insert', items: [ 'Image', 'Table', 'Smiley' ] },
                  { name: 'link', items: ['Link', 'Unlink'] },
                ],
                // uiColor: '#1f2227',
                language: 'en',
                removeButtons: '',
                // contentsCss: [ CKEDITOR.getUrl('contents.css') ]
                // contentsLangDirection: 'rtl'
              }
            },
            [gjsExportPlugin]: {
              filenamePfx: 'chabok_template'
            }
          },
          canvas: {
            styles: ['https://v1.fontapi.ir/css/Yekan', 'https://v1.fontapi.ir/css/Nazanin']
          }
        })

        const styleManager = editor.StyleManager

        styleManager.addProperty('typography', {
          name: 'Text direction',
          property: 'direction',
          type: 'radio',
          defaults: 'rtl',
          list: [
            { value: 'rtl', name: 'rtl', className: 'fa fa-paragraph-rtl' },
            { value: 'ltr', name: 'ltr' }
          ],
        })

        styleManager.addProperty('extra', {
          name: 'Filter',
          property: 'filter',
          type: 'filter',
          full: 1,
        });

        const prop = editor.StyleManager.getProperty('typography', 'font-family')
        prop.set('options', [
          { value: "Yekan", name: 'Yekan' },
          { value: "Nazanin", name: 'Nazanin' }
        ])
      })
    }
  }
</script>

<style>

</style>
