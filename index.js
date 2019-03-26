var navList = document.getElementById("nav_list");
var mainIframe = document.getElementById("main_iframe")

navList.addEventListener('click', function (event) {
    console.log(event.target.textContent);
    target = event.target.textContent;
    if (target === "Main Home") {
        console.log(1);
        mainIframe.setAttribute("src", "Main Home.html");
    }
    else if (target === "Study Timeline") {
        console.log(1);
        mainIframe.setAttribute("src", "studyTimeline.html");
    }
    else if (target === "Daily Schedule") {
        console.log(1);
        mainIframe.setAttribute("src", "DailySchedule.html");
    }
    else if (target === "My Project") {
        console.log(1);
        mainIframe.setAttribute("src", "MyProject.html");
    }
    else if (target === "Memoirs") {
        console.log(1);
        mainIframe.setAttribute("src", "Memoirs.html");
    }




})