<style>
	nav{
		position:fixed;
		top:0;
		left:0;
		padding:12pt 64pt;
		box-sizing:border-box;
		width:100vw;
		z-index: 100;
		display:grid; 
		grid-template-columns: 1fr 4fr;
		background:#1A1A2E;
		color:white;
	}
	.top {
		text-align: right;
		height:18pt;
		margin-bottom: 12pt;
	}
	.bottom {
		text-align:right;
		height:18pt;
		font-weight: bold;
	}
	.logo {
		font-weight:bold; 
		font-size:1.2em;
		display:flex;
		align-items: center;
	}
	.link {
		text-decoration: none;
		margin-left:12pt;
	}
</style>

<nav>
	<p class='logo'>LOGO</p>
	<div class='contect'>
		<div class='top'>
			<div>
				<span style='margin-right:24pt;'>email: email@emailserver.net.au</span>
				<span>phone: +61 453 890 678</span>
			</div>
		</div>
		<div class='bottom'>
			<a class='link' href='.'>Home</a>
			<a class='link' href='services'>Services</a>
			<a style='color:#28DF99' class='link' href='contact'>Contact</a>
		</div>
	</div>
</nav>
