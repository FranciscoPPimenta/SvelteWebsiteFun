<script lang="ts">
    import './login.css';
	import { RetroGrid } from "$lib/components/magic/retro-grid";
</script>

<div class="container-fluid">
    <div class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">    
        <RetroGrid
        lightLineColor="var(--foreground)"
        darkLineColor="var(--foreground)"
        opacity={0.3}
    />
</div>


</div>

