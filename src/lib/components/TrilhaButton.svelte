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
		border: 5px solid #ffffff;
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

	@media screen and (max-width: 1600px) {
		button {
			height: 152px;
			width: 200px;
		}

		a {
			font-size: 28px;
			line-height: 48px;
		}
	}

	@media screen and (max-width: 1366px) {
		button {
			height: 120px;
			width: 152px;
		}

		a {
			font-size: 24px;
			line-height: 32px;
		}
	}

	@media screen and (max-width: 1280px) {
		button {
			height: 104px;
			width: 140px;
		}

		a {
			font-size: 20px;
			line-height: 28px;
		}
	}

	@media screen and (max-width: 1280px) {
		button {
			height: 96px;
			width: 128px;
		}

		a {
			line-height: 20px;
		}
	}
</style>
