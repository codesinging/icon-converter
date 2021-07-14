<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="5" y="5" width="38" height="38" rx="3" :stroke="stroke" :stroke-width="strokeWidth"/><rect x="11" y="12" width="8" height="24" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="25" y="12" width="12" height="6" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="25" cy="24" r="2" fill="currentColor"/><circle cx="25" cy="30" r="2" fill="currentColor"/><circle cx="25" cy="36" r="2" fill="currentColor"/><circle cx="31" cy="24" r="2" fill="currentColor"/><circle cx="31" cy="30" r="2" fill="currentColor"/><circle cx="31" cy="36" r="2" fill="currentColor"/><circle cx="37" cy="24" r="2" fill="currentColor"/><circle cx="37" cy="30" r="2" fill="currentColor"/><circle cx="37" cy="36" r="2" fill="currentColor"/></svg>
</template>

<script>
export default {
    name: "PinIconPhoneOne",
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
