// // document.addEventListener('DOMContentLoaded', function() {
// //     // Mock user data
// //     const mockUser = {
// //         name: "John Doe"
// //     };
    
// //     // Update user info
// //     document.getElementById('username').textContent = mockUser.name.split(' ')[0];
    
// //     // Initialize CodeMirror editor
// //     const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
// //         lineNumbers: true,
// //         mode: 'htmlmixed',
// //         theme: 'dracula',
// //         autoCloseTags: true,
// //         autoCloseBrackets: true,
// //         indentUnit: 4
// //     });
    
// //     // Current exercise data
// //     let currentExercise = null;
// //     let allExercises = [];
    
// //     // DOM elements
// //     const problemTitle = document.getElementById('problem-title');
// //     const problemDescription = document.getElementById('problem-description');
// //     const hintBtn = document.getElementById('hint-btn');
// //     const hintContent = document.getElementById('hint-content');
// //     const languageSelect = document.getElementById('language-select');
// //     const runBtn = document.getElementById('run-btn');
// //     const submitBtn = document.getElementById('submit-btn');
// //     const outputContent = document.getElementById('output-content');
// //     const exercisesContainer = document.getElementById('exercises-container');
    
// //     // Fetch all exercises from API
// //     async function fetchExercises() {
// //         try {
// //             const response = await fetch('/api/exercises');
// //             if (!response.ok) {
// //                 throw new Error('Failed to fetch exercises');
// //             }
// //             allExercises = await response.json();
// //             displayExercisesList(allExercises);
// //             if (allExercises.length > 0) {
// //                 loadExercise(allExercises[0].id);
// //             }
// //         } catch (error) {
// //             console.error('Error fetching exercises:', error);
// //             outputContent.textContent = 'Error loading exercises. Please try again later.';
// //         }
// //     }
    
// //     // Fetch a specific exercise by ID
// //     async function loadExercise(exerciseId) {
// //         try {
// //             const response = await fetch('http://localhost:4000/api/exercises');

// //             if (!response.ok) {
// //                 throw new Error('Failed to fetch exercise');
// //             }
// //             currentExercise = await response.json();
// //             displayExercise(currentExercise);
// //         } catch (error) {
// //             console.error('Error fetching exercise:', error);
// //             outputContent.textContent = 'Error loading exercise. Please try again later.';
// //         }
// //     }
    
// //     // Display exercise in the problem panel
// //     function displayExercise(exercise) {
// //         problemTitle.textContent = exercise.title;
// //         problemDescription.innerHTML = formatProblemDescription(exercise.story);
        
// //         // Set initial code
// //         editor.setValue(exercise.code || '// Your code here');
        
// //         // Set hint if available
// //         if (exercise.hint) {
// //             hintContent.textContent = exercise.hint;
// //             hintBtn.style.display = 'block';
// //         } else {
// //             hintContent.textContent = 'No hint available for this exercise.';
// //             hintBtn.style.display = 'none';
// //         }
        
// //         // Clear output
// //         outputContent.textContent = 'Your output will appear here...';
// //     }
    
// //     // Format problem description with paragraphs
// //     function formatProblemDescription(text) {
// //         return text.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
// //     }
    
// //     // Display list of exercises
// //     function displayExercisesList(exercises) {
// //         exercisesContainer.innerHTML = '';
        
// //         exercises.forEach(exercise => {
// //             const exerciseCard = document.createElement('div');
// //             exerciseCard.className = 'exercise-card';
// //             exerciseCard.innerHTML = `
// //                 <h3>${exercise.title}</h3>
// //                 <p>${exercise.story.substring(0, 100)}...</p>
// //                 <button class="select-exercise" data-id="${exercise.id}">Solve Challenge</button>
// //             `;
// //             exercisesContainer.appendChild(exerciseCard);
// //         });
        
// //         // Add event listeners to exercise selection buttons
// //         document.querySelectorAll('.select-exercise').forEach(button => {
// //             button.addEventListener('click', function() {
// //                 const exerciseId = parseInt(this.getAttribute('data-id'));
// //                 loadExercise(exerciseId);
// //             });
// //         });
// //     }
    
// //     // Event listeners
// //     hintBtn.addEventListener('click', function() {
// //         hintContent.classList.toggle('hidden');
// //         this.textContent = hintContent.classList.contains('hidden') ? 'Show Hint' : 'Hide Hint';
// //     });
    
// //     languageSelect.addEventListener('change', function() {
// //         const mode = this.value;
// //         editor.setOption('mode', mode);
// //     });
    
