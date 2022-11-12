<script>
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
		<div class="card">
			<img
				class="card-img"
				src="/images/evolutionlogo-cadastro.png"
				alt="Logo da comunidade Orange Juice"
			/>
			<input class="card-input" id="user" type="text" placeholder="&#128100; Nome" />
			<input class="card-input" id="email" type="email" placeholder="&#9993; E-mail" />
			<input class="card-input" id="password" type="password" placeholder="&#128477; Senha" />
			<p class="erro" contenteditable="true" />
			<button class="card-button">Cadastrar</button>
			<p class="card-text">
				Ao clicar em "cadastrar”, declaro que concordo com as <a href="/privacy"
					>Políticas de Privacidade</a
				>
				e os <a href="/privacy">Termos de Uso</a> da Orange Juice.
			</p>
			<p class="card-text">Já possui uma conta? Fazer <a href="/">Login</a></p>
		</div>
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
		left: 2rem;
		line-height: 60px;
		position: absolute;
		text-align: center;
		top: 5rem;
		width: 80%;
	}

	.imagem-lateral img {
		height: 100vh;
		width: 100%;
	}

	.container-conteudo {
		margin: 0 15% 0 45%;
		width: 40%;
	}

	.card {
		background-color: #f2e0d3;
		border-radius: 56px;
		box-shadow: 0px 4px 4px #c57339;
		display: flex;
		flex-direction: column;
		margin: 64px auto 0 auto;
		padding: 0 36px;
		width: 75%;
	}

	.card-img {
		margin: 16px auto;
		width: 210px;
	}

	.erro {
		color: darkred;
		font-family: 'Reem Kufi';
		font-size: 18px;
		font-weight: 600;
		text-align: center;
		height: 18px;
	}

	.card-input {
		background-color: #f2e0d3;
		border: none;
		border-bottom: 1px solid #c57339;
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 24px;
		font-weight: 600;
		height: 56px;
		margin: 16px auto;
		padding: 8px;
		width: 80%;
	}

	.card-input::placeholder {
		color: #c57339;
	}

	.card-input:focus {
		outline: none;
	}

	.card-button {
		background-color: #f2e0d3;
		border: 3px solid #ffffff;
		border-color: #ffffff;
		border-radius: 30px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		margin: 6px auto;
		text-align: center;
		width: 40%;
		height: 64px;
	}

	.card-button:hover {
		cursor: pointer;
	}

	.card-text {
		color: #000000;
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 24px;
		text-align: center;
		margin: 8px auto;
	}

	.card-text a {
		color: #f98837;
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

		.card {
			margin-top: 56px;
		}

		.card-img {
			width: 160px;
			margin-bottom: 0;
		}

		.card-input {
			height: 32px;
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

		.card {
			margin-top: 32px;
		}

		.card-img {
			width: 120px;
		}

		.card-input {
			font-size: 18px;
			height: 20px;
			margin-bottom: 8px;
		}

		.erro {
			height: 16px;
			font-size: 16px;
		}

		.card-button {
			font-size: 20px;
			height: 40px;
		}

		.card-text,
		.card-text a {
			font-size: 16px;
			line-height: 22px;
		}
	}

	@media screen and (max-width: 1280px) {
		.imagem-lateral p {
			font-size: 24px;
			line-height: 36px;
		}

		.card {
			margin-top: 24px;
		}
	}

	@media screen and (max-width: 1096px) {
		.imagem-lateral p {
			font-size: 20px;
			line-height: 36px;
		}
	}

	@media screen and (max-width: 1024px) {
		.card-button {
			width: 45%;
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

		.card-img {
			width: 80px;
		}

		.card-input {
			font-size: 18px;
			height: 18px;
			margin: 6px auto;
		}

		.erro {
			height: 12px;
			font-size: 12px;
			margin: 6px auto;
		}

		.card-button {
			margin: 0 auto;
		}

		.card-text,
		.card-text a {
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 6px;
		}
	}
</style>
