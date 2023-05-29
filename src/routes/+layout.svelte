<script>
    import * as api from '$lib/api';
	import logo from '$lib/images/logo.svg';
	import tmdb from '$lib/images/tmdb.svg';
	import '../styles.css';
</script>


<nav>
    <a href="/">
        <img alt="Ward" src={logo} />
    </a>

    <div class="links">
        <a href="/contact">Contact</a>
        <a href="/about">Apropos</a>
        <a href="/search">Recherche</a>
        <a href="/newsletter">Info Lettre</a>
        <a href="/login">Log In</a>
        <a href="/cart">Panier</a>
    </div>
</nav>

<main>
    <slot />
</main>

<footer>
    <p>Data by
        <a href="https://www.globalwinescore.com/">
            <img alt="The wine DB" src={tmdb}>
        </a>
    </p>
</footer>

<style>
    nav {
        display: flex;
        width: 100%;
        height: 3rem;
        align-items: center;
        justify-content: space-between;
        max-width: var(--column);
        padding: 0 var(--side);
        color: var(--accent);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        height: 1rem;
    }

    .links {
        display: flex;
        gap: 1rem;
    }

    footer {
        display: flex;
        justify-content: center;
        height: 5rem;
    }

</style>