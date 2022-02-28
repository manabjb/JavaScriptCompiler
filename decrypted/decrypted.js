var input = document.querySelector('#clear');

var textarea = document.querySelector('#editor');

var submit = document.getElementById("run")[0];



input.addEventListener('click', function () {

    textarea.value = '';

}, false);



function about() {

  document.getElementById("editor").value = "alert('hi');\nconsole.log('Developed by ManabJB');";

}


function comp() { 

    try

        {

            eval( "" + textarea.value + "" )        }

        catch(err)

        {

           alert("Not a JavaScript Code") 

        }

}
