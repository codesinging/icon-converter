<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect x="17" y="24.0711" width="10" height="10" rx="2" transform="rotate(-45 17 24.0711)" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M40.1201 16C37.1747 10.0731 31.0586 6 23.9912 6C16.9237 6 10.9454 10.0731 8 16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 8V16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14.7803 16L8.00013 16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 32C10.9454 37.9269 17.0615 42 24.129 42C31.1964 42 37.1747 37.9269 40.1201 32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M40.1201 40V32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M33.3398 32L40.12 32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconRefreshOne",
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
