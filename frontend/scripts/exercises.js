
// document.addEventListener('DOMContentLoaded', function() {
//     // Fetch user profile from backend API
//     async function fetchUserProfile() {
//         try {
//             const response = await fetch('http://localhost:4000/api/profile/me', {
//                 //credentials: 'include' // if your API needs cookies/session

//             });
//             if (!response.ok) {
//                 throw new Error('Failed to fetch user profile');
//             }
//             const user = await response.json();
//             document.getElementById('username').textContent = user.name.split(' ')[0];
//         } catch (error) {
//             console.error('Error fetching user profile:', error);
//             document.getElementById('username').textContent = 'Guest';
//         }
//     }
    
//     // Initialize CodeMirror editor
//     const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
//         lineNumbers: true,
//         mode: 'htmlmixed',
//         theme: 'dracula',
//         autoCloseTags: true,
//         autoCloseBrackets: true,
//         indentUnit: 4
//     });


// //     let submissionCount = 0;
// // let solvedExercises = new Set(); // Use Set to avoid duplicate counting

// let exerciseStats = JSON.parse(localStorage.getItem('exerciseStats') || '{}');
// let submissionCount = 0;
// let solvedExercises = new Set(Object.keys(exerciseStats).filter(id => exerciseStats[id].solved));

// const submissionCountElement = document.getElementById('exercise-submission-count');
// const solvedCountElement = document.getElementById('exercise-solved-count');



//     let currentExercise = null;
//     let allExercises = [];
//     // let exerciseStats = JSON.parse(localStorage.getItem('exerciseStats')) || {};
    
//     // DOM elements
//     const problemTitle = document.getElementById('problem-title');
//     const problemDescription = document.getElementById('problem-description');
//     const hintBtn = document.getElementById('hint-btn');
//     const hintContent = document.getElementById('hint-content');
//     const languageSelect = document.getElementById('language-select');
//     const runBtn = document.getElementById('run-btn');
//     const submitBtn = document.getElementById('submit-btn');
//     const outputContent = document.getElementById('output-content');
//     const exercisesContainer = document.getElementById('exercises-container');
    
//     // Fetch all exercises
//     async function fetchExercises() {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await fetch('http://localhost:4000/api/exercises',{
//                 headers : {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
           
//             if (!response.ok) {
//                 throw new Error('Failed to fetch exercises');
//             }
//             allExercises = await response.json();
//             displayExercisesList(allExercises);
//             if (allExercises.length > 0) {
//                 loadExercise(allExercises[0].id);
//             }
//         } catch (error) {
//             console.error('Error fetching exercises:', error);
//             outputContent.textContent = 'Error loading exercises. Please try again later.';
//         }
//     }
    
//     // Fetch one exercise by ID
//     async function loadExercise(exerciseId) {
//         try {
//             const response = await fetch(`http://localhost:4000/api/exercises/${exerciseId}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch exercise');
//             }
//             currentExercise = await response.json();
//             displayExercise(currentExercise);
//         } catch (error) {
//             console.error('Error fetching exercise:', error);
//             outputContent.textContent = 'Error loading exercise. Please try again later.';
//         }
//     }
    
//     // Display exercise details
//     function displayExercise(exercise) {
//         problemTitle.textContent = exercise.title;
//         problemDescription.innerHTML = formatProblemDescription(exercise.story);
//         editor.setValue(exercise.code || '// Your code here');



//         // Initialize if not already tracked
// if (!exerciseStats[exercise.id]) {
//     exerciseStats[exercise.id] = { submissions: 0, solved: false };
// }

// const stats = exerciseStats[exercise.id];
// document.getElementById('exercise-submission-count').textContent = stats.submissions;
// document.getElementById('exercise-status').textContent = stats.solved ? 'Solved' : 'Unsolved';

        
//         if (exercise.hint) {
//             hintContent.textContent = exercise.hint;
//             hintBtn.style.display = 'block';
//         } else {
//             hintContent.textContent = 'No hint available for this exercise.';
//             hintBtn.style.display = 'none';
//         }
        
//         outputContent.textContent = 'Your output will appear here...';
//     }
    
//     // Format problem description
//     function formatProblemDescription(text) {
//         return text.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
//     }
    
//     // Display exercises list
//     function displayExercisesList(exercises) {
//         exercisesContainer.innerHTML = '';
//         exercises.forEach(exercise => {
//             const exerciseCard = document.createElement('div');
//             exerciseCard.className = 'exercise-card';
//             exerciseCard.innerHTML = `
//                 <h3>${exercise.title}</h3>
//                 <p>${exercise.story.substring(0, 100)}...</p>
//                 <button class="select-exercise" data-id="${exercise.id}">Solve Challenge</button>
//             `;
//             exercisesContainer.appendChild(exerciseCard);
//         });
        
