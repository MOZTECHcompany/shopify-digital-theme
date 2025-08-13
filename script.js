document.addEventListener('DOMContentLoaded', function () {
	const navItem = document.getElementById('nav-chargers');
	const panel = document.getElementById('mega-chargers');
	const HIDE_DELAY_MS = 300;
	let hideTimer;

	function showPanel() {
		clearTimeout(hideTimer);
		panel.classList.add('open');
		panel.setAttribute('aria-hidden', 'false');
	}

	function scheduleHide() {
		clearTimeout(hideTimer);
		hideTimer = setTimeout(() => {
			panel.classList.remove('open');
			panel.setAttribute('aria-hidden', 'true');
		}, HIDE_DELAY_MS);
	}

	// Mouse interactions
	navItem.addEventListener('mouseenter', showPanel);
	navItem.addEventListener('mouseleave', scheduleHide);

	// Keyboard accessibility
	navItem.addEventListener('focusin', showPanel);
	navItem.addEventListener('focusout', scheduleHide);
});