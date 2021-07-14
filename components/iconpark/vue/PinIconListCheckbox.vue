<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 24H44H20Z" :fill="fill"/><path d="M20 24H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 38H44H20Z" :fill="fill"/><path d="M20 38H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10H44H20Z" :fill="fill"/><path d="M20 10H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="34" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="4" y="20" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><rect x="4" y="6" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconListCheckbox",
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
