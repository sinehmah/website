function loadpage(id) {
    console.log(id)
    if (id == "service") {
        console.log('loaded menu')
        document.getElementById("hitbox").style.opacity = 1
        document.getElementById("html").style.cursor = "pointer"
        document.getElementById("programpage").style.cursor = "pointer"
        document.getElementById("ding").style.cursor = "pointer"
        document.getElementById("thing").style.cursor = "pointer"
    } else if (id == "contact") {
        location.href = "contact.html"
    } else if (id == "about") {
        location.href = "index.html"
    } else if (id == "html") {
        location.href = "htmlpage.html"
    } else if (id == "programpage") {
        location.href = "programpage.html"
    } else if (id == "ding") {
        location.href = "javascriptpage.html"
    } else if (id == "thing") {
        location.href = "csspage.html"
    }
}
function closemenu() {
    console.log('menu closed')
    document.getElementById("hitbox").style.opacity = 0
    document.getElementById("html").style.cursor = "default"
    document.getElementById("programpage").style.cursor = "default"
    document.getElementById("ding").style.cursor = "default"
    document.getElementById("thing").style.cursor = "default"
}
function closemenuif() {
    setTimeout(() => {
        if (document.getElementById("hitbox").matches(':hover')) {
        document.getElementById("hitbox").style.opacity = 1
        document.getElementById("html").style.cursor = "pointer"
        document.getElementById("programpage").style.cursor = "pointer"
        document.getElementById("ding").style.cursor = "pointer"
        document.getElementById("thing").style.cursor = "pointer"
    } else {
        closemenu()
    }
    }, 100);
    
}