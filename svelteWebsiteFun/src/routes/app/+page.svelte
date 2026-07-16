<script lang="ts">
    import './home.css';
    let { data }: { data: any } = $props();


</script>
<div class="container-fluid">
    <div class="row">
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
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
                            <img src="{game.image}" class="d-block w-100 carouselImgs" alt="...">
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
    <div class="row" id="card-row">
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</div>
