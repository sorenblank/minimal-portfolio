// function myFunction() {
//     let element = document.body;
//     element.classList.toggle("dark");
//     var x = document.getElementById("myDIV");
//     if (x.innerHTML === "Dark") {
//         x.innerHTML = "Light";
//     } else {
//         x.innerHTML = "Dark";
//     }



//     let body = document.body;

//     x.addEventListener('change', function () {
//         localStorage.setItem('dark', this.checked);
//         if (this.checked) {
//             body.classList.add('dark')
//         } else {
//             body.classList.remove('dark')
//         }

//         if (localStorage.getItem('dark')) {
//             x.classList.add('dark');
//         }
//     })
// };

const x = document.getElementById('myDIV');

const body = document.body;
const isDarkMode = localStorage.getItem('dark') === 'true';

const y = document.getElementById('textmode');
y.textContent = localStorage.getItem("buttonText") || "Dark";

// Apply initial theme
if (isDarkMode) {
    body.classList.add('dark');
}

// Toggle dark mode
function myFunction() {
    body.classList.toggle('dark');
    const newTheme = body.classList.contains('dark');
    localStorage.setItem('dark', newTheme);


    if (y.textContent === "Dark") {
        y.textContent  = "Light";
    }else {
        y.textContent  = "Dark";
    }
    localStorage.setItem("buttonText", y.textContent);
};