<template>
  <div class="min-h-screen mt-2 flex flex-col justify-center items-center">
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
              filenamePfx: 'chabok_email_template'
            }
          },
          canvas: {
            styles: ['https://v1.fontapi.ir/css/Yekan', 'https://v1.fontapi.ir/css/Nazanin']
          }
        })

        const blockManager = editor.BlockManager
        blockManager.add('social', {
          label: 'Social', 
          category: 'Extra',
          attributes: {
            class: 'fa fa-share-alt'
          },
          content: `
            <div style="display: flex; justify-content: center">
              <div style="width: 30px; height: 30px; margin: 0 10px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                  <path fill="#3b5998" d="M17,1A16,16,0,1,0,33,17,16,16,0,0,0,17,1Z"></path>
                  <path fill="#FFF" d="M14.69,25.9h3.68V17h2.45l.33-3.07H18.37V12.39c0-.8.08-1.22,1.23-1.22h1.53V8.1H18.68c-2.95,0-4,1.49-4,4v1.84H12.85V17h1.84Z"></path>
                </svg>
              </div>

              <div style="width: 30px; height: 30px; margin: 0 10px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                  <path fill="#1da1f2" stroke-miterlimit="10" d="M17,1A16,16,0,1,0,33,17,16,16,0,0,0,17,1Z"></path>
                  <path fill="#FFF" d="M20.23,10.89a3.69,3.69,0,0,0-2.49,3.7l0,.63-.63-.08a10.34,10.34,0,0,1-6.06-3l-.84-.84-.21.62a3.72,3.72,0,0,0,.78,3.81c.51.54.4.61-.48.29-.3-.1-.57-.18-.6-.14a4.7,4.7,0,0,0,.46,1.73,4.13,4.13,0,0,0,1.74,1.64l.63.3h-.74c-.71,0-.74,0-.66.28A3.81,3.81,0,0,0,13.55,22l.79.27-.69.42a7.22,7.22,0,0,1-3.41.95,3.62,3.62,0,0,0-1,.1,9.53,9.53,0,0,0,2.45,1.13A10.72,10.72,0,0,0,20,23.89a11.25,11.25,0,0,0,4.23-5A13.08,13.08,0,0,0,25.1,15c0-.59,0-.67.75-1.38a8.47,8.47,0,0,0,.89-1c.13-.24.11-.24-.53,0-1.09.38-1.24.33-.7-.25A3.74,3.74,0,0,0,26.37,11s-.19,0-.41.14a6.7,6.7,0,0,1-1.12.44l-.68.22-.63-.43a5.19,5.19,0,0,0-1.08-.57A4.27,4.27,0,0,0,20.23,10.89Z"></path>
                </svg>
              </div>

              <div style="width: 30px; height: 30px; margin: 0 10px">
                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzQgMzQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIyNSIgeTE9IjMuMTQiIHgyPSI5IiB5Mj0iMzAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0ZjViZDUiLz48c3RvcCBvZmZzZXQ9IjAuMzEiIHN0b3AtY29sb3I9IiM5NjJmYmYiLz48c3RvcCBvZmZzZXQ9IjAuNTUiIHN0b3AtY29sb3I9IiNkNjI5NzYiLz48c3RvcCBvZmZzZXQ9IjAuOCIgc3RvcC1jb2xvcj0iI2ZhN2UxZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZlZGE3NSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5pbnN0YWdyYW0zXzE8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE3LDFBMTYsMTYsMCwxLDAsMzMsMTcsMTYsMTYsMCwwLDAsMTcsMVoiLz48ZyBpZD0iU3ltYm9sIj48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNywxMC40M2MyLjE0LDAsMi4zOSwwLDMuMjQuMDVhNC41OCw0LjU4LDAsMCwxLDEuNDkuMjgsMi40NSwyLjQ1LDAsMCwxLC45Mi42LDIuNDksMi40OSwwLDAsMSwuNi45Miw0LjI2LDQuMjYsMCwwLDEsLjI3LDEuNDhjMCwuODUuMDUsMS4xLjA1LDMuMjRzMCwyLjM5LS4wNSwzLjI0YTQuMzksNC4zOSwwLDAsMS0uMjcsMS40OSwyLjY3LDIuNjcsMCwwLDEtMS41MiwxLjUyLDQuMzksNC4zOSwwLDAsMS0xLjQ5LjI3Yy0uODUsMC0xLjEuMDUtMy4yNC4wNXMtMi4zOSwwLTMuMjQtLjA1YTQuMzksNC4zOSwwLDAsMS0xLjQ5LS4yNywyLjY3LDIuNjcsMCwwLDEtMS41Mi0xLjUyLDQuMzksNC4zOSwwLDAsMS0uMjctMS40OWMwLS44NS0uMDUtMS4xLS4wNS0zLjI0czAtMi4zOS4wNS0zLjI0YTQuMjYsNC4yNiwwLDAsMSwuMjctMS40OCwyLjQ5LDIuNDksMCwwLDEsLjYtLjkyLDIuNDUsMi40NSwwLDAsMSwuOTItLjYsNC41OCw0LjU4LDAsMCwxLDEuNDktLjI4Yy44NSwwLDEuMS0uMDUsMy4yNC0uMDVNMTcsOWMtMi4xOCwwLTIuNDUsMC0zLjMsMGE2LjEzLDYuMTMsMCwwLDAtMS45NS4zNyw0LjA2LDQuMDYsMCwwLDAtMS40Mi45MywzLjksMy45LDAsMCwwLS45MiwxLjQxQTUuODYsNS44NiwwLDAsMCw5LDEzLjdjMCwuODUsMCwxLjEyLDAsMy4zczAsMi40NSwwLDMuM2E1LjgsNS44LDAsMCwwLC4zNywxLjk0LDMuODYsMy44NiwwLDAsMCwuOTIsMS40Miw0LjA2LDQuMDYsMCwwLDAsMS40Mi45M0E1Ljg2LDUuODYsMCwwLDAsMTMuNywyNWMuODUsMCwxLjEyLjA1LDMuMy4wNXMyLjQ1LDAsMy4zLS4wNWE2LjEzLDYuMTMsMCwwLDAsMS45NS0uMzcsNC4wNiw0LjA2LDAsMCwwLDEuNDItLjkzLDMuODYsMy44NiwwLDAsMCwuOTItMS40MkE1LjgsNS44LDAsMCwwLDI1LDIwLjNjMC0uODUuMDUtMS4xMy4wNS0zLjNzMC0yLjQ1LS4wNS0zLjNhNS44Niw1Ljg2LDAsMCwwLS4zNy0xLjk1LDMuOSwzLjksMCwwLDAtLjkyLTEuNDEsNCw0LDAsMCwwLTEuNDItLjkzQTUuODUsNS44NSwwLDAsMCwyMC4zMSw5QzE5LjQ1LDksMTkuMTgsOSwxNyw5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE3LDEyLjg5QTQuMTEsNC4xMSwwLDEsMCwyMS4xMSwxNyw0LjExLDQuMTEsMCwwLDAsMTcsMTIuODlabTAsNi43OEEyLjY3LDIuNjcsMCwxLDEsMTkuNjcsMTcsMi42NiwyLjY2LDAsMCwxLDE3LDE5LjY3WiIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMjEuMjgiIGN5PSIxMi43MyIgcj0iMC45NiIvPjwvZz48L3N2Zz4=" />
              </div>

              <div style="width: 30px; height: 30px; margin: 0 10px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                  <path fill="red" stroke-miterlimit="10" d="M17,1A16,16,0,1,0,33,17,16,16,0,0,0,17,1Z"></path>
                  <path fill="#FFF" d="M25.47,17a22.8,22.8,0,0,0-.37-4.15,2.16,2.16,0,0,0-1.52-1.52,51.72,51.72,0,0,0-6.7-.33,50.37,50.37,0,0,0-6.7.39,2.16,2.16,0,0,0-1.51,1.53A22.73,22.73,0,0,0,8.33,17a22.13,22.13,0,0,0,.38,4.15,2.14,2.14,0,0,0,1.52,1.52,50.32,50.32,0,0,0,6.7.34,50.16,50.16,0,0,0,6.69-.39,2.14,2.14,0,0,0,1.51-1.53A22.88,22.88,0,0,0,25.47,17ZM15.16,19.55l0-5.09L19.63,17Z"></path>
                </svg>
              </div>
            </div>
          `
        })

        const styleManager = editor.StyleManager
        styleManager.addProperty('typography', {
          name: 'Text direction',
          property: 'direction',
          type: 'radio',
          defaults: 'rtl',
          list: [
            { value: 'rtl', name: 'rtl' },
            { value: 'ltr', name: 'ltr' }
          ],
        })
        styleManager.addProperty('extra', {
          name: 'Filter',
          property: 'filter',
          type: 'filter',
          full: 1,
        });
        const prop = styleManager.getProperty('typography', 'font-family')
        prop.set('options', [
          { value: "Yekan", name: 'Yekan' },
          { value: "Nazanin", name: 'Nazanin' }
        ])

        const panelManager = editor.Panels;
        panelManager.addButton('commands', {
          id: 'undo',
          className: 'fa fa-rotate-left',
          command: 'core:undo',
          attributes: { class: 'fa fa-rotate-left'},
        })
        panelManager.addButton('commands', {
          id: 'redo',
          className: 'fa fa-rotate-right',
          command: 'core:redo',
          attributes: { class: 'fa fa-rotate-right'},
        })
        panelManager.addButton('commands', {
          id: 'clearCanvas', 
          className: 'fa fa-trash',
          command: 'core:canvas-clear',
          attributes: { class: 'fa fa-trash'},
        })
        panelManager.removeButton('commands', '')
      
        // Turn off default devices select/option and create new one
        editor.getConfig().showDevices = 0
        
        editor.on('component:selected', () => {
          const openSmBtn = panelManager.getButton('views', 'open-sm');
          openSmBtn.set('active', 1)
        })
        editor.on('load', () => {
          // Set blocks manager as default active panel 
          const openSmBtn = panelManager.getButton('views', 'open-sm');
          openSmBtn.set('active', 0)
      
          const openBmBtn = panelManager.getButton('views', 'open-blocks');
          openBmBtn.set('active', 1)

          panelManager.getPanel('options').get('buttons').add([{
            id: 'importTemplate',
            command: 'open-import-template',
            className: 'fa fa-download',
            attributes: {title: 'Import'},
          }]) 
          
          panelManager.addPanel({
            id: 'devices-c',
            buttons: [
              {
                id: 'deviceDesktop',
                command: 'set-device-desktop',
                className: 'fa fa-desktop',
                attributes: {title: 'Desktop'},
                active: 1,
              }, {
                id: 'deviceTablet',
                command: 'set-device-tablet',
                className: 'fa fa-tablet',
                attributes: {title:'Tablet'},
              }, {
                id: 'deviceMobile',
                command: 'set-device-mobile',
                className: 'fa fa-mobile',
                attributes: {title: 'Mobile'},
              }
            ]
          })
        })

        // editor.Commands.add('clear-html', () => editor.DomComponents.clear());
        const cmd = editor.Commands
        cmd.add('set-device-desktop', {
          run(editor) {
            editor.setDevice('Desktop');
          }
        });
        cmd.add('set-device-tablet', {
          run(editor) {
            editor.setDevice('Tablet');
          }
        });
        cmd.add('set-device-mobile', {
          run(editor) {
            editor.setDevice('Mobile portrait');
          }
        })
        cmd.add('open-import-template', {
          run(editor, sender) {
            let codeViewer = editor && editor.CodeManager.getViewer('CodeMirror').clone()
            let btnImp = document.createElement("button")
            let container = document.createElement("div")
            let config = editor.getConfig()
            let pfx = config.stylePrefix || ''
            // Init import button
            btnImp.innerHTML = 'Import'
            btnImp.className = pfx + 'btn-prim ' + pfx + 'btn-import'
            btnImp.onclick = () => {
              let code = codeViewer.editor.getValue()
              editor.DomComponents.getWrapper().set('content', '')
              editor.setComponents(code)
              editor.Modal.close()
            }
            // Init code viewer
            codeViewer.set({
              codeName: 'htmlmixed',
              theme: 'hopscotch',
              readOnly: 0
            })
            let md = editor.Modal
            let viewer = codeViewer.editor
            md.setTitle('Import template')
            // Init code viewer if not yet instantiated
            if(!viewer){
              let txtarea = document.createElement('textarea')
              container.appendChild(txtarea)
              container.appendChild(btnImp)
              codeViewer.init(txtarea)
              viewer = codeViewer.editor
            }
            md.setContent('')
            md.setContent(container)
            codeViewer.setContent('')
            md.open()
            viewer.refresh()
            sender && sender.set('active', 0)
          }
        })
      })
    }
  }
