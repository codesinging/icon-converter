<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M15 26.3137C15 26.3137 19.5962 25.9602 22.7782 22.7782C25.9601 19.5962 26.3137 15 26.3137 15L34.0657 27.1817C35.3205 29.1535 35.0374 31.7322 33.3848 33.3848C31.7322 35.0374 29.1535 35.3205 27.1817 34.0657L15 26.3137Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="15" cy="15" r="11" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M5.65685 25.4559L25.4558 5.65694" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 33L42 41L33 41" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconMicrophoneOne",
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
