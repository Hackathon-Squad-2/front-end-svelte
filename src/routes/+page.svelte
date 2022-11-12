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
		<div class="card">
			<p class="titulo">Login</p>
			<label class="usuario" for="user">Usuário</label>
			<input class="card-input" id="user" type="text" placeholder="&#128100;" />
			<label class="senha" for="password">Senha</label>
			<input class="card-input" id="password" type="password" placeholder="&#128477;" />
			<button class="card-button" type="input">Entrar</button>
			<div class="card-rodape">
				<a href="/matricula">Criar conta</a>
				<p>Esqueceu sua senha?</p>
			</div>
		</div>
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

	.card {
		background-color: #f2e0d3;
		border-radius: 56px;
		box-shadow: 0px 4px 4px #c57339;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: 56px;
		width: 50%;
	}

	.titulo {
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		text-align: center;
	}

	.usuario,
	.senha {
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		margin: 32px auto 8px auto;
		text-align: left;
		width: 85%;
	}

	.card-input {
		border: none;
		border-radius: 28px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-size: 24px;
		height: 56px;
		margin: 0 auto;
		padding: 0 16px;
		width: 85%;
	}

	.card-button {
		background-color: #f2e0d3;
		border: 3px solid #ffffff;
		border-color: #ffffff;
		border-radius: 30px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 32px;
		font-style: normal;
		font-weight: 600;
		margin: 56px auto 40px auto;
		text-align: center;
		width: 160px;
	}

	.card-button:hover {
		cursor: pointer;
	}

	.card-rodape {
		color: #000000;
		display: flex;
		font-family: 'Reem Kufi';
		font-size: 18px;
		justify-content: space-between;
	}

	.card-rodape a {
		color: #000000;
		text-decoration: none;
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

		.card {
			padding: 28px;
		}

		.usuario,
		.senha {
			font-size: 24px;
			margin: 24px auto 8px auto;
		}

		.card-input {
			height: 48px;
		}

		.card-button {
			font-size: 24px;
			margin: 32px auto;
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

		.card {
			padding: 20px 28px;
		}

		.titulo {
			font-size: 32px;
		}

		.usuario,
		.senha {
			font-size: 24px;
			margin: 16px auto 8px auto;
		}

		.card-input {
			height: 40px;
		}

		.card-button {
			font-size: 24px;
			margin: 28px auto;
		}

		.card-rodape {
			font-size: 16px;
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

		.card-rodape {
			font-size: 16px;
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

		.card {
			padding: 8px 28px;
		}

		.titulo {
			font-size: 24px;
		}

		.usuario,
		.senha {
			font-size: 18px;
		}

		.card-input {
			height: 32px;
		}

		.card-button {
			font-size: 18px;
			margin: 20px auto;
		}
		.card-rodape {
			font-size: 14px;
		}
	}
</style>
