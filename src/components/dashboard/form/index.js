import { createProduct, fetchCategories } from "../../../lib";

export default function Form() {

	fetchCategories().then(categories => {
		const categoriesOptions = categories.map(category =>
			`<option value="${category.id}">${category.name}</option>`
		);

		document.getElementById("category-select").innerHTML = categoriesOptions;
	});

	const formInputs = `
		<select name="category_id" id="category-select" required>
			<option value="">Loading categories...</option>
		</select>
		<input name="name" type="text" required placeholder="Name"/>
		<input name="description" type="text" required placeholder="Description"/>
		<input name="img" type="text" required placeholder="Image"/>
		<input name="price" type="number" min="1" required placeholder="Price"/>
		<input name="stock_quantity" type="number" min="1" required placeholder="Stock quantity"/>
		<div>
			<label for="active">Activated</label>
			<input name="active" type="checkbox" />
		</div>
		<button type="submit">Submit</button>`;

	const formHtml = `
		<form method="post" id="product-form">
			${formInputs}
		</form>
	`;

	setTimeout(async () => {
		const form = document.getElementById('product-form');

		if (form) {
			form.addEventListener('submit', async (e) => {
				e.preventDefault();

				const productData = {
					category_id: document.querySelector('[name="category_id"]').value,
					name: document.querySelector('[name="name"]').value,
					description: document.querySelector('[name="description"]').value,
					img: document.querySelector('[name="img"]').value,
					price: document.querySelector('[name="price"]').value,
					active: document.querySelector('[name="active"]').checked,
					stock_quantity: document.querySelector('[name="stock_quantity"]').value,
				};

				await createProduct(productData);
			});
		} else {
			console.error(`No se encontró el formulario`);
		}
	}, 0);

	return formHtml;
}

