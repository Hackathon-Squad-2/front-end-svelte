<script lang="ts">
	export let url = '';
	export let linha1 = '';
	export let linha2 = '';
</script>

<button>
	<p>CURSO</p>
	<a href={url}>{linha1}<br />{linha2}</a>
	<progress />
</button>

<style>
	button {
		background-color: #f2e0d3;
		border: none;
		border-radius: 30px;
		box-shadow: 0px 4px 4px #c57339;
		height: 184px;
		width: 240px;
	}

	a {
		color: #c57339;
		font-family: 'Reem Kufi';
		font-size: 35px;
		font-style: normal;
		font-weight: 600;
		line-height: 52px;
		text-align: center;
		text-decoration: none;
		vertical-align: middle;
	}

	progress {
		margin: 0 8px;
	}
</style>
