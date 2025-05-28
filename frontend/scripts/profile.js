document.addEventListener('DOMContentLoaded', function() {
    // Mock user data
    const mockUser = {
        name: "John Doe",
        title: "Web Developer",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
        rank: 174,
        attempted: 6,
        solved: 3,
        course: "Web Developer Course - Baby Steps",
        activeDays: 6,
        longestStreak: 6
    };
    
    // Update user info
    document.getElementById('username').textContent = mockUser.name.split(' ')[0];
    document.getElementById('user-fullname').textContent = mockUser.name;
    document.getElementById('user-title').textContent = mockUser.title;
    document.getElementById('linkedin-url').textContent = mockUser.linkedin;
    document.getElementById('linkedin-url').href = `https://${mockUser.linkedin}`;
    document.getElementById('github-url').textContent = mockUser.github;
    document.getElementById('github-url').href = `https://${mockUser.github}`;
    
    // Update stats
    document.querySelector('.personal-stats .stat-value:nth-of-type(1)').textContent = `#${mockUser.rank}`;
    document.querySelector('.personal-stats .stat-value:nth-of-type(2)').textContent = mockUser.attempted;
    document.querySelector('.personal-stats .stat-value:nth-of-type(3)').textContent = mockUser.solved;
    document.querySelector('.personal-stats .stat-value:nth-of-type(4)').textContent = mockUser.course;
    
    // Update streak stats
    document.querySelector('.streak-stats .stat-value:nth-of-type(1)').textContent = mockUser.activeDays;
    document.querySelector('.streak-stats .stat-value:nth-of-type(2)').textContent = mockUser.longestStreak;
});