export function renderHome(): void {
	document.getElementById('app')!.innerHTML = `
    <main class="flex-grow flex flex-col items-center justify-center text-center px-10 md:px-6 z-0 max-w-3xl mx-auto min-h-screen">
        <h1 class="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
				ANDREAS<br class="hidden sm:inline"> KAMF
			</h1>
			<p class="mt-6 text-xs md:text-base text-gray-400 tracking-widest uppercase">
				System Developer
			</p>
		</main>
	`;
}