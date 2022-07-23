<script lang="ts">
    export let name: string;
    export let imageURL: string;
    export let description: string;
</script>

<div class="card">
  <img src={imageURL} alt={name} class="picture">
  <br>
  <h1>{name}</h1>
  <br>
  <p>{description}</p>
</div>

<style lang="scss">
  .card {
    background-color: darkblue;
    box-shadow: 0px 5px 5px rgb(0 0 0 / 15%);
    border-radius: 25px;
    width: 275px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    img {
      height: 200px;
      width: 200px;
      border-radius: inherit;
    }
  }
</style>