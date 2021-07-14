<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M7 9V24C7 27.3137 9.68629 30 13 30H35C38.3137 30 41 27.3137 41 24V9" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 10C7 6.68629 9.68629 4 13 4H35C38.3137 4 41 6.68629 41 10V10C41 13.3137 38.3137 16 35 16H13C9.68629 16 7 13.3137 7 10V10Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="10" r="2" fill="currentColor"/><circle cx="21" cy="10" r="2" fill="currentColor"/><circle cx="27" cy="10" r="2" fill="currentColor"/><circle cx="33" cy="10" r="2" fill="currentColor"/><path d="M19 30V44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 30V44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconOscillator",
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
