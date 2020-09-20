<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte'
</script>

<style>
	* {
		box-sizing:border-box;
		background:#F4F6FF;
	}
</style>

<Nav/>

<main style='margin-top:72pt'>
	<slot></slot>
</main>

<Footer />