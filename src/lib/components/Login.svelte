<div class="card">
	<p class="titulo">Login</p>
	<label class="usuario" for="user">Usuário</label>
	<input
		id="user"
		type="text"
		placeholder="
  &#128100;"
	/>
	<label for="password">Senha</label>
	<input
		id="password"
		type="password"
		placeholder="
  &#128477;"
	/>
	<button type="input">Entrar</button>
	<div class="rodape">
		<a href="/matricula">Criar conta</a>
		<p>Esqueceu sua senha?</p>
	</div>
</div>

<style>
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

	label {
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		margin: 32px auto 8px auto;
		text-align: left;
		width: 85%;
	}

	input {
		border: none;
		border-radius: 28px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-size: 24px;
		height: 56px;
		margin: 0 auto;
		padding: 0 16px;
		width: 85%;
	}

	button {
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

	button:hover {
		cursor: pointer;
	}

	.rodape {
		color: #000000;
		display: flex;
		font-family: 'Reem Kufi';
		font-size: 18px;
		justify-content: space-between;
	}

	.rodape a {
		color: #000000;
		text-decoration: none;
	}

	@media screen and (max-width: 1600px) {
		.card {
			padding: 28px;
		}

		label {
			font-size: 24px;
			margin: 24px auto 8px auto;
		}

		input {
			height: 48px;
		}

		button {
			font-size: 24px;
			margin: 32px auto;
		}
	}

	@media screen and (max-width: 1366px) {
		.card {
			padding: 20px 28px;
		}

		.titulo {
			font-size: 32px;
		}

		label {
			font-size: 24px;
			margin: 16px auto 8px auto;
		}

		input {
			height: 40px;
		}

		button {
			font-size: 24px;
			margin: 28px auto;
		}

		.rodape {
			font-size: 16px;
		}
	}

	@media screen and (max-width: 1279px) {
		.rodape {
			font-size: 16px;
		}
	}

	@media screen and (max-width: 800px) {
		.card {
			padding: 8px 28px;
		}

		.titulo {
			font-size: 24px;
		}

		label {
			font-size: 18px;
		}

		input {
			height: 32px;
		}

		button {
			font-size: 18px;
			margin: 20px auto;
		}
		.rodape {
			font-size: 14px;
		}
	}
</style>
