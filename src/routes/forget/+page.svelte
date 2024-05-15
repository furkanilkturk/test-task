<div class="p-[60px] lg:w-auto lg:p-0 flex flex-col items-center justify-center grow">
	<div class="form pt-28 md:pt-0">
		<div class="flex flex-col justify-center">
			<div class="form-text">
				<div class="flex flex-col gap-2 text-left">
					<h3 class="font-black text-[1.5rem] leading-[1.2]">Password Reset</h3>
					<p class="font-light text-[1.125rem] leading-[1]">
						To reset your password, enter the email <br /> address you use to sign in to iofrm
					</p>
				</div>
			</div>

			<div class="form-input pt-8 h-full">
				<form class="flex flex-col items-start">
					<div class="flex flex-col gap-4 w-full text-black lg:w-[22rem]">
						<input
							type="text"
							name="email"
							id="email"
							placeholder="E-mail Adress"
							class="w-full rounded-md py-2 px-4 bg-input-color placeholder:text-input-placeholder-color focus-within:outline-none focus:bg-white transition-all duration-300"
							required
						/>
						<button
							class="rounded-md w-full p-[6px_28px] bg-white font-bold text-sm text-primary-color mr-4"
							id="submit"
							type="submit">Send Reset Link</button
						>
					</div>

					<div class="form-button">
						<div class="pt-4"></div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
