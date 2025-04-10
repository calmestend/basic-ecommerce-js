import Auth from "../components/auth";
import Catalogue from "../components/catalogue";
import Dashboard from "../components/dashboard";
import { appState } from "../main";

export function navigate(view) {
	appState.currentView = view;
	renderMainContent();
}

export function renderMainContent() {
	const mainContent = document.querySelector('#main-content');

	const mainContentView = {
		catalogue: mainContent.innerHTML = Catalogue(),
		dashboard: mainContent.innerHTML = Dashboard(),
		signin: mainContent.innerHTML = Auth(true),
		signup: mainContent.innerHTML = Auth(false),
	}

	mainContent.innerHTML = mainContentView[appState.currentView ?? 'catalogue'];
}

export function setCookies(json) {
	document.cookie = `user_id=${json.user.id}; path=/; max-age=604800`;
	document.cookie = `user_role=${json.user.role}; path=/; max-age=604800`;
	document.cookie = `access_token=${json.access_token}; path=/; max-age=604800`;
}

export function getCookie(name) {
	const cookieName = name + "=";
	const cookies = document.cookie.split(";");

	for (let cookie of cookies) {
		cookie = cookie.trim();
		if (cookie.indexOf(cookieName) === 0) {
			return cookie.substring(cookieName.length);
		}
	}
	return null;
}

export function deleteCookies() {
	document.cookie = "user_id=; path=/; max-age=0";
	document.cookie = "user_role=; path=/; max-age=0";
	document.cookie = "access_token=; path=/; max-age=0";
}
