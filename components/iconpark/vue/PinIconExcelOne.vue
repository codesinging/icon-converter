<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="3" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M30 16H18" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M18 32L18 16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28 24H18" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M30 32H18" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconExcelOne",
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
