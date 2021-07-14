<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 5H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 43H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 36V43" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M12 28H4V36H12V28Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M28 20H20V28H28V20Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M44 12H36V20H44V12Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M40 20V43" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 12V13" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M8 20V21" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M23 12V13" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 28V43" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconVerticalTimeline",
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
