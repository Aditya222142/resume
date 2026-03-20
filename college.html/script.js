// ---------------- STUDENT DATA ----------------
let students = [
    {name:"Rahul", class:"10", fees:[]},
    {name:"Amit", class:"9", fees:[]},
    {name:"Ravi", class:"8", fees:[]},
    {name:"Sohan", class:"7", fees:[]},
    {name:"Mohan", class:"6", fees:[]},
    {name:"Tinku Sharma", class:"10", fees:[]},
    {name:"Rinku Vishwakarma", class:"12", fees:[]},
    {name:"Aditya Vishwakarma", class:"12", fees:[]},
    {name:"Pooja", class:"7", fees:[]},
    {name:"Neha", class:"6", fees:[]}
];

// Load fees from localStorage
if(localStorage.getItem("students")){
    students = JSON.parse(localStorage.getItem("students"));
}

// ---------------- IMAGE SLIDER ----------------
let images = [
    "images/file:///C:/Users/Aditya/OneDrive/Pictures/download%20(3).jpg",
    "file:///C:/Users/Aditya/OneDrive/Pictures/download%20(4).jpg",
    "images/school3.jpg",
    "images/school4.jpg",
    "images/school5.jpg"
];

let index = 0;
let slider = document.getElementById("slideImage");
let interval = setInterval(changeImage, 5000);

function changeImage(){
    index++;
    if(index >= images.length) index = 0;
    slider.src = images[index];
}

slider.addEventListener("mouseover", function(){
    clearInterval(interval);
});

slider.addEventListener("mouseout", function(){
    interval = setInterval(changeImage, 5000);
});

// ---------------- STUDENT FEE CHECK ----------------
function checkFee(){
    let name = document.getElementById("searchName").value;
    let cls = document.getElementById("searchClass").value;
    let code = document.getElementById("collegeCode").value;

    if(code !== "604"){
        alert("Wrong College Code!");
        return;
    }

    let student = students.find(s =>
        s.name.toLowerCase() === name.toLowerCase() &&
        s.class === cls
    );

    if(student){
        if(student.fees.length === 0){
            document.getElementById("result").innerHTML = "No Fee Paid Yet";
        } else {
            document.getElementById("result").innerHTML =
                "Fees Paid:<br>" + student.fees.join("<br>");
        }
    } else {
        document.getElementById("result").innerHTML = "Student Not Found";
    }
}

// ---------------- ADMIN LOGIN ----------------
function adminLogin(){
    let pass = document.getElementById("adminPass").value;
    if(pass === "222142"){
        document.getElementById("adminPanel").style.display = "block";
        alert("Login Successful");
    } else {
        alert("Wrong Password");
    }
}

// ---------------- PAY FEE ----------------
function payFee(){
    let name = document.getElementById("adminName").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let student = students.find(s =>
        s.name.toLowerCase() === name.toLowerCase()
    );

    if(student){
        student.fees.push(month + " - " + year);
        // Save updated students to localStorage
        localStorage.setItem("students", JSON.stringify(students));
        alert("Fee Paid Successfully");
    } else {
        alert("Student Not Found");
    }
}