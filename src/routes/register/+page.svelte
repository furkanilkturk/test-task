<script lang="ts">
	import { registerUser } from '$lib/auth';

	let email = '';
	let password = '';
	let name = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		try {
			await registerUser(email, password);

			alert('You have successfully registered');
		} catch (error) {
			if (error instanceof Error) {
				console.error('Registration error:' + error.message);
				alert(error.message);
			} else {
				console.error('Unexpected error:', error);
			}
		}
		email = '';
		password = '';
		name = '';
	}
</script>

<form class="flex flex-col items-start" on:submit={handleSubmit}>
	<div class="flex flex-col gap-4 w-full text-black lg:w-[22rem]">
		<input
			type="text"
			name="name"
			id="name"
			placeholder="Full Name"
			bind:value={name}
			class="w-full rounded-md py-2 px-4 bg-input-color placeholder:text-input-placeholder-color focus-within:outline-none focus:bg-white transition-all duration-300"
			required
		/>

		<input
			type="text"
			name="email"
			id="email"
			placeholder="E-mail Adress"
			bind:value={email}
			class="w-full rounded-md py-2 px-4 bg-input-color placeholder:text-input-placeholder-color focus-within:outline-none focus:bg-white transition-all duration-300"
			required
		/>
		<input
			type="password"
			name="password"
			id="password"
			placeholder="Password"
			bind:value={password}
			class="w-full rounded-md py-2 px-4 bg-input-color placeholder:text-input-placeholder-color focus-within:outline-none focus:bg-white transition-all duration-300"
			required
		/>
	</div>

	<div class="form-button">
		<div class="pt-8">
			<button
				class="rounded-md p-[6px_28px] bg-white font-bold text-sm text-primary-color mr-4"
				id="submit"
				type="submit">Register</button
			>
		</div>
	</div>
</form>
<div class="media-links pt-8 flex gap-3 text-xs font-bold">
	<span class="text-left font-thin">Or register with </span>
	<a href="/">Facebook</a>
	<a href="/">Google</a>
	<a href="/">Linkedin</a>
</div>
