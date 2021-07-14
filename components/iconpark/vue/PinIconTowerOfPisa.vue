<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-a8c2142bbee178)"><path d="M4 44H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.2493 7.47464L36.7041 11.6157L28 44L10.9999 44L21.2493 7.47464Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M19.3174 6.957L38.6359 12.1334" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.2114 18.5481L35.5299 23.7245" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.4823 20.9318L26.5176 17.0681" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M13.106 30.1392L32.4245 35.3156" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.4823 31.9318L23.5176 28.0681" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="25.1826" y="4.38739" width="10" height="4" rx="1" transform="rotate(15 25.1826 4.38739)" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.4823 42.9318L20.5176 39.0681" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></g><defs><clipPath id="icon-a8c2142bbee178"><rect width="48" height="48" fill="currentColor"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconTowerOfPisa",
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
