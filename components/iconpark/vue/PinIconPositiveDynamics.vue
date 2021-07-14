<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M17 33.9502V42.1102" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M9 40V42.0556" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M25 27V42.0714" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33 18.9614V42.0878" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M41 10.9707V42.0833" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M7 33L34 6" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M23.5 6H34" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPositiveDynamics",
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
