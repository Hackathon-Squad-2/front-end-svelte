<script>
	import TrilhaButton from '$lib/components/TrilhaButton.svelte';

	import '../../app.css';
	import '../../reset.css';
</script>

<div class="container">
	<div class="parceiros">
		<img src="/images/fcamara-logo.png" alt="Logo da FCamara" />
		<img src="/images/rocketseat-logo.png" alt="Logo da Rocket Seat" />
		<img src="/images/alura-logo.png" alt="Logo da Alura" />
		<img src="/images/cubosacademy-logo.png" alt="Logo da Cubos Academy" />
	</div>

	<div class="conteudo">
		<img src="/images/orange-logo.png" alt="Logo da comunidade Orange Juice" />
		<p>
			O Orange Evolution consiste em trilhas totalmente gratuitas para que você possa iniciar a sua
			carreira na tecnologia. Você terá acesso a vídeos, lives, artigos, apostilas e até cursos
			gratuitos, além desses conteúdos serem da Orange Juice, de parceiros e empresas que confiamos.
		</p>
		<div class="trilhas">
			<TrilhaButton url="/fullstack" text="FullStack" />
			<TrilhaButton url="/uxui" text="UX/UI&ensp;Design" />
			<TrilhaButton url="/qa" text="QA&emsp;Quality&ensp;Assurance" />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
	}

	.parceiros {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		background-color: #f2e0d3;
		width: 20%;
		height: 100vh;
		margin: 0;
	}

	.parceiros img {
		width: 80%;
		margin: 0 auto;
	}

	.conteudo {
		background-color: #f5efeb;
		width: 80%;
		height: 100vh;
	}

	.conteudo img {
		display: block;
		width: 230px;
		text-align: center;
		margin: 104px auto;
	}

	.conteudo p {
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;
		line-height: 38px;
		text-align: center;
		color: #c57339;
		width: 55%;
		margin: 48px auto;
	}

	.trilhas {
		display: flex;
		margin: 148px auto;
		justify-content: space-evenly;
		width: 80%;
	}
</style>
