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
  import gjsNewsletter from 'grapesjs-preset-newsletter'
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
          plugins: [gjsNewsletter, gjsForms, tUIImageEditor, gjsCkeditor, styleFilter, gjsExportPlugin],
          pluginsOpts: {
            [tUIImageEditor]: { 
              labelApply: 'Apply'
            },
            [gjsCkeditor]: {
              // position: 'right',
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
            },
          },
          canvas: {
            styles: ['https://v1.fontapi.ir/css/Yekan']
          },
          
        })

        const blockManager = editor.BlockManager
        const blocks = blockManager.getAll()
        console.log(blocks)
        blocks.map(block => {
          if(block.attributes.id === 'sect100') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'sect50') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'sect30') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'sect37') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'button') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'divider') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'text') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'text-sect') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'image') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'quote') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'link') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'link-block') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'grid-items') {
            block.attributes.category = {
              label: 'Basic'
            }
          } else if(block.attributes.id === 'list-items') {
            block.attributes.category = {
              label: 'Basic'
            }
          }
        })
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

        // editor.Commands.add('clear-html', () => editor.DomComponents.clear());
        const panelManager = editor.Panels;
        panelManager.addButton('commands', {
          id: 'clearCanvas',
          className: 'fa fa-trash',
          command: 'core:canvas-clear',
          attributes: { class: 'fa fa-trash'},
        })
        editor.on('component:selected', () => {
          const openSmBtn = panelManager.getButton('views', 'open-sm');
          openSmBtn.set('active', 1)
        })

        const styleManager = editor.StyleManager
        editor.on('load', () => {
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
          styleManager.getProperty('typography', 'font-family').set('options', [
            { value: "Yekan", name: 'Yekan' },
            { value: "Nazanin", name: 'Nazanin' }
          ])
        })
      })
    }
  }
</script>

<style>
  
</style>