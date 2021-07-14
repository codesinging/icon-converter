<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 0a2 2 0 0 0-2 2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1c1.2-.4 1.833-1.5 2-2h-2V8c1.2-.4 1.833-1.5 2-2h-2V4c1.2-.4 1.833-1.5 2-2h-2a2 2 0 0 0-2-2H6zm3.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
</template>

<script>
export default {
    name: "PinIconStoplightsFill",
    props: {
        size: {
            type: [Number, String],
            default: '1rem'
        },
        color: {
            type: String,
            default: 'currentColor'
        },
    },
    computed: {
        fill() {
            return this.color || 'currentColor';
        }
    },
}
</script>
