console.log("yekhdem")


function valider(){
    //nom
    if(document.querySelector("#nom").value.length==0){
        document.querySelector("#msgNom").innerHTML="merci de saisir votre nom"
        document.querySelector("#nom").style.color="#b7094c"
        document.querySelector("#nom").style.border="2px solid #b7094c"
    }else{
        document.querySelector("#msgNom").innerHTML=""
    } 
    //prenom
    if(document.querySelector("#prenom").value.length==0){
        document.querySelector("#msgPrenom").innerHTML="merci de saisir votre prenom"
        document.querySelector("#prenom").style.color="#b7094c"
        document.querySelector("#prenom").style.border="2px solid #b7094c"
    
    }else{
        document.querySelector("#msgPrenom").innerHTML=""
    }
    //cin
    if(document.querySelector("#cin").value.length==0){
        document.querySelector("#msgCIN").innerHTML="merci de saisir votre n° de carte d'identité"
        document.querySelector("#cin").style.color="#b7094c"
        document.querySelector("#cin").style.border="2px solid #b7094c"
    }else if (document.querySelector("#cin").value.length<8){
        document.querySelector("#msgCIN").innerHTML="CIN invalide"
        document.querySelector("#cin").style.color="#b7094c"
        document.querySelector("#cin").style.border="2px solid #b7094c"
    }else{
        document.querySelector("#msgCIN").innerHTML=""
    }
    //age
    if(document.querySelector("#age").value.length==0){
        document.querySelector("#msgAge").innerHTML="merci de saisir votre age"
        document.querySelector("#age").style.color="#b7094c"
        document.querySelector("#age").style.border="2px solid #b7094c"

    }else{
        document.querySelector("#msgAge").innerHTML=""
    }
    //email
    if(document.querySelector("#email").value.length==0){
        document.querySelector("#msgEmail").innerHTML="merci de saisir votre email"
        document.querySelector("#email").style.color="#b7094c"
        document.querySelector("#email").style.border="2px solid #b7094c"

    }else if((document.querySelector("#email").value.search(".")==-1) || (document.querySelector("#email").value.search("@")==-1)){
        document.querySelector("#msgEmail").innerHTML="email invalide"
        document.querySelector("#email").style.color="#b7094c"
        document.querySelector("#email").style.border="2px solid #b7094c"
    }else{
        document.querySelector("#msgEmail").innerHTML=""
    }
    //password
    if(document.querySelector("#password").value.length==0){
        document.querySelector("#msgPassword").innerHTML="merci de saisir votre mot de passe"
        document.querySelector("#password").style.color="#b7094c"
        document.querySelector("#password").style.border="2px solid #b7094c"

    }else{
        document.querySelector("#msgPassword").innerHTML=""
    }
}