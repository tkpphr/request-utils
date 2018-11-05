import * as RequestUtils from "request-utils";

window.addEventListener("load",async ()=>{
    try{
        const blob=await RequestUtils.get("image.bmp","blob");
        const img=document.createElement("img");
        img.src=URL.createObjectURL(blob);
        document.body.appendChild(img);
    }catch(error){
        const p=document.createElement("p");
        p.innerHTML=error;
        document.body.appendChild(p);
    }
});