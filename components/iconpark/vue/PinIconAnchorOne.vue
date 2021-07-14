<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M40 35C40 25.7953 32.8366 10 24 10C15.1634 10 8 25.7953 8 35" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="35" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="4" y="6" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="36" y="35" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="36" y="6" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M12 10H36" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAnchorOne",
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
