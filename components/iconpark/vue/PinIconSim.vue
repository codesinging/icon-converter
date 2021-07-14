<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(8.000000, 4.000000)"><polygon :stroke="stroke" :fill="fill" fill-rule="nonzero" points="0 0 24.8888889 0 32 7.27272727 32 40 0 40" stroke-linejoin="round" :stroke-width="strokeWidth"/><rect :stroke="stroke" :fill="fill" fill-rule="nonzero" x="7" y="22" width="18" height="10" stroke-linejoin="round" :stroke-width="strokeWidth"/><path d="M7,8 L7,14" :stroke="stroke" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :fill="fill" fill-rule="evenodd"/><path d="M13,8 L13,14" :stroke="stroke" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :fill="fill" fill-rule="evenodd"/><path d="M19,8 L19,14" :stroke="stroke" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :fill="fill" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconSim",
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
