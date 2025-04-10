import { API_URL } from "../constants";
import { deleteCookies, getCookie, setCookies } from "../utils";

export async function onSignUp(userData) {
	try {
		const response = await fetch(`${API_URL}/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify(userData),
		})

		if (!response.ok)
			throw new Error('Something went wrong')

		const json = await response.json();

		setCookies(json);

		return json;
	} catch (error) {
		console.error(error);
	}
}

export async function onSignIn(userData) {
	try {
		const response = await fetch(`${API_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify(userData),
		})

		if (!response.ok)
			throw new Error('Something went wrong')

		const json = await response.json();

		setCookies(json);

		return json;
	} catch (error) {
		console.error(error);
	}
}

export function handleLogout() {
	deleteCookies();
	window.location.reload();
}

export async function fetchCategories() {
	try {
		const response = await fetch(`${API_URL}/categories`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
		})

		if (!response.ok)
			throw new Error('Something went wrong')

		const json = await response.json();
		return json.categories;
	} catch (error) {
		console.error(error);
	}
}

export async function createProduct(productData) {
	try {
		console.log(JSON.stringify(productData));
		const response = await fetch(`${API_URL}/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify(productData)
		});

		if (!response.ok)
			throw new Error('Something went wrong');

		const json = await response.json();
		console.log(json);
		return json.categories;
	} catch (error) {
		console.error(error);
	}
}
