<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(6.000000, 2.000000)"><polygon :stroke="stroke" :stroke-width="strokeWidth" :fill="fill" fill-rule="nonzero" stroke-linejoin="round" points="0 40 8.67409249 15.2640024 25 32.0384615"/><path d="M17,17 L22,12 C24.6666667,9.33333333 25,7 23,5" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><path d="M23,23 L28,18 C31.3333333,14.6666667 34.6666667,14.6666667 38,18" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><circle fill="currentColor" cx="14" cy="3" r="2" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><circle fill="currentColor" cx="36" cy="2" r="2" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><circle fill="currentColor" cx="36" cy="25" r="2" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><circle fill="currentColor" cx="33" cy="34" r="2" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconFireworks",
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
