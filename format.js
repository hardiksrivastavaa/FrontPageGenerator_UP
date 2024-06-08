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
//Convert into pdf
function convertToPDF() {
    const element = document.getElementById('content');
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const responsive = () => {
    if (screenWidth <= 700) {
    let style = document.createElement('style');
    style.textContent =`
    .FrontPage{
      width: 793px;
      height: 1122px;
      background-color: #fff;
      color: #111;
      text-align: center;
      padding: 3.2vh 0;
      position: relative;
      border: 8px solid #7bd3ff;
  }
  #college{
      font-size: 3.82vh;
      margin-bottom: 1.8vh;
  }
  #logo{
      height: 24.3vh;
      margin-bottom: 2vh;
  }
  img{
      object-fit: contain;
      object-position: center;
  }
  #session{
      font-family: 'PT Serif', serif;
      font-size: 2.4vh;
      margin-bottom: 1.15vh;
  }
  #subject{
      font-family: 'PT Serif', serif;
      font-size: 3.6vh;
      color: #005659;
      margin-bottom: 2.4vh;
  }
  #branch{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 2.58vh;
  }
  #yearSem{
      font-size: 2.58vh;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
  }
  .bottom{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:0 2vh;
      margin-top: 13.5vh;
  }
  .left{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      height: 9vh;
     font-family: Arial, Helvetica, sans-serif;
     font-weight: 400;
  }
  .right{
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 9vh;
      justify-content: flex-start;
      gap: 0vh;
      
  }
  .bottom h1{
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.82vh;
  }
  #button{
      height: 3.4rem;
      width: 14rem;
      background: #b5e5f0;
      font-size: 1.2vh;
      box-shadow: 0 0 0.5vmax #b4f5fa;
      border-radius: 3px;
      margin-left: 3.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
      text-shadow: 0 .3rem .5rem rgba(0, 0, 0, 0.4);
      cursor: pointer;
      margin: 3vh 0;
      text-transform: uppercase;
  }`;
  document.head.appendChild(style);
  setTimeout( function(){
    let tag = document.querySelector("style");
    tag.remove();
    document.querySelector(".FrontPage").style.height = "90vh";
      document.querySelector(".FrontPage").style.width = "100vw";
  },1)
        } 
      }
      responsive();
  window.addEventListener('resize', responsive);
    html2pdf()
      .from(element)
      .save('output.pdf');
      document.getElementById('content').style.border = "none";
      setTimeout(function(){
        document.getElementById('content').style.border = "8px solid #7bd3ff";
      },1);
      document.querySelector(".FrontPage").style.height = "1122px";
      document.querySelector(".FrontPage").style.width = "793px";
}

