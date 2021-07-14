<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><g><rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><path d="M44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 L44,24 Z" :stroke="stroke" :stroke-width="strokeWidth" :fill="fill" fill-rule="nonzero" stroke-linejoin="round"/><path d="M24,24 L24,38.5536268 C24,41.5677816 26.4858452,44.0112369 29.5,44.0112369 C32.5141548,44.0112369 35,41.5677816 35,38.5536268" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :fill="fill" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconUmbrellaOne",
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
