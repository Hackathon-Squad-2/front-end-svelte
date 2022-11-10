<script>
	import Cadastro from '$lib/components/Cadastro.svelte';
	import Nav from '$lib/components/Nav.svelte';

	import '../../reset.css';
	import '../../app.css';
</script>

<svelte:head>
	<title>Orange Juice Evolution - Matrícula</title>
</svelte:head>

<div class="container-geral">
	<div class="imagem-lateral">
		<p>&lbrace;Nós te ajudamos a trilhar pelo mundo da tecnologia&rbrace;</p>
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
		height: 100vh;
	}

	.imagem-lateral {
		position: fixed;
		width: 32%;
	}

	.imagem-lateral p {
		color: #ffffff;
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		left: 2em;
		line-height: 60px;
		position: absolute;
		text-align: center;
		top: 6rem;
		width: 80%;
	}

	.imagem-lateral img {
		height: calc(100vh - 3px);
		width: 100%;
	}

	.container-conteudo {
		margin: 0 15% 0 45%;
		width: 40%;
	}
</style>
