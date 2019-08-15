<template lang="pug">
  q-layout(view="hHh lpR fFf")
    q-header.bg-info.text-primary(elevated)
      q-toolbar.flex.justify-center.items-center.text-center
        h5.q-my-none {{$t('ships.title')}}
    q-page-container.bg-accent.text-primary
      router-view
</template>

<script>
export default {
  name: 'MyLayout',
}
</script>

<style>
</style>
