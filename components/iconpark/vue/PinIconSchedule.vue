<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="40" height="30" rx="2" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 6V14" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M25 23L14 23" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M34 31L14 31" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M34 6V14" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSchedule",
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
