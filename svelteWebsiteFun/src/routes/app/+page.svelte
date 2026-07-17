<script lang="ts">
    import './home_main.css';
    import './mobile_main.css';
    let { data }: { data: any } = $props();


</script>
<div class="container-fluid">
    <div class="row">
        <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {#if data.games?.length}
                        {#each data.games as game,index}
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to={index} class={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`}></button>
                        {/each}
                {:else}
                    <p>No games found.</p>
                {/if}
            </div>
            <div class="carousel-inner">
                {#if data.games?.length}
                    {#each data.games as game,index}
                        <div class="carousel-item {index === 0 ? 'active' : ''} carouselItems">
                            <img src="{game.main_image}" class="d-block w-100 carouselImgs" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{game.name}</h5>
                            </div>
                        </div>
                    {/each}
                {:else}
                    <p>No games found.</p>
                {/if}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
    </div>
</div>
