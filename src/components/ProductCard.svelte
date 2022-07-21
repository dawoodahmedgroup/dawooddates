<script lang="ts">
    export let name: string;
    export let imageURL: string;
    export let description: string;
</script>

<div class="card">

    <div class="imgBox">
      <img src={imageURL} alt={name} class="item">
    </div>
  
    <div class="contentBox">
      <h3>{name}</h3>
      <br>
      <h2 class="description">{description}</h2>
      <br>
      <a href="tel:923213903089" class="buy">Call For Purchase</a>
    </div>
  
</div>


<style lang="scss">
   .card {
  position: relative;
  width: 320px;
  height: 510px;
  background: #4FABBD;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 50px;
}

.card::before {
  content: "";
  position: absolute;
  top: -50%;
  width: 100%;
  height: 100%;
  background: #74BDCB;
  transform: skewY(345deg);
  transition: 0.5s;
}

.card:hover::before {
  top: -70%;
  transform: skewY(390deg);
}

.card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 600;
  font-size: 6em;
  color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 5px rgb(0 0 0 / 15%);
}

.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
}


.card .contentBox {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  overflow: hidden;
}

.card .contentBox h3 {
  font-size: 20px;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card .contentBox .description {
  font-size: 18px;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
}

.card .contentBox .buy {
  position: relative;
  top: 100px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #fff;
  text-decoration: none;
  background: #000;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;
}

.card:hover .contentBox .buy {
  top: 0;
  opacity: 1;
}

.item {
  height: 300px;
  width: auto;
}
</style>