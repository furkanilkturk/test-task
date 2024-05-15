<form class="flex flex-col">
	<div class="flex flex-col gap-4 text-black lg:w-[22rem]">
		<input
			type="text"
			name="email"
			id="email"
			placeholder="E-mail Address"
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
	<div class="pt-4 flex items-center gap-2">
		<input
			id="remember"
			type="checkbox"
			class="appearance-none bg-transparent cursor-pointer border-2 border-solid border-white rounded size-4 checked:bg-white transition-all duration-300 after:checked:content-['']"
		/>
		<label for="remember" class="text-sm font-bold tracking-normal cursor-pointer"
			>Remember me</label
		>
	</div>
	<div class="form-button">
		<div class="pt-8">
			<button
				class="rounded-md p-[6px_28px] bg-white font-bold text-sm text-primary-color mr-4"
				id="submit"
				type="submit">Login</button
			>
			<a href="/forget" class="font-bold text-sm tracking-tight">Forget password?</a>
		</div>
	</div>
</form>
<div class="media-links pt-8 flex gap-3 text-xs font-bold">
	<span class="text-left font-thin">Or login with </span>
	<a href="/">Facebook</a>
	<a href="/">Google</a>
	<a href="/">Linkedin</a>
</div>
