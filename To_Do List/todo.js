let written = document.getElementById("inptbx");
let maintext = document.getElementById("list-container");
let mybtn = document.getElementById("addbtn");

mybtn.addEventListener("click", () => {
    if (written.value == '') {
        alert("not written anything")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = written.value;
        maintext.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        localStorage.setItem("data",maintext.innerHTML)
        written.value = '';
    }
})
maintext.addEventListener("click", function(e) {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        localStorage.setItem("data",maintext.innerHTML)
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        localStorage.setItem("data",maintext.innerHTML)
    }
})

maintext.innerHTML = localStorage.getItem("data");

