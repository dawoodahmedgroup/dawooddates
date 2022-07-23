<script context="module">
    export const prerender = true;
</script>

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
            <button on:click={() => hideNavAndRedirect('/about')} class="mobilenavitem">About</button>
            <button on:click={() => hideNavAndRedirect('/exhibitions')} class="mobilenavitem">Exhibitions</button>
            <button on:click={() => hideNavAndRedirect('#')} class="mobilenavitem">Products</button>
            <button on:click={() => hideNavAndRedirect('/#contact')} class="mobilenavitem">Contact</button>
            <button class="mobilenavitem-call" on:click={() => hideNavAndRedirect('tel:923002039046')}><Icon icon="carbon:phone-filled" /></button>
            <button class="close-menu" on:click={() => showMobileNav = false}><Icon icon="carbon:close-filled" /></button>
        </div>
    </div>
{/if}
<main class="container {showMobileNav ? "blur unscrollable":""}">
    <div class="navbar">
        <img on:click={() => redirect('/')} class="logo" alt="logo" src="./logoImage.png">
        <div class="navlinks">
            <button on:click={() => redirect('/')} class="navitem">Home</button>
            <button on:click={() => redirect('/about')} class="navitem">About</button>
            <button on:click={() => redirect('/exhibitions')} class="navitem">Exhibitions</button>
            <button on:click={() => redirect('#')} class="navitem">Products</button>
            <button on:click={() => redirect('/#contact')} class="navitem">Contact</button>
            <button class="navitem-call" on:click={() => redirect('tel:923002039046')}><Icon icon="carbon:phone-filled" /></button>
            <button class="mobile-menu" on:click={() => showMobileNav = true}><Icon icon="carbon:overflow-menu-vertical" /></button>
        </div>
    </div>
    <section class="products">
        <ProductCard name="FAQ" imageURL="./products/faq-fresh.jpeg" description="Fresh FAQ Dates"/>
        <ProductCard name="GAQ" imageURL="./products/gaq-fresh.jpeg" description="Fresh GAQ Dates"/>
        <ProductCard name="SELECT" imageURL="./products/select-fresh.jpeg" description="Fresh SELECT Dates"/>
        <ProductCard name="Mixed" imageURL="./products/mixed-fresh.jpeg" description="Mixed Dates"/>
        <ProductCard name="Industrial" imageURL="./products/industrial-pitted.jpeg" description="Pitted Industrial Dates"/>
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

    .products {
        height: calc(100vh - 95px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 50px;
        flex-wrap: wrap;
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
                width: 135px;
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
        width: 100vw;
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
</style>