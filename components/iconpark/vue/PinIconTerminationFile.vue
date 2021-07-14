<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 14H29" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M16 21H21" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M34 44C28.4772 44 24 39.5228 24 34C24 28.4772 28.4772 24 34 24C39.5228 24 44 28.4772 44 34C44 39.5228 39.5228 44 34 44Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 27L41 41" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M24 34C24 28.4772 28.4772 24 34 24" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 44C39.5228 44 44 39.5228 44 34" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTerminationFile",
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