</script>

<style>
  /* Primary color for the background */
  .gjs-one-bg {
    @apply bg-gray-100  dark:bg-blueGray-800
  }

  /* Secondary color for the text color */
  .gjs-two-color {
    @apply text-gray-700 dark:text-white
  }

  /* Tertiary color for the background */
  .gjs-three-bg {
    @apply bg-gray-100 dark:bg-blueGray-800
  }

  /* Quaternary color for the text color  */
  .gjs-four-color,
  .gjs-four-color-h:hover {
    @apply text-gray-700 dark:text-white
  }

  .gjs-cv-canvas {
    width: 75%;
    height: calc(100%-50px);
    top: 46px;
    background-color: #fff;
    background-image: linear-gradient(45deg, rgb(247, 247, 247) 25%, transparent 25%), linear-gradient(-45deg, rgb(247, 247, 247) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgb(247, 247, 247) 75%), linear-gradient(-45deg, transparent 75%, rgb(247, 247, 247) 75%);
    background-size: 20px 20px;
    background-position: 0px 0px, 0px 10px, 10px -10px, -10px 0px;
    
  }

  /* panels */
  .gjs-pn-panels {
    @apply pb-2 px-5
  }

  .gjs-pn-panel,
  .gjs-pn-devices {
    @apply py-2
  }

  .gjs-pn-views-container {
    @apply w-1/4 pt-12 pb-0
  }

  .gjs-pn-views {
    @apply w-1/4 py-2 px-5
  }

  .gjs-pn-commands{
    left: 715px;
    @apply w-1/12 shadow-none py-2 border-r border-gray-300
  }

  .gjs-pn-options {
    right: 25%
  }

  .gjs-blocks-no-cat {
    display: none
  }

  .gjs-blocks-c {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 10px 5px 0;
  }

  .gjs-block {
    width: 30%;
    height: 66px;
    margin: 0 5px 10px;
    @apply bg-white dark:bg-blueGray-700
  }

  .gjs-block svg {
    margin: 0 auto;
    width: 90%;
    height: 90%;
    fill: currentColor;
  }

  .gjs-block__media {
    height: 85%;
    margin-bottom: 0;
  }

  .gjs-pn-btn {
    @apply text-gray-700 dark:text-white
  }

  .gjs-pn-btn.gjs-pn-active {
    @apply text-gray-700 dark:text-white
  }

  .gjs-block-category .gjs-title,
  .gjs-category-title,
  .gjs-clm-tags .gjs-sm-title,
  .gjs-layer-title, 
  .gjs-sm-sector .gjs-sm-title {
    @apply bg-white dark:bg-blueGray-700
  }

  .gjs-clm-tags .gjs-sm-stack #gjs-sm-add, 
  .gjs-color-main, 
  .gjs-off-prv, 
  .gjs-sm-sector 
  .gjs-sm-stack #gjs-sm-add {
    @apply text-gray-700 dark:text-gray-100
  }

  .gjs-clm-tags #gjs-clm-new {
    @apply text-gray-800
  }

  .gjs-field-arrow-u,
  .gjs-field-arrow-d {
    @apply border-t-4 border-black dark:border-white;
    border-right: 4px solid transparent !important;
    border-left: 3px solid transparent !important;
  }

  .gjs-field-arrow-u {
    border-top: none;
  }

  .gjs-field-arrow-d {
    border-bottom: none;
  }

  .gjs-d-s-arrow {
    @apply border-t-4 border-black dark:border-white;
    border-right: 4px solid transparent !important;
    border-left: 3px solid transparent !important;
  }

  .gjs-fields {
    @apply border border-gray-400 text-gray-800 dark:text-gray-100
  }

  .gjs-field {
    @apply py-0 bg-white dark:bg-blueGray-700 dark:text-gray-100 border border-gray-200
  }

  .gjs-sm-field {
    @apply bg-white dark:bg-blueGray-700
  }

  .gjs-sm-properties {
    @apply py-3 px-5
  }

  .gjs-clm-tags .gjs-sm-property, 
  .gjs-sm-sector .gjs-sm-property {
    @apply px-2
  }

  div[data-gjs-type="wrapper"],
  #gjs body,
  .main-body {
    @apply bg-gray-200
  }

  .tui-image-editor__apply-btn {
    color: #000
  }

  /* code editor */
  .cm-s-hopscotch.CodeMirror,
  .cm-s-hopscotch .CodeMirror-gutters {
    @apply bg-gray-200 dark:bg-blueGray-800 text-gray-800 dark:text-gray-100
  }
  .gjs-cm-editor#gjs-cm-htmlmixed #gjs-cm-title,
  .gjs-cm-editor#gjs-cm-css #gjs-cm-title {
    @apply text-indigo-900 dark:text-indigo-200 font-bold
  }

  .cm-s-hopscotch span.cm-tag {
    @apply text-red-800 dark:text-red-300
  }

  .cm-s-hopscotch span.cm-property,
  .cm-s-hopscotch span.cm-attribute {
    @apply text-emerald-700 dark:text-emerald-200
  }

  .cm-s-hopscotch span.cm-string {
    @apply text-orange-500 dark:text-orange-200
  }

  .cm-s-hopscotch span.cm-atom {
    @apply text-rose-800 dark:text-rose-200
  }

  .cm-s-hopscotch span.cm-def {
    @apply text-yellow-700 dark:text-yellow-300
  }

  .cm-s-hopscotch span.cm-number {
    @apply text-pink-700 dark:text-pink-200
  }

  .cm-s-hopscotch span.cm-variable {
    @apply text-teal-500 dark:text-teal-200
  }
</style>
