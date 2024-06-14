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

//Back to index.html
function BackToIndex() {
    window.location.href = 'index.html'; 
}

//Convert into pdf
function convertToPDF() {
    const element = document.getElementById('content');
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const responsive = () => {
    if (screenWidth <= 700) {
    let style = document.createElement('style');
    style.textContent =`
    .FrontPage{
      width:793.92px;
      height: 1122.24px;
      background-color: #fff;
      color: #111;
      text-align: center;
      padding: 3.2vh 0;
      position: relative;
      border: 3px solid #010101;
  }
  #college{
      font-size: 4vh;
      margin-bottom: 1.8vh;
      width:95%;
  }
  #logo{
      height: 32vh;
      margin-bottom: 2vh;
  }
  #session{
      font-size: 3vh;
      margin-bottom: 1.15vh;
  }
  #subject{
      font-size: 3.8vh;
      margin-bottom: 2.4vh;
  }
  #branch{
      font-size:3vh;
      width:98%;
  }
  #yearSem{
      font-size: 3vh;
  }
  .bottom{
      display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        margin-top: 13.5vh;
  }
  .bottom h1{
    font-size: 2.4vh;
  }`;
  document.head.appendChild(style);
  /*setTimeout( function(){
    let tag = document.querySelector("style");
    tag.remove();
    document.querySelector(".FrontPage").style.height = "90vh";
      document.querySelector(".FrontPage").style.width = "100vw";
  },1)*/
        } 
      }
      responsive();
  window.addEventListener('resize', responsive);
    html2pdf()
      .from(element)
        .save(`${subject} - ${stdname}.pdf`);
      document.getElementById('content').style.border = "none";
      /*setTimeout(function(){
        document.getElementById('content').style.border = "3px solid #010101;";
      },1);*/
      document.querySelector(".FrontPage").style.width = "793.92px";
      document.querySelector(".FrontPage").style.height = "1122.24px";
}

