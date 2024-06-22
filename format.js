var college = sessionStorage.getItem("college");
document.getElementById("college").textContent = college;

var logo = sessionStorage.getItem("logo");
if (logo) {
    document.getElementById("logo").src = logo;
} else {
    document.getElementById("logo").src = "img/logo.jpeg";}

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
            style.textContent = `
                .FrontPage {
                    width: 793.92px;
                    height: 1122.24px;
                    text-align: center;
                    padding: 3.7vh 0;
                    position: relative;
                }
                #college {
                    font-size: 3.82vh;
                    margin-bottom: 1.8vh;
                }
                #logo {
                    height: 24.3vh;
                    margin-bottom: 2vh;
                }
                img {
                    object-fit: contain;
                    object-position: center;
                }
                #session {
                    font-family: 'PT Serif', serif;
                    font-size: 2.4vh;
                    margin-bottom: 1.15vh;
                }
                #subject {
                    font-family: 'PT Serif', serif;
                    font-size: 3.6vh;
                    margin-bottom: 2.4vh;
                }
                #branch {
                    font-family: 'PT Serif', serif;
                    font-weight: 400;
                    font-size: 2.58vh;
                }
                #yearSem {
                    font-size: 2.58vh;
                    font-family: 'PT Serif', serif;
                    font-weight: 400;
                }
                .bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 2vh;
                    width: 100%;
                }
                .left {
                    display: flex;
                    align-items: flex-start;
                    flex-direction: column;
                    height: 9vh;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: 400;
                }
                .right {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    height: 9vh;
                    justify-content: flex-start;
                    gap: 0vh;
                }
                .bottom h1 {
                    font-family: "Poppins", sans-serif;
                    font-weight: 500;
                    font-style: normal;
                    font-size: 1.82vh;
                }
            `;
            document.head.appendChild(style);

            setTimeout(function () {
                let tag = document.querySelector("style");
                tag.remove();
                document.querySelector(".FrontPage").style.height = "90vh";
                document.querySelector(".FrontPage").style.width = "100vw";
            }, 1);
        }
    };

    responsive();
    window.addEventListener('resize', responsive);

    const opt = {
        margin: 0,
        filename: `${subject} - ${stdname}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).toPdf().get('pdf').then(function (pdf) {
        let totalPages = pdf.internal.getNumberOfPages();
        for (let i = totalPages; i > 1; i--) {
            pdf.deletePage(i);
        }
    }).save();

    document.getElementById('content').style.border = "none";

    setTimeout(function () {
        document.getElementById('content').style.border = "3px solid #111111";
        document.querySelector(".FrontPage").style.height = "1122.24px";
        document.querySelector(".FrontPage").style.width = "793.92px";
    }, 1);
}

 

                