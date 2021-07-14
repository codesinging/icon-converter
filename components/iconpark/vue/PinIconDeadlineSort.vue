<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M6 5V30.0036H42V5" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 37L24 43L18 37" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 30V43" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3438 20.6579L29.6575 9.34424" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M18.3438 9.34315L29.6575 20.6569" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDeadlineSort",
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
