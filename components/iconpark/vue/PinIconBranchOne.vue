<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M24 33V15" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="9" width="28" height="6" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 32L14 25H33.9743L40 32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="33" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="20" y="33" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="36" y="33" width="8" height="8" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBranchOne",
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
