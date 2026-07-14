<script lang="ts">
    import "./nav.css"
    import icon from '$lib/assets/WebsiteForFun.png';
    import { onMount } from 'svelte';
    onMount(() => {
        const links = document.querySelectorAll('#offCanvas a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                const closeBtn = document.querySelector('#offCanvas .btn-close');
                closeBtn?.click();
            });
        });
    });
    import AuroraText from "$lib/components/magic/aurora-text/aurora-text.svelte";
    import { SparklesText } from "$lib/components/magic/sparkles-text";
</script>
<nav class="navbar">
    <div class="container-fluid">
        <img src={icon} alt="logo" width="74" height="74" class="d-inline-block align-text-top">
        <a id="main" class="navbar-brand" href="/app/">
            <SparklesText class="text-2xl" sparklesCount={6}>Website <span style="display:inline-block"><AuroraText colors={["#FF3D3D", "#843DFF", "#3D84FF", "#3DD2FF", "#84FF3D"]}>Fun</AuroraText></span></SparklesText>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvas" aria-controls="offCanvas" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offCanvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column">
                <ul class="navbar-nav justify-content-end pe-3">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/app/games/">
                            Games
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/app/about/">
                            About
                        </a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" style="margin-left:-5px" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <ul class="navbar-nav mt-auto">
                    <hr id="divider">
                    <a type="button" class="btn btn-outline-secondary" href="/login">Login<i class="fa-solid fa-circle-user"></i></a>
                </ul>
            </div>
        </div>
    </div>
</nav>
