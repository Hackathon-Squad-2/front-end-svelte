<script lang="ts">
	export let titulo = '';
	export let icon = '';
	export let creator = '';
	export let action = '';
	export let status = '';
	export let color = '';
</script>

<div class="conteudo">
	<div class="cabecalho">
		<p>{titulo}</p>
		<i>{icon}</i>
	</div>
	<p class="criador">{creator}</p>
	<div class="status">
		<button class="acao">{action}</button>
		<div class="status-interno">
			<p class="status-texto">{status}</p>
			<div class="cor" style="background-color: {color};" />
		</div>
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

	.criador {
		font-family: 'Reem Kufi';
		color: #8c5228;
	}

	.status {
		display: flex;
		justify-content: space-between;
		margin-top: 56px;
	}

	.acao {
		background: #f2e0d3;
		border: 3px solid #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 30px;
		height: 40px;
		width: 192px;
	}

	.status-interno {
		display: flex;
		align-items: center;
	}

	.status-texto {
		font-family: 'Reem Kufi';
		font-size: 18px;
		margin-right: 8px;
	}

	.cor {
		border-radius: 16px;
		height: 32px;
		width: 32px;
	}

	@media screen and (max-width: 1600px) {
		.conteudo {
			height: 152px;
		}
	}

	@media screen and (max-width: 1600px) {
		.conteudo {
			width: 400px;
		}
	}
</style>
