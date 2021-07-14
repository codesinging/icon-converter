<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M40.0001 9H8C6.89543 9 6 9.89543 6 11L6.00003 41C6.00003 42.1046 6.89546 43 8.00003 43H40.0001C41.1047 43 42.0001 42.1046 42.0001 41V11C42.0001 9.89543 41.1047 9 40.0001 9Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M15 5V9" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33 5V9" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M6 17H42" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M18 30H30" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 24V36" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M6 11L6 23" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M42 11V23" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconGeneralBranch",
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
