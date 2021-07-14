<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H6V20H20V6Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M20 28H6V42H20V28Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M42 6H28V20H42V6Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M29 28V42" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M41 28V42" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTwoDimensionalCode",
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
