<script lang="ts">
	//import { api } from '../../services/api';

	//let name: string = '';
	//let email: string = '';
	//let password: string = '';

	//const submit = async () => {
	//	if (!name || !email || !password) return;

	//const response = await api.post('/users/auth/login', {
	//	email,
	//	password
	//});

	//const { user, token } = response.data;

	// escreve no `writable` (storage)

	//console.log(user);
	//console.log(token);

	// Adiciona o token a api, para autenticar requisições
	//api.defaults.headers.common.authorization = `Bearer ${token}`;
	//};
</script>

<div class="card">
	<img src="/images/evolutionlogo-cadastro.png" alt="Logo da comunidade Orange Juice" />
	<input id="user" type="text" placeholder="(icon)Nome" />
	<input id="email" type="email" placeholder="(icon) E-mail" />
	<input id="password" type="password" placeholder="(icon)Senha" />
	<button>Cadastrar</button>
	<p>
		Ao clicar em "cadastrar”, declaro que concordo com as <a href="/">Políticas de Privacidade</a>
		e os <a href="/">Termos de Uso</a> da Orange Juice.
	</p>
	<p>Já possui uma conta? Fazer <a href="/">Login</a></p>
</div>

<style>
	.card {
		background-color: #f2e0d3;
		border-radius: 56px;
		box-shadow: 0px 4px 4px #c57339;
		display: flex;
		flex-direction: column;
		margin: 72px auto 0 auto;
		padding: 36px;
		width: 60%;
	}

	img {
		margin: 16px auto;
		width: 210px;
	}

	input {
		background-color: #f2e0d3;
		border: none;
		border-bottom: 1px solid #c57339;
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 24px;
		font-weight: 600;
		height: 56px;
		margin: 16px auto;
		padding: 0 8px;
		width: 80%;
	}

	input::placeholder {
		color: #c57339;
	}

	input:focus {
		outline: none;
	}

	button {
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
		margin: 28px auto 16px auto;
		text-align: center;
		width: 40%;
		height: 64px;
	}

	button:hover {
		cursor: pointer;
	}

	p {
		color: #000000;
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		text-align: center;
		margin: 8px auto;
	}

	p a {
		color: #f98837;
		text-decoration: none;
	}
</style>
