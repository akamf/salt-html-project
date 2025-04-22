const button = document.getElementById('clickMe') as HTMLButtonElement | null;

button?.addEventListener('click', () => {
  alert('Button clicked with TypeScript!');
});

export function toggleMenu(): void {
  const menu = document.getElementById('mobileMenu');
  const button = document.querySelector('button');

  if (menu && button) {
    menu.classList.toggle('hidden');
    button.classList.toggle('burger-active');
    document.body.classList.toggle('overflow-hidden'); // 👈 Disable/enable scroll
  }
}