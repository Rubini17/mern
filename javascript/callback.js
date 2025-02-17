// function f1(msg, greet)
// {
//     console.log(msg);
//     greet();
// }

// function f2()
// {
//     console.log("wlecome back");
// }
// f1("hiii, welcome", f2);

function formSub(msg, cbfun)
{
    if(cbfun())
    {
        console.log(msg);
    }
    else{
        console.log("form is not submmitted");
    }
}

function formval(){
  console.log("Form is validated");
  return true;
}

formSub("FORM is submitted", formval);