//         document.querySelectorAll('.select-exercise').forEach(button => {
//             button.addEventListener('click', function() {
//                 const exerciseId = parseInt(this.getAttribute('data-id'));
//                 loadExercise(exerciseId);
//             });
//         });
//     }
    
//     // Event listeners
//     hintBtn.addEventListener('click', function() {
//         hintContent.classList.toggle('hidden');
//         this.textContent = hintContent.classList.contains('hidden') ? 'Show Hint' : 'Hide Hint';
//     });
    
//     languageSelect.addEventListener('change', function() {
//         const mode = this.value;
//         editor.setOption('mode', mode);
//     });
    
//     runBtn.addEventListener('click', function() {
//         const code = editor.getValue();
//         outputContent.textContent = `Running code...\n\n${code.substring(0, 200)}...`;
//     });
    
//     // submitBtn.addEventListener('click', function() {
//     //     outputContent.textContent = 'Submitting your solution...';
//     //     setTimeout(() => {
//     //         const isCorrect = Math.random() > 0.3; // Mock correctness
//     //         if (isCorrect) {
//     //             outputContent.innerHTML = '<span style="color: var(--success-color)">✓ Congratulations! Your solution is correct!</span>';
//     //         } else {
//     //             outputContent.innerHTML = '<span style="color: var(--danger-color)">✗ Your solution needs some adjustments. Try again!</span>';
//     //         }
//     //     }, 1500);
//     // });

//     submitBtn.addEventListener('click', function () {
//     outputContent.textContent = 'Submitting your solution...';

//     if (!currentExercise) return;

//     const exerciseId = currentExercise.id;

//     // Initialize stats if not present
//     if (!exerciseStats[exerciseId]) {
//         exerciseStats[exerciseId] = { submissions: 0, solved: false };
//     }

//     // Increment both local and overall submission count
//     exerciseStats[exerciseId].submissions++;
//     submissionCount++;

//     if (submissionCountElement) {
//         submissionCountElement.textContent = exerciseStats[exerciseId].submissions;
//     }

//     setTimeout(() => {
//         const isCorrect = Math.random() > 0.3;

//         if (isCorrect) {
//             outputContent.innerHTML = '<span style="color: var(--success-color)">✓ Congratulations! Your solution is correct!</span>';

//             if (!exerciseStats[exerciseId].solved) {
//                 exerciseStats[exerciseId].solved = true;
//                 solvedExercises.add(exerciseId);

//                 if (solvedCountElement) {
//                     solvedCountElement.textContent = solvedExercises.size;
//                 }
//             }
//         } else {
//             outputContent.innerHTML = '<span style="color: var(--danger-color)">✗ Your solution needs some adjustments. Try again!</span>';
//         }

