function validation(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("sub").value;
    var message=document.getElementById("Mes").value;

    if(username==""){
        alert("must have a username");
        document.form1.name.focus();
        return false;
    }
    if(email==""){
        alert("must have a email");
        document.form1.mail.focus();
        return false;
    }
    if(subject==""){
        alert("must have a subject");
        document.form1.subj.focus();
        return false;
    }
    if(message==""){
        alert("must have message");
        document.form1.mess.focus();
        return false;
    }
    return true;
}