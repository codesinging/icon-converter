<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42L10 6Z" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M17 12L31 12" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17" cy="21" r="2" fill="currentColor"/><circle cx="17" cy="27" r="2" fill="currentColor"/><circle cx="17" cy="33" r="2" fill="currentColor"/><circle cx="24" cy="21" r="2" fill="currentColor"/><circle cx="24" cy="27" r="2" fill="currentColor"/><circle cx="24" cy="33" r="2" fill="currentColor"/><circle cx="31" cy="21" r="2" fill="currentColor"/><circle cx="31" cy="27" r="2" fill="currentColor"/><circle cx="31" cy="33" r="2" fill="currentColor"/></svg>
</template>

<script>
export default {
    name: "PinIconComputerOne",
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
