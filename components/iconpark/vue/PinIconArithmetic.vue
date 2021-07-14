<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M28 32.5H42" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 41.5H42" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 13H22" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 5L14 21" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 5L6 41" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconArithmetic",
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
