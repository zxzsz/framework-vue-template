<template>
  <f7-page>
    <f7-navbar title="Action Sheet"></f7-navbar>
    <f7-block strong>
      <p class="row">
        <!-- One group, open by direct accessing instance .open() method -->
        <f7-button class="col" raised @click="$refs.actionsOneGroup.open()">One group</f7-button>
        <!-- Two groups, open by "actions-open" attribute -->
        <f7-button class="col" raised actions-open="#actions-two-groups">Two groups</f7-button>
      </p>
      <p>
        <!-- Actions Grid, open by changing actionGridOpened prop -->
        <f7-button raised @click="actionGridOpened = true">Action Grid</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Action Sheet To Popover</f7-block-title>
    <f7-block strong>
      <p>
        Action Sheet can be automatically converted to Popover (for tablets). This button will open Popover on tablets and Action Sheet on phones:
        <f7-button
          style="display:inline-block"
          class="button-to-popover"
          @click="openActionsPopover"
        >Actions</f7-button>
      </p>
    </f7-block>

    <!-- One Group -->
    <f7-actions ref="actionsOneGroup">
      <f7-actions-group>
        <f7-actions-label>Do something</f7-actions-label>
        <f7-actions-button bold>Button 1</f7-actions-button>
        <f7-actions-button>Button 2</f7-actions-button>
        <f7-actions-button color="red">Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <!-- Two Groups -->
    <f7-actions id="actions-two-groups">
      <f7-actions-group>
        <f7-actions-label>Do something</f7-actions-label>
        <f7-actions-button bold>Button 1</f7-actions-button>
        <f7-actions-button>Button 2</f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button color="red">Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <!-- Grid -->
    <f7-actions :grid="true" :opened="actionGridOpened" @actions:closed="actionGridOpened = false">
      <f7-actions-group>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/people-96x96-1.jpg"
            width="48"
          />
          <span>Button 1</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/people-96x96-2.jpg"
            width="48"
          />
          <span>Button 2</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/people-96x96-3.jpg"
            width="48"
          />
          <span>Button 3</span>
        </f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/fashion-96x96-4.jpg"
            width="48"
          />
          <span>Button 4</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/fashion-96x96-5.jpg"
            width="48"
          />
          <span>Button 5</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/fashion-96x96-6.jpg"
            width="48"
          />
          <span>Button 6</span>
        </f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <f7-chip text="Example Chip"></f7-chip>
    <f7-chip text="Another Chip" deleteable @click="deleteChip"></f7-chip>
    <f7-chip text="One More Chip"></f7-chip>
    <f7-chip text="Fourth Chip"></f7-chip>
    <f7-chip text="Last One"></f7-chip>

    <f7-list contacts-list>
      <f7-list-group>
        <f7-list-item title="A" group-title></f7-list-item>
        <f7-list-item title="Aaron "></f7-list-item>
        <f7-list-item title="Abbie"></f7-list-item>
        <f7-list-item title="Adam"></f7-list-item>
        <f7-list-item title="Adele"></f7-list-item>
        <f7-list-item title="Agatha"></f7-list-item>
        <f7-list-item title="Agnes"></f7-list-item>
        <f7-list-item title="Albert"></f7-list-item>
        <f7-list-item title="Alexander"></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="B" group-title></f7-list-item>
        <f7-list-item title="Bailey"></f7-list-item>
        <f7-list-item title="Barclay"></f7-list-item>
        <f7-list-item title="Bartolo"></f7-list-item>
        <f7-list-item title="Bellamy"></f7-list-item>
        <f7-list-item title="Belle"></f7-list-item>
        <f7-list-item title="Benjamin"></f7-list-item>
      </f7-list-group>
    </f7-list>

    <f7-block strong class="text-align-center">
      <f7-gauge
        type="circle"
        :value="gaugeValue"
        :size="200"
        border-color="#2196f3"
        :border-width="10"
        :value-text="`${gaugeValue * 100}%`"
        :value-font-size="30"
        value-text-color="#2196f3"
        label-text="amount of something"
      ></f7-gauge>
      <f7-segmented tag="p" raised>
        <f7-button @click="() => gaugeValue = 0">0%</f7-button>
        <f7-button @click="() => gaugeValue = 0.25">25%</f7-button>
        <f7-button @click="() => gaugeValue = 0.5">50%</f7-button>
        <f7-button @click="() => gaugeValue = 0.75">75%</f7-button>
        <f7-button @click="() => gaugeValue = 1">100%</f7-button>
      </f7-segmented>
    </f7-block>
  <f7-list>
  <f7-list-item title="Link 1" link="#"></f7-list-item>
  <f7-list-item title="Link 2" link="#"></f7-list-item>
  <f7-list-item title="Link 3" link="#"></f7-list-item>
</f7-list>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      actionGridOpened: false,
      gaugeValue: 0.5
    }
  },
  methods: {
    openActionsPopover() {
      const self = this
      const app = self.$f7
      if (!self.actionsToPopover) {
        self.actionsToPopover = app.actions.create({
          buttons: [
            {
              text: 'Do something',
              label: true
            },
            {
              text: 'Button 1',
              bold: true
            },
            {
              text: 'Button 2'
            },
            {
              text: 'Cancel',
              color: 'red'
            }
          ],
          // Need to specify popover target
          targetEl: self.$el.querySelector('.button-to-popover')
        })
      }

      // Open
      self.actionsToPopover.open()
    },
    deleteChip(e) {
      const $$ = this.$$
      const app = this.$f7
      const target = e.target
      app.dialog.confirm('confirm delete', function() {
        $$(target)
          .parents('.chip')
          .remove()
      })
    }
  }
}
</script>