
function validateform()
{
    let x = document.forms["form1"]["firstname"].value;
    if(x == "")
    {
        document.write("Hello");
        // alert("Please fill the name first");
        return false;
    }
}