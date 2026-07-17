<script>
    import './home.css';
    let { data } = $props();
</script>
<div class="container-fluid">
    <div class="row">
        <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {#if data.game}
                    {#each data.game.images as image,index}
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to={index} class={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`}></button>
                    {/each}
                {:else}
                    <p>No games found.</p>
                {/if}
            </div>
            <div class="carousel-inner">
            {#if data.game}
                {#each data.game.images as image,index}
                    <div class="carousel-item {index === 0 ? 'active' : ''} carouselItems">
                    <img src="{image.name}" class="d-block w-100 carouselImgs" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{data.game.name}</h5>
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
</div>