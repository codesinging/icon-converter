<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2z"/>
</svg>
</template>

<script>
export default {
    name: "PinIconUnion",
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
