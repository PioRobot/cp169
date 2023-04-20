AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{console.log("found marker")
        this.handdleMarkerFound()})
        this.el.addEventListener("markerLost",()=>{console.log("lost marker")
        this.handdleMarkerLost()})
    },
    handdleMarkerFound:function(){
        var ds=document.getElementById("d1")
        ds.style.display="flex"
        var cb=document.getElementById("b1")
        var ob=document.getElementById("b2")
        cb.addEventListener("click",function(){
            swal({icon:"warning",title:"calficate",text:"porcessing grade"})
        })
        ob.addEventListener("click",function(){
            swal({icon:"https://i.imgur.com/4NZ6uLY.jpg",title:"thanks for your order",text:"the order will arrive soon(maybe)"})
        })
    },
    handdleMarkerLost:function(){
        var ds=document.getElementById("d1")
        ds.style.display="none"
    }
}
)