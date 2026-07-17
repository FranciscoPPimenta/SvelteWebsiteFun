<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import { ModeWatcher } from "mode-watcher";
	
</script>
<ModeWatcher />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
