<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="8" y="4" width="32" height="40" rx="2" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M8 15.5H40" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="10" r="2" fill="currentColor"/><circle cx="34" cy="10" r="2" fill="currentColor"/><circle cx="24" cy="30" r="7" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconWashingMachine",
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
