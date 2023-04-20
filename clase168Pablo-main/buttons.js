AFRAME.registerComponent("buttons",{
    init:function(){
        var button1=document.createElement("button")
        button1.innerHTML="calificar"
        button1.setAttribute("id","b1")
        button1.setAttribute("class","btn btn-warning")

        var button2=document.createElement("button")
        button2.innerHTML="ordenar"
        button2.setAttribute("id","b2")
        button2.setAttribute("class","btn btn-warning")

        var gd=document.getElementById("d1")
        gd.appendChild(button1)
        gd.appendChild(button2)
    }
})