// //     runBtn.addEventListener('click', function() {
// //         // In a real implementation, this would execute the code
// //         const code = editor.getValue();
// //         outputContent.textContent = `Running code...\n\n${code.substring(0, 200)}...`;
// //     });
    
// //     submitBtn.addEventListener('click', function() {
// //         // In a real implementation, this would submit the code for evaluation
// //         outputContent.textContent = 'Submitting your solution...';
        
// //         // Simulate API response
// //         setTimeout(() => {
// //             const isCorrect = Math.random() > 0.3; // 70% chance of being correct for demo
// //             if (isCorrect) {
// //                 outputContent.innerHTML = '<span style="color: var(--success-color)">✓ Congratulations! Your solution is correct!</span>';
// //             } else {
// //                 outputContent.innerHTML = '<span style="color: var(--danger-color)">✗ Your solution needs some adjustments. Try again!</span>';
// //             }
// //         }, 1500);
// //     });
    
// //     // Initialize the app
// //     fetchExercises();
// // });
// document.addEventListener('DOMContentLoaded', function() {
//     // Mock user data
//     const mockUser = {
//         name: "John Doe"
//     };
    
//     // Update user info
//     document.getElementById('username').textContent = mockUser.name.split(' ')[0];
    
//     // Initialize CodeMirror editor
//     const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
//         lineNumbers: true,
//         mode: 'htmlmixed',
//         theme: 'dracula',
//         autoCloseTags: true,
//         autoCloseBrackets: true,
//         indentUnit: 4
//     });
    
//     // Current exercise data
//     let currentExercise = null;
//     let allExercises = [];
    
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
    
//     const API_BASE_URL = 'http://localhost:3000/api'; // Your backend base URL
    
//     // Fetch all exercises from API
//     async function fetchExercises() {
//         try {
//             const response = await fetch(`${API_BASE_URL}/exercises`);
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
//             exercisesContainer.innerHTML = '<p>Could not load exercises.</p>';
//         }
//     }
    
//     // Fetch a specific exercise by ID
//     async function loadExercise(exerciseId) {
//         try {
//             const response = await fetch(`${API_BASE_URL}/exercises/${exerciseId}`);
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
    
//     // Display exercise in the problem panel
//     function displayExercise(exercise) {
//         problemTitle.textContent = exercise.title;
//         problemDescription.innerHTML = formatProblemDescription(exercise.story);
        
//         // Set initial code
//         editor.setValue(exercise.code || '// Your code here');
        
//         // Set hint if available
//         if (exercise.hint) {
//             hintContent.textContent = exercise.hint;
//             hintBtn.style.display = 'block';
//         } else {
//             hintContent.textContent = 'No hint available for this exercise.';
//             hintBtn.style.display = 'none';
//         }
        
//         // Clear output
//         outputContent.textContent = 'Your output will appear here...';
//     }
    
//     // Format problem description with paragraphs
//     function formatProblemDescription(text) {
//         return text.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
//     }
    
//     // Display list of exercises
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
        
//         // Add event listeners to exercise selection buttons
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
    
//     submitBtn.addEventListener('click', function() {
//         outputContent.textContent = 'Submitting your solution...';
        
//         // Simulate API response
//         setTimeout(() => {
//             const isCorrect = Math.random() > 0.3; // 70% chance of being correct for demo
//             if (isCorrect) {
//                 outputContent.innerHTML = '<span style="color: var(--success-color)">✓ Congratulations! Your solution is correct!</span>';
//             } else {
//                 outputContent.innerHTML = '<span style="color: var(--danger-color)">✗ Your solution needs some adjustments. Try again!</span>';
//             }
//         }, 1500);
//     });
    
//     // Initialize the app
//     fetchExercises();
// });
document.addEventListener('DOMContentLoaded', function() {
    // Fetch user profile from backend API
    async function fetchUserProfile() {
        try {
            const response = await fetch('http://localhost:4000/api/profile/me', {
                //credentials: 'include' // if your API needs cookies/session

            });
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }
            const user = await response.json();
            document.getElementById('username').textContent = user.name.split(' ')[0];
        } catch (error) {
            console.error('Error fetching user profile:', error);
            document.getElementById('username').textContent = 'Guest';
        }
    }
    
    // Initialize CodeMirror editor
    const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
        lineNumbers: true,
        mode: 'htmlmixed',
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        indentUnit: 4
    });


//     let submissionCount = 0;
// let solvedExercises = new Set(); // Use Set to avoid duplicate counting

