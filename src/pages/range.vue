<template>
  <f7-page>
		<f7-navbar class="nav" title="List View" back-link="Back"></f7-navbar>

		<f7-block-title>Volume</f7-block-title>
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon ios="f7:volume_mute_fill" aurora="f7:volume_mute_fill" md="material:volume_mute"></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="100"
            :step="1"
            :value="10"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell class="width-auto flex-shrink-0">
          <f7-icon ios="f7:volume_fill" aurora="f7:volume_fill" md="material:volume_up"></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>
		<f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell>
          <f7-icon ios="f7:volume_mute_fill" aurora="f7:volume_mute_fill" md="material:volume_mute"></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell>
          <f7-range
            :min="0"
            :max="100"
            :step="1"
            :value="10"
          ></f7-range>
        </f7-list-item-cell>
        <f7-list-item-cell>
          <f7-icon ios="f7:volume_fill" aurora="f7:volume_fill" md="material:volume_up"></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>
	</f7-page>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar::after {
	background: red;
}
</style>
