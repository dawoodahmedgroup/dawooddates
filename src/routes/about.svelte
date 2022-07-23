<script context="module">
    export const prerender = true;
</script>

<script lang="ts">
    import Icon from '@iconify/svelte';
    import Certification from '../components/Certification.svelte';
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
            <button on:click={() => hideNavAndRedirect('#')} class="mobilenavitem">About</button>
            <button on:click={() => hideNavAndRedirect('/exhibitions')} class="mobilenavitem">Exhibitions</button>
            <button on:click={() => hideNavAndRedirect('/products')} class="mobilenavitem">Products</button>
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
            <button on:click={() => redirect('#')} class="navitem">About</button>
            <button on:click={() => redirect('/exhibitions')} class="navitem">Exhibitions</button>
            <button on:click={() => redirect('/products')} class="navitem">Products</button>
            <button on:click={() => redirect('/#contact')} class="navitem">Contact</button>
            <button class="navitem-call" on:click={() => redirect('tel:923002039046')}><Icon icon="carbon:phone-filled" /></button>
            <button class="mobile-menu" on:click={() => showMobileNav = true}><Icon icon="carbon:overflow-menu-vertical" /></button>
        </div>
    </div>
    <section class="about">
        <div class="aboutText">
            <h1 class="fx">Dawood Dates</h1>
            <br>
            <p><b class="fx">Dawood Dates</b> is familiar around the world for its guaranteed quality and taste.
                We are a <b class="fx">Pakistan</b> based exporter and supplier of GMO Free
                and Gluten Free Fresh Unpitted Dates, Pitted Dates, Chopped Dates (Dextrose and Rice Coated) & Industrial Dates.
                
                <b class="fx">Dawood Dates</b> is division of Dawood Ahmed & Co. We are registered with Federal Board Of Revenue and are a member of Karachi Chamber of Commerce and Industries of Pakistan serving our
                customers across the globe.
            </p>
            <br>
            <h2 class="fx">Inquires</h2>
            <br>
            <p>For further information/inquires, please fill in the contact form <a href="/#contact"><b class="fx">here.</b></a>
                or contact us via the following methods.
            </p>
            <ul>
                <li>Phone: <a href="tel:+923002039046"><b class="fx">+923002039046</b></a> & <a href="tel:+923218271808"><b class="fx">+923218271808</b></a></li>
                <li>Email: <a href="mailto:info@dawooddates.com"><b class="fx">info@dawooddates.com</b></a></li>
            </ul>
        </div> 
        <div class="certifications">
            <h1 class="fx">Certifications</h1>
            <br>
            <Certification name="halal" />
            <Certification name="haccp" />
            <Certification name="iso" />
        </div>
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
                width: 137px;
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
                    background-color: #0087ca;
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

            .fx {
                border: none;
                display: inline;
                position: relative;
                cursor: pointer;
                color: black;

                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #0087ca;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }

                &:hover:after{
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }
            }

            .blue {
                border: none;
                display: inline;
                cursor: pointer;
                color: rgb(0, 0, 91);
            }

    .about {
        height: calc(100vh - 95px);
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 75px;

        .aboutText {
            margin-left: 50px;
            width: 1000px;
            background: #74BDCB;
            height: calc(100vh - 190px);
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0px 5px 5px rgb(0 0 0 / 15%);
            padding: 45px;
            color: white;

            h1 {
                font-size: 46px;
            }

            h2 {
                font-size: 34px;
            }
            
            p {
                font-size: 24px;
                word-wrap: break-word;
            }

            ul > li {
                font-size: 24px;
            }

            a {
                text-decoration: none;
            }
        }

        .certifications {
            margin-right: 50px;
            width: 350px;
            background: #74BDCB;
            color: white;
            height: calc(100vh - 95px - 125px);
            border-radius: 15px;
            box-shadow: 0px 5px 5px rgb(0 0 0 / 15%);
            display: flex;
            flex-direction: column;
            padding: 35px;
            align-items: center;
            justify-content: center;

            h1 {
                font-size: 34px;
                width: 254px;
            }
        }
    }

    @media (max-width: 1175px) {
        .about {
            gap: 37.5px;

            .certifications {
                width: 250px;
                align-items: center;
                justify-content: center;

                h1 {
                    font-size: 24px;
                    width: 180px;
                }
            }
        }
    }

    @media (max-width: 925px) {
      .about {
        gap: 25px;

        .aboutText {
            padding: 25px;
            width: 880px;
            height: calc(100vh - 95px - 190px);

            h1{
                font-size: 46px;
            }

            h2{
                font-size: 22px;
            }

            
        }

        .certifications {
            height: calc(100vh - 95px - 190px);

            h1 {
                font-size: 20px;
                width: 150px;
            }
        }
      }
    }

    @media (max-width: 780px) {
        .about {
            .aboutText {
                height: calc(100vh - 95px - 65px);
            }
        }
    }

    @media (max-width: 430px) {
        .about {
            flex-direction: column;
            height: 150vh;
            padding: 15px;

            .aboutText {
                width: 400px;
                margin: 0;
                height: 77.5vh;

                h1 {
                    font-size: 30px;
                }

                p {
                    font-size: 20px;
                }

                ul > li {
                    font-size: 20px;
                }
            }
        }
    }

    @media (max-width: 400px) {
        .about {
            .aboutText {
                width: 337px;
                height: 81vh;
            }
        }
    }
</style>