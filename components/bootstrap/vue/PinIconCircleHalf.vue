<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="fill" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
</svg>
</template>

<script>
export default {
    name: "PinIconCircleHalf",
    props: {
        size: {
            type: [Number, String],
            default: '1rem'
        },
        color: {
            type: String,
            default: 'currentColor'
        },
    },
    computed: {
        fill() {
            return this.color || 'currentColor';
        }
    },
}
</script>
