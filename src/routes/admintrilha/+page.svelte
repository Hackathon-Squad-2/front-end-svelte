<script>
	import AdminBar from '$lib/components/AdminBar.svelte';
	import NavInterna from '$lib/components/NavInterna.svelte';
	import TrilhaAdmin from '$lib/components/TrilhaAdmin.svelte';

	import '../../app.css';
	import '../../reset.css';
</script>

<div class="cabecalho">
	<nav class="top-bar">
		<img
			class="logo"
			src="/images/evolutionlogo-interno.png"
			alt="Logo da Orange Juice Evolution"
		/>
		<NavInterna />
	</nav>
	<div class="admin-bar">
		<AdminBar />
	</div>
</div>

<div class="card">
	<div class="conteudo-card">
		<div class="cabecalho-card">
			<div class="titulo">
				<p class="titulo-texto">NOME DA TRILHA</p>
				<img
					class="logo-simples"
					src="/images/orangelogo.png"
					alt="Logo simplificado da Orange Juice Evolution"
				/>
			</div>

			<p class="data-criacao">CRIADO EM 12/11/2022</p>
			<p class="criador">Joãozinho</p>
		</div>
		<div class="trilha">
			<TrilhaAdmin titulo="Nome do Conteudo" icon="&#128366;" createdAt="12/11/2022" />
			<TrilhaAdmin titulo="Conteúdo em Video" icon="&#9654;" createdAt="12/11/2022" />
		</div>
	</div>
	<div class="buttons">
		<button>NOVO</button>
		<button>EDITAR TRILHA</button>
		<button>EXCLUIR</button>
	</div>
</div>

<style>
	.top-bar {
		display: flex;
		justify-content: space-between;
	}

	.logo {
		width: 232px;
		margin: 24px 0 16px 48px;
	}

	.card {
		background: #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 50px;
		display: flex;
		justify-content: space-between;
		width: 70%;
		margin: 48px;
		padding: 56px;
	}

	.titulo {
		display: flex;
	}

	.titulo-texto {
		font-family: 'Reem Kufi';
		font-size: 36px;
	}

	.logo-simples {
		display: block;
		width: 32px;
		height: 32px;
	}

	.data-criacao,
	.criador {
		font-family: 'Reem Kufi';
		color: #8c5228;
	}

	.buttons {
		display: flex;
		flex-direction: column;
	}

	.buttons button {
		width: 200px;
		height: 56px;
		background: #f2e0d3;
		border: 3px solid #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 30px;
		margin: 16px;
		font-family: 'Reem Kufi';
		font-weight: 700;
		font-size: 22px;
		text-align: center;
		color: #c57339;
	}
</style>
