import Form from "./form";

export default function Auth(isSignIn) {
	const message = isSignIn ? "Sign In" : "Sign Up";

	return `
    <div class="auth">
		<h2>${message}</h2>
		${Form(isSignIn)}
    </div>
  `;
}

