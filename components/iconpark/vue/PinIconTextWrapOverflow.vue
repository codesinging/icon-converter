<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M8 10V38" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 4V16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16 24H42" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M37.0561 19.0113L42.0929 24.0255L37.0561 29.123" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTextWrapOverflow",
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
