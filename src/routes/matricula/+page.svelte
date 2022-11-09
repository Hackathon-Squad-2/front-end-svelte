<script>
	import Cadastro from '$lib/components/Cadastro.svelte';
	import Nav from '$lib/components/Nav.svelte';

	const abreChave = '{';
	const fechaChave = '}';
</script>

<svelte:head>
	<title>Orange Juice Evolution - Matrícula</title>
</svelte:head>

<div class="container-geral">
	<div class="imagem-lateral">
		<p>{abreChave}Nós te ajudamos a trilhar pelo mundo da tecnologia{fechaChave}</p>
		<img src="/images/login-image.png" alt="Mulher estudando em seu Notebook" />
	</div>

	<div class="container-conteudo">
		<Nav />
		<Cadastro />
	</div>
</div>

<style>
	.container-geral {
		display: flex;
		justify-content: space-between;
	}

	.imagem-lateral p {
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		text-align: center;
		line-height: 60px;
		color: #ffffff;
		position: absolute;
		width: 25%;
		top: 6rem;
		left: 2em;
	}

	.imagem-lateral img {
		height: 100vh;
	}

	.container-conteudo {
		width: 33%;
		margin: 0 auto;
	}
</style>
