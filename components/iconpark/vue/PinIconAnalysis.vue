<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44 5H4V17H44V5Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M4 41.0301L16.1756 28.7293L22.7549 35.0301L30.7982 27L35.2787 31.368" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 16.1719V42.1719" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 16.1719V30.1719" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M13.0156 43H44.0001" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M17 11H38" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M10 10.9966H11" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAnalysis",
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
