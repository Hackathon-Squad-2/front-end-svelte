<script lang="ts">
	export let titulo = '';
	export let icon = '';
	export let createdAt = '';
</script>

<div class="conteudo">
	<div class="cabecalho">
		<p>{titulo}</p>
		<i>{icon}</i>
	</div>
	<p class="data-criacao">CRIADO EM {createdAt}</p>
	<div class="buttons">
		<button class="editar">EDITAR</button>
		<button class="excluir">EXCLUIR</button>
	</div>
</div>

<style>
	.conteudo {
		background-color: #f2e0d3;
		border-radius: 30px;
		box-shadow: 0px 4px 4px #c57339;
		height: 184px;
		padding: 24px;
		width: 512px;
		margin: 16px 0;
	}

	.cabecalho {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cabecalho p {
		font-family: 'Reem Kufi';
		font-size: 30px;
		line-height: 45px;
	}

	.cabecalho i {
		font-size: 35px;
	}

	.data-criacao {
		font-family: 'Reem Kufi';
		color: #8c5228;
	}

	.buttons {
		margin-top: 56px;
	}

	.buttons button {
		background: #f2e0d3;
		border: 3px solid #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 30px;
		height: 40px;
		width: 160px;
		margin-right: 16px;
	}
</style>
