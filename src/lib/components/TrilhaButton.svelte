<script lang="ts">
	export let linha1: string;
	export let linha2: string;
	export let url: string;
</script>

<button>
	<a href={url}>{linha1}<br />{linha2}</a>
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
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		vertical-align: middle;
	}
</style>
