<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="24" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="38" cy="10" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="38" cy="24" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="38" cy="38" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M34 38L22 38V10H34" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 24L34 24" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTreeDiagram",
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
