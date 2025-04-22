const button = document.getElementById('clickMe') as HTMLButtonElement | null;

button?.addEventListener('click', () => {
  alert('Button clicked with TypeScript!');
});

function toggleMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
}