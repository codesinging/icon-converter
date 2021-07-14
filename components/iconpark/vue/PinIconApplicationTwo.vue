<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="13.5" r="6.5" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="34.5" cy="34.5" r="6.5" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="13.5" cy="13.5" r="6.5" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="13.5" cy="34.5" r="6.5" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconApplicationTwo",
    props: {
        filled: {
            type: Boolean,
            default: false
        },
        size: {
            type: [Number, String],
            default: '1rem'
        },
        color: {
            type: String,
            default: 'currentColor'
        },
        strokeWidth: {
            type: [String, Number],
            default: 4
        },
    },
    computed: {
        stroke() {
            return this.color
        },
        fill() {
            return this.filled ? this.color : 'none'
        }
    },
}
</script>
