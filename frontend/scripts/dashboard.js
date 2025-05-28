// 
document.addEventListener('DOMContentLoaded', async function() {
  try {
    const token = localStorage.getItem('token'); // or wherever you store the JWT
    if (!token) {
      console.error('No token found, user not logged in');
      return;
    }

    const res = await fetch('http://localhost:4000/api/profile/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const user = await res.json();

    // Example user data shape returned from your backend:
    // { _id: "...", username: "anay", email: "anay@gmail.com", ... }

    // Update user info
    document.getElementById('username').textContent = user.username.split(' ')[0];

    // For demo, let’s assume these are your stats — update these as per your actual data
    const rank = 174;         // replace with actual rank from user data if available
    const accuracy = 78;      // replace with actual accuracy from user data if available
    const solved = 7;         // replace with actual solved count
    const totalExercises = 10; // replace with actual total
    const progress = 20;      // replace with actual progress %

    // Update stats
    document.querySelector('.stat-value:nth-of-type(1)').textContent = `#${rank}`;
    document.querySelector('.stat-value:nth-of-type(2)').textContent = `${accuracy}%`;
    document.querySelector('.stat-value:nth-of-type(3)').textContent = solved;
    document.querySelector('.stat-value:nth-of-type(4)').textContent = totalExercises;

    // Update progress bar
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.querySelector('.progress-visualization p:first-of-type').textContent = `${progress}% Exercise Completed`;

  } catch (err) {
    console.error('Error loading profile:', err);
  }
});
