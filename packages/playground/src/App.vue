<template>
  <div w="full" h="full" color="$wb-color-foreground" bg="$wb-color-background">
    <Header @action="handleHeaderActions" />
    <Repl
      :editor="Monaco"
      :store="store"
      :theme="ThemeState[0].value"
      :show-compile-output="true"
      :auto-resize="true"
      :clear-console="false"
      :preview-options="PREVIEW_OPTIONS"
      @keydown.ctrl.s.prevent
      @keydown.meta.s.prevent
    />
  </div>
</template>

<script setup lang="ts">
import Monaco from '@vue/repl/monaco-editor'
import { watch, watchEffect } from 'vue'
import Header, { ActionType, ActionVersionsPayload } from './Header.vue'
import { downloadProject } from './download'
import { Repl, setVersion, store } from './repl'
import {
  APP_FILE,
  HIDDEN_FILES,
  PREVIEW_OPTIONS,
  APP_MAIN_FILE
} from './repl/constant'
import { ThemeState } from './states'

function handleHeaderActions(
  action: ActionType,
  payload?: ActionVersionsPayload
) {
  switch (action) {
    case 'download':
      downloadProject(store)
      break
    case 'version':
      setVersion(payload!.pkg, payload!.version)
      break
  }
}

watch(
  () => store.loading,
  loading => {
    if (!loading) {
      store.setActive(APP_FILE)
      for (const file of HIDDEN_FILES) {
        store.files[file].hidden = true
      }
      store.mainFile = APP_MAIN_FILE
    }
  }
)
watch(
  () => [store.typescriptVersion],
  () => store.reloadLanguageTools?.(),
  { deep: true }
)
watchEffect(() => window.history.replaceState({}, '', store.serialize()))
</script>
