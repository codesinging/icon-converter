<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 14H29" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16 21H21" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><circle cx="34" cy="34" r="10" transform="rotate(90 34 34)" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 36L34 39" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><circle cx="34" cy="30" r="2" fill="currentColor"/></svg>
</template>

<script>
export default {
    name: "PinIconAbnormal",
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
