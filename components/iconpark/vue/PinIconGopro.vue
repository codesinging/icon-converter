<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="7" width="13" height="34" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="24" y="13" width="19" height="22" rx="3" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="33.5" cy="24.5" r="3.5" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M18 24H24" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="9" y="15" width="5" height="5" rx="2.5" fill="currentColor"/></svg>
</template>

<script>
export default {
    name: "PinIconGopro",
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
