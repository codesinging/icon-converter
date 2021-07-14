<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="3" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 24C32.2091 24 34 22.2091 34 20C34 17.7909 32.2091 16 30 16C27.7909 16 26 17.7909 26 20C26 22.2091 27.7909 24 30 24Z" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M30 33C32.2091 33 34 31.2091 34 29C34 26.7909 32.2091 25 30 25C27.7909 25 26 26.7909 26 29C26 31.2091 27.7909 33 30 33Z" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M21 16H14V32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 24H21" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconFEightKey",
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
