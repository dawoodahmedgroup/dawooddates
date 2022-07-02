<script lang="ts">
    import Icon from '@iconify/svelte';
    import Popup from '../components/Popup.svelte'
    import ProductCard from '../components/ProductCard.svelte';

    function redirect(path: string) {
        window.location.href = path;
    }

    let showContact;

    let formValues = {
        name: '',
        email: '',
        message: ''
    };
</script>

<main class="container">
    <div class="navbar">
        <img on:click={() => redirect('/')} class="logo" alt="logo" src="./logoImage.png">
        <div class="navlinks">
            <button class="navitem">Home</button>
            <button class="navitem">About</button>
            <button on:click={() => redirect('#products')} class="navitem">Products</button>
            <button on:click={() => showContact = true} class="navitem">Contact</button>
            <button class="navitem-call" on:click={() => redirect('tel:923002039046')}><Icon icon="carbon:phone-filled" /></button>
        </div>
    </div>
    <header>
        <h1>Dawood Dates</h1>
        <h2>Quality Redifined.</h2>
    </header>
    <section class="infocard">
        <div class="infoContainer">
            <h1>Dawood Dates is the leading company in the dates industry, setting high standards of quality, and assuring customers of good product.</h1>
        </div>
    </section>
    <section id="products" class="products">
        <div class="product">
            <ProductCard name="1" description="description" imageURL="./items/test.jpg"/>
        </div>
        <div class="product">
            <ProductCard name="2" description="description here" imageURL="./items/test.jpg"/>
        </div>
    </section>
</main>
<Popup bind:show={showContact}>
   <h2 class="contacttext">Contact</h2>
   <form class="contactForm" action="">
    <input id="name" required placeholder="Name" type="name" bind:value={formValues.name}>
    <br>
    <input id="email" required placeholder="Email" type="email" bind:value={formValues.email}>
    <br>
    <input id="Message" required placeholder="Message" type="text" bind:value={formValues.message}>
    <br>
    <input type="submit" value="Send Message">
   </form>
   
</Popup>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;900&display=swap');
    .container {
        display: flex;
        flex-direction: column;
        width: 100vw;
        background: #E7F2F8;
    }

    header {
        margin-top: 25px;
        display: flex;
        gap: 15px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100vw;

        h1 {
            margin-top: 50px;
            font-weight: 900;
            font-size: 100px;
        }

        h2 {
            font-size: 25px;
        }
    }

    ul {
        li {
            list-style: none;
        }
    }

    .navbar {
        border-bottom: 1px solid #dadce0;
        background: #fff4f4;
        width: 100vw;
        height: 100px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.149);

        /* Layout */
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            width: 140px;
            height: 70px;
            margin-left: 45px;
            cursor: pointer;
        }

        @keyframes smoothColourChange {
            0% { 
                color: #272727;
            }

            50% {
                color: #1b1b1b;
            }

            100% {
                color: black;
            }
        }
        
        .navlinks {
            display: flex;
            gap: 15px;
            flex-direction: row;
            margin-right: 45px;

            .navitem {
                font-size: 1.35rem;
                height: 50px;
                width: 110px;
                border: none;
                cursor: pointer;
                background: #fff4f4;
                border-radius: 20px;
                transition: ease-in 200ms;
                color: #464646;

                &:hover {
                    color: black;
                    background-color: #ffe9e9;
                    animation: smoothColourChange 1.75s;
                }
            }

            .navitem-call {
                font-size: 1.35rem;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                width: 50px;
                border: none;
                cursor: pointer;
                background: #fff4f4;
                border-radius: 20px;
                transition: ease-in 200ms;
                color: #464646;

                &:hover {
                    color: black;
                    transform: rotateZ(15deg);
                    background-color: #ffe9e9;
                    animation: smoothColourChange 1.75s;
                }
            }
        }
       
    }

    .contactForm {
        input {
            width: 500px;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            border: none;
            border-bottom: 2px solid red;
            transition: ease-in-out 600ms;

            &:focus {
                border: 2px solid red;
            }
        }

        textarea {
            resize: none;
            width: 500px;
            height: 150px;
}


        input[type=submit] {
            background: blue;
            color: white;
            border-bottom: 2px solid rgb(85, 255, 0);
        }
    }

    .infocard {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .infoContainer {
        height: 265px;
        width: 500px;
        display: flex;
        margin-top: 50px;
        padding: 30px;
        background: #74BDCB;
        border-radius: 15px;
        box-shadow: 0px 5px 5px rgb(0 0 0 / 15%);

        h1 {
            font-size: 28px;
            color: white;
        }
    }

    .contacttext {
        margin-bottom: 15px;
        border-bottom: 2px solid red;
    }

    .products {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }
</style>