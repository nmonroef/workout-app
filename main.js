//  event listeners for each muscle group button
document.querySelector("#trapsButton").addEventListener("click", () => fetchAndDisplayExercises("traps"));
document.querySelector("#lowerBackButton").addEventListener("click", ()=> fetchAndDisplayExercises("lower_back"));
document.querySelector("#chestButton").addEventListener("click", () => fetchAndDisplayExercises("chest"));
document.querySelector("#hamstringButton").addEventListener("click", ()=> fetchAndDisplayExercises("hamstrings"));
document.querySelector("#bicepsButton").addEventListener("click", () => fetchAndDisplayExercises("biceps"));
document.querySelector("#glutesButton").addEventListener("click", ()=> fetchAndDisplayExercises("glutes"));
document.querySelector("#forearmsButton").addEventListener("click", () => fetchAndDisplayExercises("forearms"));
document.querySelector("#latsButton").addEventListener("click", ()=> fetchAndDisplayExercises("lats"));
document.querySelector("#tricepsButton").addEventListener("click", ()=> fetchAndDisplayExercises("triceps"));

function fetchAndDisplayExercises(muscle) {
    clearButtons(); // Clear existing buttons

    // Fetch exercises for the specified muscle group
    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'RqrbC/ZGwrc0jCwMpPZijA==268D0dgn2diirdW0'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        displayButtons(data); // Display fetched exercises as buttons
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

function displayButtons(data) {
    let exerciseButtons = document.querySelector(".exerciseButtons");
    data.forEach(workout => {
        let button = document.createElement("button");
        button.innerText = workout.name;
        exerciseButtons.appendChild(button);
    });
}

function clearButtons() {
    let exerciseButtons = document.querySelector(".exerciseButtons");
    exerciseButtons.innerHTML = '';
}













    