//         // Save back to localStorage
//         localStorage.setItem('exerciseStats', JSON.stringify(exerciseStats));
//     }, 1500);
// });




    
//     // Initialize app
//     fetchUserProfile();
//     fetchExercises();
// });
document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserProfile() {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No token found');

            const response = await fetch('http://localhost:4000/api/profile/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to fetch user profile');

            const user = await response.json();
            document.getElementById('username').textContent = user.name.split(' ')[0];
        } catch (error) {
            console.error('Error fetching user profile:', error);
            document.getElementById('username').textContent = 'Guest';
        }
    }

    const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
        lineNumbers: true,
        mode: 'htmlmixed',
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        indentUnit: 4
    });

    // Load exerciseStats or initialize empty object
    let exerciseStats = JSON.parse(localStorage.getItem('exerciseStats') || '{}');

    // Initialize submissionCount from sum of all submissions
    let submissionCount = Object.values(exerciseStats).reduce((sum, stat) => sum + (stat.submissions || 0), 0);

    // Initialize solvedExercises Set from exerciseStats keys where solved is true
    let solvedExercises = new Set(Object.entries(exerciseStats)
        .filter(([id, stat]) => stat.solved)
        .map(([id]) => id)
    );

    const submissionCountElement = document.getElementById('exercise-submission-count');
    const solvedCountElement = document.getElementById('exercise-solved-count');

    // Update counters display initially
    if (submissionCountElement) submissionCountElement.textContent = submissionCount;
    if (solvedCountElement) solvedCountElement.textContent = solvedExercises.size;

    let currentExercise = null;
    let allExercises = [];

    const problemTitle = document.getElementById('problem-title');
    const problemDescription = document.getElementById('problem-description');
    const hintBtn = document.getElementById('hint-btn');
    const hintContent = document.getElementById('hint-content');
    const languageSelect = document.getElementById('language-select');
    const runBtn = document.getElementById('run-btn');
    const submitBtn = document.getElementById('submit-btn');
    const outputContent = document.getElementById('output-content');
    const exercisesContainer = document.getElementById('exercises-container');

    async function fetchExercises() {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:4000/api/exercises', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Failed to fetch exercises');

            allExercises = await response.json();
            displayExercisesList(allExercises);
            if (allExercises.length > 0) loadExercise(allExercises[0].id);
        } catch (error) {
            console.error('Error fetching exercises:', error);
            outputContent.textContent = 'Error loading exercises. Please try again later.';
        }
    }

    async function loadExercise(exerciseId) {
        try {
            const response = await fetch(`http://localhost:4000/api/exercises/${exerciseId}`);
            if (!response.ok) throw new Error('Failed to fetch exercise');

            currentExercise = await response.json();
            displayExercise(currentExercise);
        } catch (error) {
            console.error('Error fetching exercise:', error);
            outputContent.textContent = 'Error loading exercise. Please try again later.';
        }
    }

    function displayExercise(exercise) {
        problemTitle.textContent = exercise.title;
        problemDescription.innerHTML = formatProblemDescription(exercise.story);
        editor.setValue(exercise.code || '// Your code here');

        if (!exerciseStats[exercise.id]) exerciseStats[exercise.id] = { submissions: 0, solved: false };
        const stats = exerciseStats[exercise.id];

        document.getElementById('exercise-submission-count').textContent = stats.submissions;
        document.getElementById('exercise-status').textContent = stats.solved ? 'Solved' : 'Unsolved';

        if (exercise.hint) {
            hintContent.textContent = exercise.hint;
            hintBtn.style.display = 'block';
        } else {
            hintContent.textContent = 'No hint available for this exercise.';
            hintBtn.style.display = 'none';
        }

        outputContent.textContent = 'Your output will appear here...';
    }

    function formatProblemDescription(text) {
        return text.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    }

    function displayExercisesList(exercises) {
        exercisesContainer.innerHTML = '';
        exercises.forEach(exercise => {
            const exerciseCard = document.createElement('div');
            exerciseCard.className = 'exercise-card';
            exerciseCard.innerHTML = `
                <h3>${exercise.title}</h3>
                <p>${exercise.story.substring(0, 100)}...</p>
                <button class="select-exercise" data-id="${exercise.id}">Solve Challenge</button>
            `;
            exercisesContainer.appendChild(exerciseCard);
        });

        document.querySelectorAll('.select-exercise').forEach(button => {
            button.addEventListener('click', function() {
                const exerciseId = this.getAttribute('data-id'); // keep as string
                loadExercise(exerciseId);
            });
        });
    }

    hintBtn.addEventListener('click', function() {
        hintContent.classList.toggle('hidden');
        this.textContent = hintContent.classList.contains('hidden') ? 'Show Hint' : 'Hide Hint';
    });

    languageSelect.addEventListener('change', function() {
        const mode = this.value;
        editor.setOption('mode', mode);
    });

    runBtn.addEventListener('click', function() {
        const code = editor.getValue();
        outputContent.textContent = `Running code...\n\n${code.substring(0, 200)}...`;
    });

    submitBtn.addEventListener('click', function() {
        outputContent.textContent = 'Submitting your solution...';
        if (!currentExercise) return;

        const exerciseId = currentExercise.id;

        if (!exerciseStats[exerciseId]) exerciseStats[exerciseId] = { submissions: 0, solved: false };

        exerciseStats[exerciseId].submissions++;
        submissionCount++;

        if (submissionCountElement) submissionCountElement.textContent = submissionCount;

        setTimeout(() => {
            const isCorrect = Math.random() > 0.3;

            if (isCorrect) {
                outputContent.innerHTML = '<span style="color: var(--success-color)">✓ Congratulations! Your solution is correct!</span>';

                if (!exerciseStats[exerciseId].solved) {
                    exerciseStats[exerciseId].solved = true;
                    solvedExercises.add(exerciseId);

                    if (solvedCountElement) solvedCountElement.textContent = solvedExercises.size;
                }
            } else {
                outputContent.innerHTML = '<span style="color: var(--danger-color)">✗ Your solution needs some adjustments. Try again!</span>';
            }

            localStorage.setItem('exerciseStats', JSON.stringify(exerciseStats));
        }, 1500);
    });

    // Init
    fetchUserProfile();
    fetchExercises();
});
