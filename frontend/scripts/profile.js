

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM fully loaded and parsed');
    try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        if (!token) {
            console.error('Token not found');
            return;
        }

        const response = await fetch('http://localhost:4000/api/profile/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }

        const user = await response.json();
        console.log('User received:', user);

        // === Update User Info ===
        const usernameEl = document.getElementById('username');
        const fullNameEl = document.getElementById('user-fullname');
        const titleEl = document.getElementById('user-title');
        const linkedinEl = document.getElementById('linkedin-url');
        const githubEl = document.getElementById('github-url');

        const displayName = user.name?.trim() || user.username || "User";

        if (usernameEl) usernameEl.textContent = displayName.split(' ')[0];
        if (fullNameEl) fullNameEl.textContent = displayName;
        if (titleEl) titleEl.textContent = user.title || 'Web Developer';

        if (linkedinEl) {
            linkedinEl.textContent = user.linkedin || 'Not provided';
            linkedinEl.href = user.linkedin ? `https://${user.linkedin}` : '#';
        }

        if (githubEl) {
            githubEl.textContent = user.github || 'Not provided';
            githubEl.href = user.github ? `https://${user.github}` : '#';
        }

        // === Stats (if you have these fields) ===
        const statValues = document.querySelectorAll('.personal-stats .stat-value');
        if (statValues.length >= 4) {
            statValues[0].textContent = user.rank ? `#${user.rank}` : 'N/A';
            statValues[1].textContent = user.attempted ?? '0';
            statValues[2].textContent = user.solved ?? '0';
            statValues[3].textContent = user.course || 'N/A';
        }

        // === Streak Stats ===
        const streakValues = document.querySelectorAll('.streak-stats .stat-value');
        if (streakValues.length >= 2) {
            streakValues[0].textContent = user.activeDays ?? '0';
            streakValues[1].textContent = user.longestStreak ?? '0';
        }

    } catch (err) {
        console.error('Error loading profile:', err);
    }
});
