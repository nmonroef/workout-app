
// Define the array of workouts with their respective video URLs
let workouts = [
    {
        name: "Smith Machine Shrug",
        videoUrl: "video2.mp4"
    },
    {
        name: "Leverage Shrug",
        videoUrl: "Leverage Shrug.mp4"
    },
    {
        name: "Standing Dumbbell Shrug",
        videoUrl: "videos/Standing%20Dumbbell%20Shrug.mp4"
    },
    {
        name: "Standing Dumbbell Upright Row",
        videoUrl: "videos/Standing%20Dumbbell%20Upright%20Row.mp4"
    },
    {
        name: "Kettlebell Sumo Deadlift High Pull",
        videoUrl: "videos/Kettlebell%20Sumo%20Deadlift%20High%20Pull.mp4"
    },
    {
        name: "Calf-Machine Shoulder Shrug",
        videoUrl: "videos/Calf-Machine%20Shoulder%20Shrug.mp4"
    },
    {
        name: "Barbell Shrug",
        videoUrl: "videos/Barbell%20Shrug.mp4"
    },
    {
        name: "Barbell Behind-the-Back Shrug",
        videoUrl: "videos/Barbell%20Behind-the-Back%20Shrug.mp4"
    },
    // Add more workouts with their respective video URLs
];

// Event listeners for each muscle group button
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
        let className = workout.name.replace(/\s+/g, '-').toLowerCase(); // Convert workout name to lowercase and replace spaces with hyphens
        button.classList.add(className); // Add a class based on the workout name
        button.setAttribute('data-video', findVideoUrl(workout.name)); // Set a data attribute to store the video URL
        exerciseButtons.appendChild(button);

        // Add event listener to the created button
        button.addEventListener("click", function() {
            let videoUrl = button.getAttribute('data-video'); // Retrieve the video URL from the data attribute
            document.querySelector("video").src = videoUrl; // Set the video URL as the src attribute of the video element
        });
    });
}

function findVideoUrl(workoutName) {
    // Find the video URL corresponding to the given workout name
    let foundWorkout = workouts.find(workout => workout.name === workoutName);
    return foundWorkout ? foundWorkout.videoUrl : "";
}

function clearButtons() {
    let exerciseButtons = document.querySelector(".exerciseButtons");
    exerciseButtons.innerHTML = '';
}
