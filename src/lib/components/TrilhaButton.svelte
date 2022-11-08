<script lang="ts">
	export let text: string;
	export let url: string;
</script>

<button>
	<a href={url}>{text}</a>
</button>

<style>
	button {
		background-color: #f2e0d3;
		box-shadow: 0px 4px 4px #c57339;
		border-radius: 30px;
		width: 240px;
		height: 184px;
		border: none;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 400;
		font-size: 35px;
		line-height: 52px;
		text-align: center;
		vertical-align: middle;
	}
</style>
