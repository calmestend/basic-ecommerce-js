import { handleLogout } from "../../lib";

export default function Navbar(state, navigate) {
	const navbarStatus = {
		guest: `
      <ul>
        <div>
          <li><a href="#" id="nav-home">Home</a></li>
        </div>
        <div>
          <li><a href="#" id="nav-signin">Sign In</a></li>
          <li><a href="#" id="nav-signup">Sign Up</a></li>
        </div>
      </ul>
    `,
		client: `
      <ul>
        <div>
          <li><a href="#" id="nav-home">Home</a></li>
        </div>
        <div>
          <li><a href="#" id="nav-logout">Log out</a></li>
        </div>
      </ul>
    `,
		admin: `
      <ul>
        <div>
          <li><a href="#" id="nav-dashboard">Dashboard</a></li>
        </div>
        <div>
          <li><a href="#" id="nav-logout">Log out</a></li>
        </div>
      </ul>
    `
	};

	const navbarHtml = `
    <nav class="navbar">
      ${navbarStatus[state.userRole]}
    </nav>
  `;

	// Render HTML after setup listeners
	setTimeout(() => {
		const homeLink = document.getElementById('nav-home');
		if (homeLink) {
			homeLink.addEventListener('click', (e) => {
				e.preventDefault();
				navigate('catalogue');
			});
		}

		// Render when is not logged
		if (state.userRole === 'guest') {
			const signinLink = document.getElementById('nav-signin');
			const signupLink = document.getElementById('nav-signup');

			signinLink.addEventListener('click', (e) => {
				e.preventDefault();
				navigate('signin');
			});

			signupLink.addEventListener('click', (e) => {
				e.preventDefault();
				navigate('signup');
			});
		}

		// Render when is logged
		if (state.userRole !== 'guest') {
			const logoutLink = document.getElementById('nav-logout');
			logoutLink.addEventListener('click', (e) => {
				e.preventDefault();
				handleLogout();
			});
		}

		// Admin
		if (state.userRole === 'admin') {
			const dashboardLink = document.getElementById('nav-dashboard');
			dashboardLink.addEventListener('click', (e) => {
				e.preventDefault();
				navigate('dashboard');
			});
		}
	}, 0);

	return navbarHtml;
}
