<script lang="ts">
    export let name: string;

    if(!name) {
        name = "haccp"
    }
</script>

{#if name === 'halal'}
    <img src={`./certifications/${name}.jpg`} alt={name}>
{:else}
    <img src={`./certifications/${name}.png`} alt={name}>
{/if}

<style lang="scss">
    img {
            width: 115px;
            height: 115px;
            border-radius: 100px;
        }
</style>