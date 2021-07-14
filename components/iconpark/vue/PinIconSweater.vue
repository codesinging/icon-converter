<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M14 37H6V24L11 9L19 4H24H29L38 9L42 24V37H34V44H24H14V37Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 28V37" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 28V37" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSweater",
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
