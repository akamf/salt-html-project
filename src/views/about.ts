export function renderAbout(): void {
	document.getElementById('app')!.innerHTML = `
	<main class="flex-grow flex flex-col items-center justify-center text-center px-10 md:px-6 z-0 max-w-3xl mx-auto min-h-screen">
		<h1 class="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">About Me</h1>
			<p class="text-base md:text-lg text-gray-300 leading-relaxed">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl
				aliquam nunc, eget fringilla sem nulla vel sapien. Integer nec libero nec sem ultrices varius. Curabitur pretium
				nulla at mi convallis, in luctus lorem tempor. Quisque ut sapien non sem suscipit tincidunt. Fusce vel rutrum
				purus. Proin ut sem in nulla convallis blandit.
			</p>
		</main>
	`;
}
