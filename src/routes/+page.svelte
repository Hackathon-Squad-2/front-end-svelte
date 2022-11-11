<script>
	import Nav from '$lib/components/Nav.svelte';
	import Login from '$lib/components/Login.svelte';

	import '../app.css';
	import '../reset.css';
</script>

<svelte:head>
	<title>Orange Juice Evolution</title>
</svelte:head>

<div class="container-geral">
	<div class="imagem-lateral">
		<p>&lbrace;Nós te ajudamos a trilhar pelo mundo da tecnologia&rbrace;</p>
		<img src="/images/login-image.png" alt="Mulher estudando em notebook" />
	</div>

	<div class="container-conteudo">
		<Nav />
		<img src="/images/evolutionlogo.png" alt="Logo da comunidade Orange Juice" />
		<Login />
	</div>
</div>

<style>
	.container-geral {
		display: flex;
		height: calc(100vh -3px);
		justify-content: space-between;
	}

	.imagem-lateral {
		position: fixed;
		width: 32%;
	}

	.imagem-lateral p {
		color: #ffffff;
		font-family: 'Reem Kufi';
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		left: 2rem;
		line-height: 60px;
		position: absolute;
		text-align: center;
		top: 5rem;
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
	.container-conteudo img {
		display: block;
		margin: 36px auto;
		text-align: center;
		width: 240px;
	}

	@media screen and (max-width: 1827px) {
		.imagem-lateral p {
			font-size: 32px;
		}
	}

	@media screen and (max-width: 1600px) {
		.imagem-lateral p {
			top: 3rem;
		}

		.container-conteudo img {
			width: 200px;
		}
	}

	@media screen and (max-width: 1462px) {
		.imagem-lateral p {
			font-size: 28px;
		}
	}

	@media screen and (max-width: 1366px) {
		.imagem-lateral p {
			top: 2.5rem;
			line-height: 36px;
		}

		.container-conteudo img {
			margin: 24px auto 16px auto;
			width: 160px;
		}
	}

	@media screen and (max-width: 1280px) {
		.imagem-lateral p {
			font-size: 24px;
			line-height: 36px;
		}

		.container-conteudo img {
			margin: 18px auto;
		}
	}

	@media screen and (max-width: 1096px) {
		.imagem-lateral p {
			font-size: 20px;
			line-height: 36px;
		}
	}

	@media screen and (max-width: 913px) {
		.imagem-lateral p {
			font-size: 18px;
		}
	}

	@media screen and (max-width: 822px) {
		.imagem-lateral p {
			font-size: 16px;
			line-height: 36px;
		}
	}

	@media screen and (max-width: 800px) {
		.imagem-lateral p {
			top: 1.5rem;
		}

		.container-conteudo img {
			margin: 16px auto;
			width: 120px;
		}
	}
</style>
