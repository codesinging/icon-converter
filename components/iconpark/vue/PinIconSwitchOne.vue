<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="19" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><rect x="36.0063" y="19.3335" width="10.5189" height="24.0125" rx="5.25944" transform="rotate(90 36.0063 19.3335)" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><rect x="36.0063" y="29.8524" width="10" height="10" rx="5" transform="rotate(-180 36.0063 29.8524)" :stroke="stroke" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconSwitchOne",
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
