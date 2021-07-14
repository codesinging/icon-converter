<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 43C29 40.2386 26.7614 38 24 38C21.2386 38 19 40.2386 19 43" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 42.1091C18.0797 43.322 20.9607 44 24 44C27.0393 44 29.9203 43.322 32.5 42.1091" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="15" r="3" fill="currentColor"/><circle cx="11" cy="23" r="3" fill="currentColor"/><circle cx="24" cy="11" r="3" fill="currentColor"/><circle cx="33" cy="15" r="3" fill="currentColor"/><circle cx="37" cy="23" r="3" fill="currentColor"/></svg>
</template>

<script>
export default {
    name: "PinIconHdmiConnector",
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
