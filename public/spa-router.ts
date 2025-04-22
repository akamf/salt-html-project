const routes: Record<string, () => void> = {};

export function addRoute(path: string, renderFunction: () => void): void {
  routes[path] = renderFunction;
}

export function initRouter(): void {
  window.addEventListener('popstate', renderRoute);

  document.body.addEventListener('click', (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest('a');
    if (target && target.matches('[data-link]')) {
      e.preventDefault();
      const path = target.getAttribute('href');
      if (path) navigateTo(path);
    }
  });

  renderRoute();
}

export function navigateTo(path: string): void {
  history.pushState(null, '', path);
  closeMobileMenu();
  renderRoute();
}

function renderRoute(): void {
  const path = window.location.pathname;
  const view = routes[path];

  const app = document.getElementById('app');
  if (!app) return;

  if (!view) {
    app.innerHTML = '<h1>404 - Page Not Found</h1>';
    return;
  }

  app.innerHTML = '';
  view();
} 

function closeMobileMenu() {
	const mobileMenu = document.getElementById('mobileMenu');
	const body = document.body;
	const burgerButton = document.querySelector('.burger-button');

	if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
		mobileMenu.classList.add('hidden');
		body.classList.remove('overflow-hidden');
		burgerButton?.classList.remove('burger-active');
	}
}