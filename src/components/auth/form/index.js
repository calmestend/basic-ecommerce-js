import { onSignUp, onSignIn } from "../../../lib";

export default function Form(isSignIn) {
	const formClass = isSignIn ? 'signin-form' : 'signup-form';
	const formId = formClass;

	const formInputs = isSignIn
		? `
      <input type="email" id="email" name="email" placeholder="email" required >
      <input type="password" id="password" name="password" placeholder="password" required>
      <button type="submit">Submit</button>
    `
		: `
      <input type="text" id="name" name="name" placeholder="name" required>
      <input type="email" id="email" name="email" placeholder="email" required>
      <input type="password" id="password" name="password" placeholder="password" required>
      <input type="password" id="password_confirmation" name="password_confirmation" placeholder="password confirmation" required>
      <button type="submit">Submit</button>
    `;

	const formHtml = `
    <form method="post" id="${formId}">
      ${formInputs}
    </form>
  `;

	setTimeout(async () => {
		const form = document.getElementById(formId);

		if (form) {
			form.addEventListener('submit', async (e) => {
				e.preventDefault();

				if (isSignIn) {
					const userData = {
						email: document.getElementById('email').value,
						password: document.getElementById('password').value
					};

					await onSignIn(userData);
					window.location.reload();
				} else {
					const userData = {
						name: document.getElementById('name').value,
						email: document.getElementById('email').value,
						password: document.getElementById('password').value,
						password_confirmation: document.getElementById('password_confirmation').value
					};

					await onSignUp(userData);
					window.location.reload();
				}
			});
		} else {
			console.error(`No se encontró el formulario con id: ${formId}`);
		}
	}, 0);

	return formHtml;
}
