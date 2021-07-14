<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V12C5 10.8954 5.89543 10 7 10H16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 40L44 40" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="17" r="9" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M19 18V16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M41 18V16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 8C29.8333 7 28.8 4.8 26 4" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 8C30.0833 7 30.6 4.8 32 4" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="33" cy="16" r="2" fill="currentColor"/><circle cx="27" cy="16" r="2" fill="currentColor"/></svg>
</template>

<script>
export default {
    name: "PinIconBabyApp",
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
