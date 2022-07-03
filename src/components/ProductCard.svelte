<script lang="ts">
    export let name: string;
    export let imageURL: string;
    export let description: string;
</script>

<div class="ProductCard">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={imageURL} alt="Image">
    <h1 class="name">{name}</h1>
    <h2 class="description">{description}</h2>
</div>

<style lang="scss">
   
    .ProductCard {
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        background-color: #74BDCB;
        height: 400px;
        color: white;
        width: 400px;
        padding: 8px;
        margin-top: 30px;
        margin-bottom: 70px;
        box-shadow: 0px 5px 5px rgb(0 0 0 / 15%);

        img {
            height: 200px;
            border-radius: 15px;
        }
    }
</style>