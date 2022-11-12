<script>
	import NavInterna from '$lib/components/NavInterna.svelte';
	import TrilhaInterna from '$lib/components/TrilhaInterna.svelte';

	import '../../reset.css';
	import '../../app.css';
</script>

<div class="cabecalho">
	<img src="/images/evolutionlogo-profile.png" alt="Logo da Oranje Juice evolution" />
	<div class="nav-interna">
		<NavInterna />
	</div>
</div>

<div class="user">
	<img src="/images/user.png" alt="Imagem de perfil" />
	<p>@USER</p>
</div>

<div class="trilhas">
	<p>Meus Cursos</p>
	<div class="trilhas-cadastradas">
		<TrilhaInterna url="/profile/trilha" linha1="Full" linha2="Stack" />
		<TrilhaInterna url="/profile/trilha" linha1="UX/UI" linha2="Design" />
		<TrilhaInterna url="/profile/trilha" linha1="QA" linha2="(Quality&ensp;Assurance)" />
	</div>
</div>

<style>
	.cabecalho {
		background-color: #c57339;
		display: flex;
		justify-content: space-between;
		height: 30vh;
	}

	.cabecalho img {
		height: 200px;
		margin: 24px;
	}

	.nav-interna {
		position: absolute;
		right: 0;
		width: 50%;
		justify-content: end;
	}

	.user {
		text-align: center;
		position: relative;
		top: -64px;
	}

	.user img {
		width: 264px;
	}

	.user p {
		font-family: 'Reem Kufi';
		font-weight: 400;
		font-size: 40px;
		text-align: center;
		color: #c57339;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
	}

	.trilhas p {
		font-family: 'Reem Kufi';
		font-weight: 400;
		font-size: 24px;
		margin: 0 0 32px 16%;
	}

	.trilhas-cadastradas {
		display: flex;
		justify-content: space-evenly;
	}

	@media screen and (max-width: 1600px) {
		.cabecalho img {
			height: 184px;
		}

		.user img {
			width: 200px;
		}
	}

	@media screen and (max-width: 1366px) {
		.cabecalho img {
			height: 136px;
		}

		.user img {
			width: 176px;
		}
	}

	@media screen and (max-width: 1280px) {
		.cabecalho img {
			height: 112px;
		}

		.user img {
			width: 142px;
		}
	}

	@media screen and (max-width: 1280px) {
		.cabecalho img {
			height: 96px;
		}

		.user {
			top: -32px;
		}

		.user img {
			width: 112px;
		}

		.user p {
			font-size: 28px;
		}
	}
</style>
