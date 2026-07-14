<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import { MorphingText } from "$lib/components/magic/morphing-text";
	import { LineShadowText } from "$lib/components/magic/line-shadow-text";
	import { mode } from "mode-watcher";
	
</script>
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
