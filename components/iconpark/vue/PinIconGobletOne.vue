<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-18b46970fab09ba)"><path d="M5.73657 24.1212L10.6863 29.071C15.7632 34.1478 23.9943 34.1478 29.0711 29.071V29.071C34.1479 23.9942 34.1479 15.763 29.0711 10.6862L24.1213 5.73647" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.0002 29.9999L36 36" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="14" cy="13.9999" rx="13" ry="7" transform="rotate(-45 14 13.9999)" :stroke="stroke" :stroke-width="strokeWidth"/><ellipse cx="38.0002" cy="37.9999" rx="6" ry="3" transform="rotate(-45 38.0002 37.9999)" :stroke="stroke" :stroke-width="strokeWidth"/></g><defs><clipPath id="icon-18b46970fab09ba"><rect width="48" height="48" fill="currentColor"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconGobletOne",
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
