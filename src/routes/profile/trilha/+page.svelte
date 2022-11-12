<script lang="ts">
	import ConteudoTrilha from '$lib/components/ConteudoTrilha.svelte';
	import NavInterna from '$lib/components/NavInterna.svelte';

	import '../../../reset.css';
	import '../../../app.css';
</script>

<div class="cabecalho">
	<img src="/images/evolutionlogo-interno.png" alt="Logo da Orange Juice Evolution" />
	<NavInterna />
</div>

<div class="conteudo">
	<div class="trilha">
		<div class="trilha-cabecalho">
			<p class="titulo">
				Nome da Trilha<img
					src="/images/orangelogo.png"
					alt="Logo simplificado da Orange Juice Evolution"
				/>
			</p>

			<p class="tempo">Tempo Estimado: XX horas</p>
		</div>
		<ConteudoTrilha
			titulo="Conteúdo em artigo"
			icon="&#128366;"
			creator="Joãozinho"
			action="CONTINUAR"
			status="Em Andamento"
			color="#FFF279"
		/>

		<ConteudoTrilha
			titulo="Conteúdo em vídeo"
			icon="&#9654;"
			creator="Josézão"
			action="COMEÇAR"
			status=""
			color="#FF5353"
		/>
	</div>

	<div class="info">
		<div class="progresso">
			<p>Progresso</p>
			<progress />
		</div>
		<div class="criador">Trilha montada por: <br /> Joãozinho</div>
		<div class="descricao">
			Essa trilha foi montada pensando em quem está começando na área, ou passando por uma migração
			de carreira e ainda não sabe exatamente o que é esse mundo. Então, aperta o cinto e vem com a
			gente nessa jornada!
		</div>
		<button class="voltar"> &#8630; <a href="/profile">Voltar para meus cursos</a></button>
	</div>
</div>

<style>
	.cabecalho {
		display: flex;
		justify-content: space-between;
	}

	.cabecalho img {
		width: 200px;
		margin: 24px;
	}

	.conteudo {
		display: flex;
	}

	.trilha {
		background-color: #ffffff;
		border-radius: 50px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin: 16px 2%;
		padding: 56px;
		width: 70%;
	}

	.trilha-cabecalho {
		display: flex;
		justify-content: space-between;
	}

	.titulo {
		font-family: 'Reem Kufi';
		font-style: normal;
		font-size: 36px;
		margin-bottom: 32px;
	}

	.titulo img {
		height: 40px;
		width: 40px;
	}

	.tempo {
		font-family: 'Reem Kufi';
		font-style: normal;
		font-size: 24px;
		color: #8c5228;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	.info {
		margin: 16px auto;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		left: 83%;
		position: fixed;
		width: 15%;
	}

	.progresso {
		background-color: #ffffff;
		border-radius: 30px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		text-align: center;
		width: 100%;
		height: 112px;
		margin: 8px auto;
	}

	.progresso p {
		margin-top: 16px;
		font-family: 'Reem Kufi';
		font-size: 18px;
		text-align: center;
	}

	.progresso progress {
		margin-top: 32px;
	}

	.criador {
		background-color: #ffffff;
		border-radius: 30px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		text-align: center;
		margin: 8px 0;
		padding: 28px 40px;
		font-family: 'Reem Kufi';
		line-height: 22px;
	}

	.descricao {
		background-color: #ffffff;
		border-radius: 30px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		padding: 16px 56px;
		margin: 8px auto;
		font-family: 'Reem Kufi';
		font-size: 17px;
		line-height: 26px;
		text-align: center;
	}

	.voltar {
		background-color: #ffffff;
		border-radius: 30px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		margin: 8px auto;
		width: 100%;
		height: 48px;
		border: none;
		font-family: 'Reem Kufi';
	}

	.voltar a {
		text-decoration: none;
		color: #000000;
	}

	@media screen and (max-width: 1680px) {
		.descricao {
			line-height: 20px;
		}
	}

	@media screen and (max-width: 1680px) {
		.progresso {
			height: 80px;
		}

		.progresso progress {
			margin-top: 16px;
		}

		.criador {
			padding: 20px 40px;
		}
	}

	@media screen and (max-width: 1600px) {
		.titulo {
			font-size: 32px;
			margin-bottom: 16px;
		}

		.descricao {
			font-size: 16px;
			line-height: 18px;
			padding: 16px 40px;
		}
	}

	@media screen and (max-width: 1366px) {
		.trilha {
			width: 65%;
		}

		.cabecalho img {
			width: 136px;
			margin: 12px;
		}

		.titulo {
			font-size: 24px;
			margin-bottom: 16px;
		}

		.tempo {
			font-size: 24px;
		}

		.info {
			left: 78%;
			width: 20%;
		}

		.progresso {
			height: 64px;
		}

		.progresso progress {
			margin-top: 8px;
		}

		.criador {
			padding: 20px 32px;
			line-height: 16px;
		}

		.descricao {
			font-size: 16px;
			line-height: 16px;
			padding: 16px 28px;
		}
	}

	@media screen and (max-width: 1024px) {
		.trilha {
			width: 60%;
		}

		.info {
			left: 76%;
			width: 22%;
		}
	}

	@media screen and (max-width: 800px) {
		.cabecalho img {
			width: 104px;
		}

		.trilha {
			padding: 28px;
		}

		.titulo,
		.tempo {
			font-size: 18px;
		}

		.titulo img {
			height: 18px;
			width: 18px;
		}

		.info {
			position: relative;
			width: 26%;
			left: 0;
		}

		.descricao {
			font-size: 14px;
			line-height: 14px;
			padding: 16px;
		}
	}
</style>
