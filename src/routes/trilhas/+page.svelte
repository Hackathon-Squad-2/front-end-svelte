<script>
	import Nav from '$lib/components/Nav.svelte';
	import TrilhaButton from '$lib/components/TrilhaButton.svelte';

	import '../../app.css';
	import '../../reset.css';
</script>

<svelte:head>
	<title>Orange Juice Evolution - Nossas Trilhas</title>
</svelte:head>

<div class="container">
	<div class="parceiros">
		<p>PARCERIAS</p>
		<img class="fcamara" src="/images/fcamara-logo.png" alt="Logo da FCamara" />
		<img class="rocket" src="/images/rocketseat-logo.png" alt="Logo da Rocket Seat" />
		<img class="alura" src="/images/alura-logo.png" alt="Logo da Alura" />
		<img class="cubos" src="/images/cubosacademy-logo.png" alt="Logo da Cubos Academy" />
	</div>

	<div class="conteudo">
		<nav>
			<Nav />
		</nav>
		<img src="/images/evolutionlogo.png" alt="Logo da comunidade Orange Juice" />
		<p>
			O Orange Evolution consiste em trilhas totalmente gratuitas para que você possa iniciar a sua
			carreira na tecnologia. Você terá acesso a vídeos, lives, artigos, apostilas e até cursos
			gratuitos, além desses conteúdos serem da Orange Juice, de parceiros e empresas que confiamos.
		</p>
		<div class="trilhas">
			<TrilhaButton url="/fullstack" linha1="Full" linha2="Stack" />
			<TrilhaButton url="/uxui" linha1="UX/UI" linha2="Design" />
			<TrilhaButton url="/qa" linha1="QA" linha2="(Quality&ensp;Assurance)" />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		height: calc(100vh - 3px);
	}

	.parceiros {
		background-color: #c57339;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-evenly;
		margin: 0;
		position: fixed;
		width: 20%;
	}

	.parceiros p {
		color: #ffffff;
		font-family: 'Reem Kufi';
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		text-align: center;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
	}

	.parceiros img {
		margin: 0 auto;
		width: 80%;
	}

	.parceiros .alura {
		width: 60%;
	}

	.parceiros .cubos {
		width: 60%;
	}

	.conteudo {
		background-color: #f5efeb;
		margin: 0 5% 0 15%;
		width: 80%;
	}

	nav {
		position: absolute;
		right: 120px;
		width: 40%;
	}

	.conteudo img {
		display: block;
		margin: 142px auto 56px auto;
		text-align: center;
		width: 280px;
	}

	.conteudo p {
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		line-height: 38px;
		margin: 0 auto;
		text-align: center;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		width: 55%;
	}

	.trilhas {
		display: flex;
		justify-content: space-evenly;
		margin: 96px auto;
		width: 80%;
	}

	@media screen and (max-width: 1600px) {
		.conteudo img {
			margin: 96px auto 48px auto;
		}

		.trilhas {
			margin-top: 48px;
		}
	}

	@media screen and (max-width: 1366px) {
		.conteudo img {
			width: 184px;
			margin-bottom: 32px;
		}

		.conteudo p {
			font-size: 20px;
		}

		.trilhas {
			margin-top: 32px;
		}
	}

	@media screen and (max-width: 1280px) {
		.conteudo p {
			line-height: 32px;
		}
	}

	@media screen and (max-width: 1024px) {
		.conteudo img {
			width: 160px;
		}
	}

	@media screen and (max-width: 1024px) {
		.conteudo img {
			margin: 48px auto 16px auto;
		}

		.conteudo p {
			font-size: 18px;
			line-height: 28px;
			width: 75%;
		}

		.trilhas {
			margin-top: 20px;
		}
	}
</style>
