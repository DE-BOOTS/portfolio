<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">BootsyCoderNk</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a
						class="nav-link"
						aria-current="page"
						class:active={$page.url.pathname === '/'}
						href="/"
						data-sveltekit-preload-data>Home</a
					>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/about'}
						href="/about"
						data-sveltekit-preload-data>About</a
					>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/contact'}
						href="/contact"
						data-sveltekit-preload-data>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
<main class="container">
	<slot />
</main>

<style>
	.navbar-brand {
		font-weight: 900;
		color: aqua;
	}
	.active {
		color: salmon;
	}
</style>
