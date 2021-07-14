<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><polygon :stroke="stroke" :stroke-width="strokeWidth" :fill="fill" fill-rule="nonzero" stroke-linejoin="round" points="37.8449774 35.0219317 44 41.3157895 44 44 4 44 4 41.3157895 10.1183816 35.0593993"/><polyline :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" points="10.1038429 35.074266 18 27 18 6 18 6 30 6 30 27 37.8725898 35.050167" :fill="fill" fill-rule="evenodd"/><path d="M11,35 L37,35" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><path d="M30,14 L24,14" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><path d="M30,20 L24,20" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconFlask",
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
