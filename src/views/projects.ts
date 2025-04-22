export function renderProjects(): void {
	document.getElementById('app')!.innerHTML = `
<main class="flex-grow px-6 py-24 text-white bg-gray-800">
	<h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-center mb-16">
		Projects
	</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

		<div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col">
			<img src="./assets/img/html.png" alt="Project 1" class="w-full h-48 object-cover">
			<div class="p-6 flex flex-col flex-grow">
				<h2 class="text-xl font-semibold mb-2">Project One</h2>
				<p class="text-gray-300 text-sm flex-grow">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus elit nec risus sollicitudin, a rhoncus sapien tincidunt.
				</p>
				<a href="https://github.com/saltsthlm/kvarnen-jfs-sthlm-2025-03-31-lab-pattern-builder" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition w-fit self-start">
					Go to project →
				</a>
			</div>
		</div>

		<div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col">
			<img src="./assets/img/py.png" alt="Project 2" class="w-full h-48 object-cover">
			<div class="p-6 flex flex-col flex-grow">
				<h2 class="text-xl font-semibold mb-2">Project Two</h2>
				<p class="text-gray-300 text-sm flex-grow">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
				</p>
				<a href="https://github.com/saltsthlm/kvarnen-jfs-sthlm-2025-03-31-lab-saltfeed-day-05" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition w-fit self-start">
					Go to project →
				</a>
			</div>
		</div>

		<div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col">
			<img src="./assets/img/react.png" alt="Project 3" class="w-full h-48 object-cover">
			<div class="p-6 flex flex-col flex-grow">
				<h2 class="text-xl font-semibold mb-2">Project Three</h2>
				<p class="text-gray-300 text-sm flex-grow">
					Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
				</p>
				<a href="https://github.com/saltsthlm/jfs-sthlm-2025-03-31-lab-css-lab" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition w-fit self-start">
					Go to project →
				</a>
			</div>
		</div>

	</div>
</main>
	`;
}
