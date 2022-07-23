<script lang="ts">
    export let name: string;
    export let cover: string;
    export let description: string;
    export let image1: string;
    export let image2: string;
    export let image3: string;
    export let image4: string;

    function clickRedirect(path: string) {
      window.open(`https://dawooddates.com${path}`, '_blank');
    }

    
</script>

<div class="exhibit">
  <div class="visible">
    <img on:click={()=>clickRedirect(cover)} class="first" src={cover} alt={name}>
  <br>
  <h1>{name}</h1>
  <br>
  <p class="info">{description}</p>
  </div>
  <div class="invisible">
    <img on:click={()=>clickRedirect(image1)} class="image" src={image1} alt={name}>
    <img on:click={()=>clickRedirect(image2)} class="image" src={image2} alt={name}>
    <img on:click={()=>clickRedirect(image3)} class="image" src={image3} alt={name}>
    <img on:click={()=>clickRedirect(image4)} class="image" src={image4} alt={name}>
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
    justify-content: space-between;
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
      cursor: pointer;
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
      .image {
        height: 133px;
        width: 100px;
        margin: 2px;
        border-radius: 25px;
        cursor: pointer;
      }
    }

    
    &:hover {
      width: 600px;

      align-items: flex-start;

      .invisible {
        height: 275px;
        width: 204px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-wrap: wrap;
        align-self: center;
      }
    }
    
  }
</style>