document.addEventListener('DOMContentLoaded', function () {
	const HIDE_DELAY_MS = 300;
	let hideTimer;

	// Try to find an existing nav item with id. If not, auto-detect by link text 'Chargers'.
	let navItem = document.getElementById('nav-chargers');
	if (!navItem) {
		const candidates = Array.from(document.querySelectorAll('a'));
		for (const a of candidates) {
			const text = (a.textContent || '').trim().toLowerCase();
			if (text === 'chargers') {
				const li = a.closest('li');
				if (li) {
					li.id = 'nav-chargers';
					li.classList.add('has-mega');
					navItem = li;
					break;
				}
			}
		}
	}

	const panel = document.getElementById('mega-chargers');
	if (!navItem || !panel) return;

	function openPanel() {
		clearTimeout(hideTimer);
		panel.classList.add('open');
		panel.setAttribute('aria-hidden', 'false');
	}
	function scheduleClose() {
		clearTimeout(hideTimer);
		hideTimer = setTimeout(() => {
			panel.classList.remove('open');
			panel.setAttribute('aria-hidden', 'true');
		}, HIDE_DELAY_MS);
	}

	['mouseenter', 'focusin'].forEach(evt => {
		navItem.addEventListener(evt, openPanel);
		panel.addEventListener(evt, openPanel);
	});
	['mouseleave', 'focusout'].forEach(evt => {
		navItem.addEventListener(evt, scheduleClose);
		panel.addEventListener(evt, scheduleClose);
	});
});