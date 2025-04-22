import '../src/app'
import '../src/input.css'  // Så här får du in Tailwind också
import '../src/style.css';

import { toggleMenu } from '../src/app';

(window as any).toggleMenu = toggleMenu;