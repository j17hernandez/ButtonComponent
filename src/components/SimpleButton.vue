<template>
  <v-btn
    :color="color"
    :icon="icon"
    :text="text"
    :outlined="outlined"
    :disabled="disabled"
    :rounded="rounded"
    :loading="loading"
    :fab="fab"
    :dark="dark"
    @click="click"
    @dblclick="dblclick"
  >
    {{ name }}
    <slot v-if="iconName" name="icon">
      <v-icon> {{ iconName }} </v-icon>
    </slot>
  </v-btn>
</template>
<script>
export default {
  name: "SimpleButton",
  props: {
    name: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    click(event) {
      this.$emit('click', event)
    },
    dblclick(event) {
      this.$emit('dblclick', event)
    },
  }
};
</script>
