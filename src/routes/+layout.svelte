<script>
	import '../app.css';
	import '@fontsource/lato/300.css';
	import '@fontsource/lato/700.css';
	import '@fontsource/lato/900.css';

	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-screen">
	<div class="bg-image bg-cover bg-center w-[550px] hidden lg:block z-10">
		<div class="logo">
			<a href="/">
				<img src="/logo-dark.svg" alt="logo" class="w-[100px] fixed top-1/2 left-[220px]" /></a
			>
		</div>
	</div>

	<!-- mobile logo -->

	<a href="/" class="lg:hidden absolute top-12 left-14">
		<img src="/logo.svg" alt="logo" class="w-[100px]" />
	</a>

	{#if $page.url.pathname !== '/forget'}
		<div class="p-[60px] lg:w-auto lg:p-0 flex flex-col items-center justify-center grow">
			<div class="form pt-28 md:pt-0">
				<div class="flex flex-col justify-center">
					<div class="form-text">
						<div class="flex flex-col gap-2 text-left">
							<h3 class="font-black text-[1.5rem] leading-[1.2]">
								Get more things done with <br /> Loggin platform.
							</h3>
							<p class="font-light text-[1.125rem] leading-[1.2]">
								Access to the most powerfull tool in <br class="lg:hidden" /> the
								<br class="hidden lg:flex" /> entire design and web industry.
							</p>
						</div>
					</div>

					<div class="page-links flex gap-4 pt-8">
						<a
							href="/"
							class={`${$page.url.pathname === '/' ? 'font-bold  after:bg-opacity-100  ' : 'font-light after:bg-opacity-50'}  relative after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:bg-white  transition-all duration-300`}
						>
							Login
						</a>
						<a
							href="/register"
							class={`${$page.url.pathname === '/register' ? 'font-bold  after:bg-opacity-100  ' : 'font-light after:bg-opacity-50'}  relative after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:bg-white  transition-all duration-300`}
						>
							Register
						</a>
					</div>
					<div class="form-input pt-8 h-full">
						<slot />
					</div>
				</div>
			</div>
		</div>
	{:else}
		<slot />
	{/if}
</div>
