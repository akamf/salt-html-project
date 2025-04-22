import '../src/input.css';
import '../src/style.css';

window.addEventListener('DOMContentLoaded', () => {
	const body = document.getElementById('pageBody');
	if (body) {
		body.classList.remove('opacity-0');
		body.classList.add('animate-fadeIn');
	}
});

const contactButton = document.querySelector('a[href="#"]');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm') as HTMLFormElement;
const successMessage = document.getElementById('successMessage');

if (contactButton && contactModal && closeModal && contactForm && successMessage) {
	contactButton.addEventListener('click', (e) => {
		e.preventDefault();
		contactModal.classList.remove('hidden');
		document.body.style.overflow = 'hidden'; // förhindra scroll
	});

	closeModal.addEventListener('click', () => {
		contactModal.classList.add('hidden');
		document.body.style.overflow = ''; // återställ scroll
	});

	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		contactForm.classList.add('hidden');
		successMessage.classList.remove('hidden');

		setTimeout(() => {
			contactModal.classList.add('hidden');
			document.body.style.overflow = '';
			// Reset form
			contactForm.reset();
			contactForm.classList.remove('hidden');
			successMessage.classList.add('hidden');
		}, 3000);
	});
}

export function toggleMenu(): void {
    const menu = document.getElementById('mobileMenu');
    const button = document.querySelector('button');
  
    if (menu && button) {
      menu.classList.toggle('hidden');
      button.classList.toggle('burger-active');
      document.body.classList.toggle('overflow-hidden'); // 👈 Disable/enable scroll
    }
};
  
(window as any).toggleMenu = toggleMenu;