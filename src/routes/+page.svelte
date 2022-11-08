<script>
	import Nav from '$lib/components/Nav.svelte';
	import Login from '$lib/components/Login.svelte';

	import '../app.css';
	import '../reset.css';
</script>

<div class="container-geral">
	<div class="imagem-lateral">
		<img src="/images/login-image.png" alt="Mulher estudando em seu Notebook" />
	</div>

	<div class="container-conteudo">
		<Nav />
		<img src="/images/orange-logo.png" alt="Logo da comunidade Orange Juice" />
		<Login />
	</div>
</div>

<style>
	.container-geral {
		display: flex;
		justify-content: space-between;
	}

	.imagem-lateral img {
		height: 100vh;
	}

	.container-conteudo {
		width: 33%;
		margin: 0 auto;
	}
	.container-conteudo img {
		display: block;
		height: 133px;
		width: 210px;
		margin: 72px auto;
		text-align: center;
	}
</style>
