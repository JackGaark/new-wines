<script lang="ts">
    import {media} from "$lib/api";
    import type {MovieListResult} from "$lib/types";
    

    export let movies: MovieListResult[];
    export let next: string | null;
</script>

<div class="viewport">
    </div>


<div class="results">
    {#each movies as movie}
    <img
        alt={movie.title}
        src={media(movie.poster_path, 500)}
    />
    {/each}
</div>

<style>
    .results {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
    }

    a {
        width: 100%;
        height: auto;
        aspect-ratio: 2/3;
        padding: 0.5rem;
    }

    img {
        width: 100%;
    }
</style>