import Form from "./form";

export default function Dashboard() {
	return `
    <div class="dashboard">
		<div>
			<button type="button" id="toggleButton">Create Product</button>
		</div>
		<div>
			${Form()}
		</div>
		<div>

		</div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function() {
	const button = document.getElementById("toggleButton");
	const formContainer = document.getElementById("product-form");

	button.addEventListener("click", function() {
		if (formContainer.style.display === "none") {
			formContainer.style.display = "flex";
			button.textContent = "Hide Form";
		} else {
			formContainer.style.display = "none";
			button.textContent = "Create Product";
		}

		// Disparar un evento personalizado
		const event = new Event("dashboardButtonClick");
		button.dispatchEvent(event);
	});
});
