var college = sessionStorage.getItem("college");
document.getElementById("college").textContent = college;

var logo = sessionStorage.getItem("logo");
if (logo) {
    document.getElementById("logo").src = logo;
} else {
    document.getElementById("logo").src = "logo.jpeg";}

var session = sessionStorage.getItem("session");
document.getElementById("session").textContent = `Session : ${session}`;

var subject = sessionStorage.getItem("subject");
document.getElementById("subject").textContent = subject;

var branch = sessionStorage.getItem("branch");
document.getElementById("branch").textContent = branch;

var yearSem = sessionStorage.getItem("yearSem");
document.getElementById("yearSem").textContent = yearSem;

var teacher = sessionStorage.getItem("teacher");
document.getElementById("teacher").textContent = teacher;

var stdname = sessionStorage.getItem("name");
document.getElementById("stdname").textContent = stdname;

var enrollment = sessionStorage.getItem("enrollment");
document.getElementById("enrollment").textContent = enrollment;
