<script lang="ts">
    import Icon from '@iconify/svelte';
    import ProductCard from '../components/ProductCard.svelte';
    let showMobileNav: boolean;

    function redirect(path: string) {
        window.location.href = path;
    }

    function hideNavAndRedirect(path: string) {
        showMobileNav = false;
        window.location.href = path;
    }

    function clickOutside(node: any) {
        const handleClick = (event: any) => {
            if (!node.contains(event.target)) {
                node.dispatchEvent(new CustomEvent("outclick"));
            }
        };

        document.addEventListener("click", handleClick, true);

        return {
            destroy() {
                document.removeEventListener("click", handleClick, true);
            }
        };
    }
</script>


{#if showMobileNav}
    <div class="mobilenav" use:clickOutside on:outclick={() => showMobileNav = false}>
        <img on:click={() => redirect('/')} class="mobileimg" alt="logo" src="./logoImage.png">
        <div class="links">
            <button on:click={() => hideNavAndRedirect('/')} class="mobilenavitem">Home</button>
            <button class="mobilenavitem">About</button>
            <button on:click={() => hideNavAndRedirect('#products')} class="mobilenavitem">Products</button>
            <button on:click={() => hideNavAndRedirect('#contact')} class="mobilenavitem">Contact</button>
            <button class="mobilenavitem-call" on:click={() => hideNavAndRedirect('tel:923002039046')}><Icon icon="carbon:phone-filled" /></button>
            <button class="close-menu" on:click={() => showMobileNav = false}><Icon icon="carbon:close-filled" /></button>
        </div>
    </div>
    {/if}
<main class="container {showMobileNav ? "blur unscrollable":""}">
    <div class="navbar">
        <img on:click={() => redirect('/')} class="logo" alt="logo" src="./logoImage.png">
        <div class="navlinks">
            <button class="navitem">Home</button>
            <button class="navitem">About</button>
            <button on:click={() => redirect('#products')} class="navitem">Products</button>
            <button on:click={() => redirect('#contact')} class="navitem">Contact</button>
            <button class="navitem-call" on:click={() => redirect('tel:923002039046')}><Icon icon="carbon:phone-filled" /></button>
            <button class="mobile-menu" on:click={() => showMobileNav = true}><Icon icon="carbon:overflow-menu-vertical" /></button>
        </div>
    </div>
    <header>
        <h1>Dawood Dates</h1>
        <h2>High Quality Dates</h2>
        <h2>From Pakistan To The World.</h2>
    </header>
    <section class="infocard ">
        <div class="infoContainer">
            <h1>Dawood Dates is the leading company in the dates industry, setting high standards of quality, and assuring customers of good product.</h1>
        </div>
    </section>
    <section id="products" class="products ">
        <ProductCard name="Al Mahir Aseel Dates" description="High Quality Aseel Dates" imageURL="./items/croppedPouch.png"/>
        <ProductCard name="Al Mahir Aseel Dates" description="High Quality Aseel Dates" imageURL="./items/croppedPouch.png"/>
        <ProductCard name="Al Mahir Aseel Dates" description="High Quality Aseel Dates" imageURL="./items/croppedPouch.png"/>
    </section>
    <section id="contact">
        <h2 class="contacttext">Contact</h2>
        <!--action="/api/contact" method="post"-->
   <form name="contact" netlify data-splitbee-event="Contact" class="contactForm">
    <input name="name" required placeholder="Name" type="name">
    <br>
    <input name="email" required placeholder="Email" type="email">
    <br>
    <input name="message" required placeholder="Message" type="text">
    <br>
    <input type="submit" value="Submit">
   </form>
    </section>
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;900&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        width: 100vw;
        background: #E7F2F8;
        transition: 600ms ease-in-out;
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

    .navbar {
        border-bottom: 1px solid #dadce0;
        background: #fff4f4;
        width: 100vw;
        height: 95px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.149);

        /* Layout */
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            width: 130px;
            height: 65px;
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
                width: 115px;
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

            .mobile-menu {
                display: none;
            }
        }
       
    }

    #contact {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        width: 100vw;
        flex-direction: column;
        gap: 10px;

        .contactForm {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        input {
            width: 500px;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            border: none;
            border-bottom: 2px solid red;
            transition: ease-in-out 600ms;

            &:focus {
                border-bottom: 2px solid red;
                border-top: none;
                border-left: none;
                border-right: none;
            }
        }

        input[type=text] {
            resize: none;
            width: 500px;
            height: 150px;
}


        input[type=submit] {
            background: blue;
            color: white;
            border-bottom: 2px solid rgb(85, 255, 0);
            cursor: pointer;
        }
    }
    }

    .infocard {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 75px;
        padding-bottom: 25px;
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
        margin: 25px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    @media (max-width: 900px) {
       .navitem {
        display: none;
       }

       .navbar>.navlinks>.navitem-call {
        display: none;
       }

       .navbar>.navlinks>.mobile-menu {
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
                    background-color: #ffe9e9;
                    animation: smoothColourChange 1.75s;
                }
       }
    }

    @media (max-width: 800px) {
        header>h1{
            font-size: 56px;
        }
    }

    @media (max-width:475px) {
        header>h1{
            font-size: 42px;
        }
    }

    @media (max-width:550px) {
        .infoContainer {
            width: 400px;
            word-wrap: normal;
            height: 330px;
        }
    }

    .blur {
        transition: 600ms ease-in-out;
width:100%;
height:100%;
background-size:cover;
-webkit-filter: blur(4px);
-moz-filter: blur(4px);
-ms-filter: blur(4px);
-o-filter: blur(4px);
filter: blur(4px);
}

    .unscrollable {
        height: 100vh;
        overflow: hidden;
    }

    .mobilenav {
        transition: 600ms ease-in-out;
        position: fixed;
        width: 400px;
        height: 100%;
        z-index: 99 !important;
        background-color: white;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.149);
        display: flex;
        gap: 15px;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        overflow: hidden;

        .mobileimg {
            width: 200px;
            height: auto;
        }

        .links {
            display: flex;
            flex-direction: column;
            padding: 5px;
            gap: 25px;
            margin-top: 60px;
            align-items: center;

            .mobilenavitem-call {
                font-size: 1.35rem;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                width: 50px;
                border: none;
                cursor: pointer;
                background: white;
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

            .close-menu {
                font-size: 1.35rem;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                width: 50px;
                border: none;
                cursor: pointer;
                background: white;
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

            .mobilenavitem {
                width: 100px;
                border: none;
                background: white;
                font-size: 25px;
                display: inline-block;
  position: relative;
  cursor: pointer;

                &:after {
                    content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: 
#0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
                }

                &:hover:after{
                    transform: scaleX(1);
  transform-origin: bottom left;
                }
            }
        }
    }

    @media (max-width: 430px) {
        #contact>.contactForm>input {
            width: 300px;
        }
        #contact>.contactForm>input[type=text]{
            width: 300px;
        }
    }

    @media (max-width: 380px) {
        header>h1{
            font-size: 38px;
        }

        header>h2{
            font-size: 22px;
        }

        .infocard>.infoContainer {
            width: 275px;
            height: 362px;

            h1{
                font-size: 25px;
            }
        }
    }
</style>