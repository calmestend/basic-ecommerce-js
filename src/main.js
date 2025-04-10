import './style.css';
import Navbar from "./components/navbar/index";
import Footer from './components/footer';
import { getCookie, navigate, renderMainContent } from './utils';

export const userRoles = {
	'1': 'admin',
	'2': 'client'
};

export const appState = {
	currentView: 'catalogue',
	userRole: 'guest'
};

export function renderApp() {
	document.querySelector('#app').innerHTML = `
    <main class="app-container">
      <div id="navbar"></div>
      <div id="main-content"></div>
      <div id="footer"></div>
    </main>
  `;

	document.querySelector('#navbar').innerHTML = Navbar(appState, navigate);
	document.querySelector('#footer').innerHTML = Footer();
	renderMainContent();
}

async function initApp() {
	try {
		const cookie = getCookie("user_role");

		appState.userRole = userRoles[cookie] || 'guest';
		appState.currentView = appState.userRole === 'admin' ? 'dashboard' : 'catalogue';

		console.log(appState);

	} catch (error) {
		console.error("Error al obtener la cookie:", error);
		appState.userRole = 'guest';
	}
	renderApp();
}

initApp();

