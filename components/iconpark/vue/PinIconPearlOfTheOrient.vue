<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="33" r="6" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="24" cy="13" r="3" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M24 40V44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M22 16L20 28" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M26 16L28 28" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M19 37L16 44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M29 37L32 44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 4V10" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconPearlOfTheOrient",
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
