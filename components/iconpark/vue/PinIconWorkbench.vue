<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><polygon :stroke="stroke" :stroke-width="strokeWidth" :fill="fill" fill-rule="nonzero" stroke-linejoin="round" points="12 33 4 33 4 7 44 7 44 33 36 33"/><path d="M16,22 L16,26" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><path d="M24,33 L24,39" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><path d="M24,18 L24,26" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><path d="M32,14 L32,26" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/><path d="M12,41 L36,41" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconWorkbench",
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
