import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
	<h1>Preisvergleich</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;