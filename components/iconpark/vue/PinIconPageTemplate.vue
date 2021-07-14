<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M23 4.00012H4V26.0001H23V4.00012Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M44 34.0001H4V43.0001H44V34.0001Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M44 4.00012H31V12.0001H44V4.00012Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M44 18.0001H31V26.0001H44V18.0001Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPageTemplate",
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
