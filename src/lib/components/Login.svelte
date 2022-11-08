<div class="card">
	<p class="titulo">Login</p>
	<label class="usuario" for="user">Usuário</label>
	<input id="user" type="text" placeholder="user" />
	<label for="password">Senha</label>
	<input id="password" type="password" placeholder="password" />
	<button type="input">Entrar</button>
	<div class="rodape">
		<p>Criar conta</p>
		<p>Esqueceu sua senha?</p>
	</div>
</div>

<style>
	.card {
		background-color: #f2e0d3;
		box-shadow: 0px 4px 4px #c57339;
		display: flex;
		flex-direction: column;
		padding: 56px;
		border-radius: 56px;
		width: 60%;
		margin: 32px auto;
	}

	.titulo {
		color: #ffffff;
		font-family: 'Reem Kufi';
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		text-align: center;
	}

	label {
		color: #ffffff;
		font-family: 'Reem Kufi';
		font-size: 29px;
		font-style: normal;
		font-weight: 400;
		margin: 32px auto 8px auto;
		text-align: left;
		width: 70%;
	}

	input {
		border: none;
		border-radius: 28px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-size: 40px;
		height: 56px;
		width: 70%;
		margin: 0 auto;
		padding: 0 16px;
		box-shadow: #000000 25%;
	}

	button {
		color: #ffffff;
		background-color: #f2e0d3;
		border: 1px solid #ffffff;
		border-color: #ffffff;
		border-radius: 30px;
		width: 40%;
		margin: 56px auto 40px auto;
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;
		text-align: center;
	}

	button:hover {
		cursor: pointer;
	}

	.rodape {
		color: #ffffff;
		display: flex;
		font-family: 'Reem Kufi';
		justify-content: space-between;
	}
</style>
