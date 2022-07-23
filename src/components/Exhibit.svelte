<script lang="ts">
    export let name: string;
    export let cover: string;
    export let description: string;
    export let info: string;
    export let image1: string;
    export let image2: string;
    export let image3: string;
    export let image4: string;
</script>

<div class="exhibit">
  <div class="visible">
    <img class="first" src={cover} alt={name}>
  <br>
  <h1>{name}</h1>
  <br>
  <p class="info">{description}</p>
  </div>
  <div class="invisible">
    <img class="image" src={image1} alt={name}>
    <img class="image" src={image2} alt={name}>
    <img class="image" src={image3} alt={name}>
    <img class="image" src={image4} alt={name}>
  </div>
</div>

<style lang="scss">
  .exhibit {
    background-color: lightcoral;
    width: 250px;
    height: 500px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px;
    box-shadow: 0px 5px 5px rgb(0 0 0 / 15%);
    color: white;
    transition: 600ms ease-in-out;

    .visible {
      width: 170px;
      height: 440px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      transition: 600ms ease-in-out;

      .first {
      transition: 600ms ease-in-out;
      height: 200px;
      width: 150px; 
      border-radius: 25px;
    }

    h1 {
      transition: 600ms ease-in-out;
      max-width: 150px;
      text-align: center;
    }

    .info {
      transition: 600ms ease-in-out;
      text-align: center;
      max-width: 150px;
    }
    }


    .invisible {
      transition: 600ms ease-in-out;
      display: none;
      max-width: 200px;
      .image {
        height: 100px;
        width: 100px;
      }
    }

    /**
    &:hover {
      width: 600px;

      align-items: flex-start;

      .invisible {
        min-width: 200px;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-wrap: wrap;
      }
    }
    */
  }
</style>