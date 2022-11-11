<nav>
	<a href="/">Home</a>
	<a href="/trilhas">Sobre as trilhas</a>
	<input type="text" />
</nav>

<style>
	nav {
		align-items: center;
		display: flex;
		margin-top: 40px;
		justify-content: space-between;
	}

	nav a {
		color: #000000;
		font-family: 'Reem Kufi';
		font-style: normal;
		font-weight: 600;
		font-size: 29px;
		text-align: center;
		text-decoration: none;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		width: 216px;
	}

	input {
		border: none;
		border-radius: 28px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-size: 24px;
		height: 56px;
		margin-right: 32px;
		padding: 0 16px;
		width: 216px;
	}

	@media screen and (max-width: 1366px) {
		nav a {
			font-size: 24px;
		}

		input {
			height: 40px;
		}
	}

	@media screen and (max-width: 1152px) {
		nav a {
			font-size: 20px;
			margin-right: 8px;
		}

		input {
			width: 184px;
		}
	}

	@media screen and (max-width: 1152px) {
		nav a {
			font-size: 18px;
			margin-right: 6px;
		}

		input {
			width: 160px;
		}
	}
</style>
