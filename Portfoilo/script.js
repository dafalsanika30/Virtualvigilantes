smesg=document.getElementById("smesg");
pmesg=document.getElementById("pmesg");
emesg=document.getElementById("emesg");

function openmesg1(){
    smesg.style.display="flex";
    pmesg.style.display="none";
    emesg.style.display="none";
}

function openmesg2(){
    smesg.style.display="none";
    pmesg.style.display="flex";
    emesg.style.display="none";
}

function openmesg3(){
    smesg.style.display="none";
    pmesg.style.display="none";
    emesg.style.display="flex";
}