let exerciseStats = JSON.parse(localStorage.getItem('exerciseStats') || '{}');
let submissionCount = 0;
let solvedExercises = new Set(Object.keys(exerciseStats).filter(id => exerciseStats[id].solved));

const submissionCountElement = document.getElementById('exercise-submission-count');
const solvedCountElement = document.getElementById('exercise-solved-count');



    let currentExercise = null;
    let allExercises = [];
    // let exerciseStats = JSON.parse(localStorage.getItem('exerciseStats')) || {};
    
    // DOM elements
    const problemTitle = document.getElementById('problem-title');
    const problemDescription = document.getElementById('problem-description');
    const hintBtn = document.getElementById('hint-btn');
    const hintContent = document.getElementById('hint-content');
    const languageSelect = document.getElementById('language-select');
    const runBtn = document.getElementById('run-btn');
    const submitBtn = document.getElementById('submit-btn');
    const outputContent = document.getElementById('output-content');
    const exercisesContainer = document.getElementById('exercises-container');
    
    // Fetch all exercises
    async function fetchExercises() {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:4000/api/exercises',{
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            });
           
            if (!response.ok) {
                throw new Error('Failed to fetch exercises');
            }
            allExercises = await response.json();
            displayExercisesList(allExercises);
            if (allExercises.length > 0) {
                loadExercise(allExercises[0].id);
            }
        } catch (error) {
            console.error('Error fetching exercises:', error);
            outputContent.textContent = 'Error loading exercises. Please try again later.';
        }
    }
    
    // Fetch one exercise by ID
    async function loadExercise(exerciseId) {
        try {
            const response = await fetch(`http://localhost:4000/api/exercises/${exerciseId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch exercise');
            }
            currentExercise = await response.json();
            displayExercise(currentExercise);
        } catch (error) {
            console.error('Error fetching exercise:', error);
            outputContent.textContent = 'Error loading exercise. Please try again later.';
        }
    }
    
    // Display exercise details
    function displayExercise(exercise) {
        problemTitle.textContent = exercise.title;
        problemDescription.innerHTML = formatProblemDescription(exercise.story);
        editor.setValue(exercise.code || '// Your code here');


        // Initialize if not already tracked
if (!exerciseStats[exercise.id]) {
    exerciseStats[exercise.id] = { submissions: 0, solved: false };
}

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
    
    // Format problem description
    function formatProblemDescription(text) {
        return text.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    }
    
    // Display exercises list
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
                const exerciseId = parseInt(this.getAttribute('data-id'));
                loadExercise(exerciseId);
            });
        });
    }
    
    // Event listeners
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
    
    // submitBtn.addEventListener('click', function() {
    //     outputContent.textContent = 'Submitting your solution...';
    //     setTimeout(() => {
    //         const isCorrect = Math.random() > 0.3; // Mock correctness
    //         if (isCorrect) {
    //             outputContent.innerHTML = '<span style="color: var(--success-color)">✓ Congratulations! Your solution is correct!</span>';
    //         } else {
    //             outputContent.innerHTML = '<span style="color: var(--danger-color)">✗ Your solution needs some adjustments. Try again!</span>';
    //         }
    //     }, 1500);
    // });

    submitBtn.addEventListener('click', function () {
    outputContent.textContent = 'Submitting your solution...';

    if (!currentExercise) return;

    const exerciseId = currentExercise.id;

    // Initialize stats if not present
    if (!exerciseStats[exerciseId]) {
        exerciseStats[exerciseId] = { submissions: 0, solved: false };
    }

    // Increment both local and overall submission count
    exerciseStats[exerciseId].submissions++;
    submissionCount++;

    if (submissionCountElement) {
        submissionCountElement.textContent = exerciseStats[exerciseId].submissions;
    }

    setTimeout(() => {
        const isCorrect = Math.random() > 0.3;

        if (isCorrect) {
            outputContent.innerHTML = '<span style="color: var(--success-color)">✓ Congratulations! Your solution is correct!</span>';

            if (!exerciseStats[exerciseId].solved) {
                exerciseStats[exerciseId].solved = true;
                solvedExercises.add(exerciseId);

                if (solvedCountElement) {
                    solvedCountElement.textContent = solvedExercises.size;
                }
            }
        } else {
            outputContent.innerHTML = '<span style="color: var(--danger-color)">✗ Your solution needs some adjustments. Try again!</span>';
        }

        // Save back to localStorage
        localStorage.setItem('exerciseStats', JSON.stringify(exerciseStats));
    }, 1500);
});




    
    // Initialize app
    fetchUserProfile();
    fetchExercises();
});
