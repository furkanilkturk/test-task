<form class="flex flex-col items-start">
	<div class="flex flex-col gap-4 w-full text-black lg:w-[22rem]">
		<input
			type="text"
			name="name"
			id="name"
			placeholder="Full Name"
			class="w-full rounded-md py-2 px-4 bg-input-color placeholder:text-input-placeholder-color focus-within:outline-none focus:bg-white transition-all duration-300"
			required
		/>

		<input
			type="text"
			name="email"
			id="email"
			placeholder="E-mail Adress"
			class="w-full rounded-md py-2 px-4 bg-input-color placeholder:text-input-placeholder-color focus-within:outline-none focus:bg-white transition-all duration-300"
			required
		/>
		<input
			type="text"
			name="password"
			id="password"
			placeholder="Password"
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
