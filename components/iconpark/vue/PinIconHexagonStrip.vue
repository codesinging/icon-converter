<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M19.0002 4H29.0002V15.3397L38.8207 9.66982L43.8207 18.3301L34.0002 24L43.8207 29.6698L38.8207 38.3301L29.0002 32.6602V44H19.0002V32.6602L9.17969 38.3301L4.17969 29.6698L14.0002 24L4.17969 18.3301L9.17969 9.66982L19.0002 15.3397V4Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconHexagonStrip",
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
