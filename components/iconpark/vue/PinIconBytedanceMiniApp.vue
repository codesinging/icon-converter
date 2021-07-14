<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M24 4V23L8 36" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 23L40 36" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M31 20L40 14" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M17 20L8 14" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 31V43" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBytedanceMiniApp",
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
