//JSC - ManabJB
function theme() 
{
    theme_change = document.getElementById("editor")
    theme_change.classList.toggle("dark")
    theme_change = document.getElementById("change")
    theme_change.classList.toggle("lights")
    var elem = document.getElementById("change"); 
    if (elem.value=="Dark") elem.value = "Light"; 
    else elem.value = "Dark";
}
