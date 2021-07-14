<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><polyline :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" points="4 30 9 6 9 6 39 6 44 30" :fill="fill" fill-rule="evenodd"/><polygon :stroke="stroke" :stroke-width="strokeWidth" :fill="fill" fill-rule="nonzero" stroke-linejoin="round" points="4 30 14.9090909 30 16.7272727 36 31.2727273 36 33.0909091 30 44 30 44 43 4 43"/><polyline :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" transform="translate(24.000000, 17.000000) scale(1, -1) translate(-24.000000, -17.000000) " points="18 14 24 20 30 14" :fill="fill" fill-rule="evenodd"/><path d="M24,26 L24,14" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconInboxOut",
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
