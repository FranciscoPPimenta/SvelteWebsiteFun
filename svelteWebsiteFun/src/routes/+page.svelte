<script>
  import './home.css';
  import './mobile.css';
  import { goto } from '$app/navigation';

</script>
<div class="container-fluid centered">
  <h1 class="text-center">Website Fun</h1>
  <p class="text-center">Small Project where I can create something I enjoy!<br>It's purpose is to just have information about certain games,<br>and their mechanics.<br>(for now)</p>
  <button class="button" onclick={() => goto('/app')}><a class="forward" href="./app/">Get Started</a></button>
</div>
