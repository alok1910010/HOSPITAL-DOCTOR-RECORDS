//ALOK YADAV 
//HOSPITAL-DOCTOR-RECORDS
document.querySelector("form").addEventListener("submit",mad)
function mad(e){
    e.preventDefault()
    var name=document.querySelector("#name").value
    var doc=document.querySelector("#docId")
    var dep=document.querySelector("#dept").value
    var exp=document.querySelector("#exp").value
    var em=document.querySelector("#email").value
    var num=document.querySelector("#mbl").value
    var tro=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=name
    var td2=document.createElement("td")
    td2.innerText=doc
    var td3=document.createElement("td")
    td3.innerText=dep
    var td4=document.createElement("td")
    td4.innerText=exp
    var td5=document.createElement("td")
    td5.innerText=em
    var td6=document.createElement("td")
    td6.innerText=num
    var td7=document.createElement("td")
    
    if((td4)>5){
        td7.innerText="Senior"
    }
    else if((td4)<2){
        td7.innerText="Trainee"
    }
    else if((td4)>2 && (td4)<5){
        td7.innerText="Junior"

    }
    console.log(td7)

    
    var td8=document.createElement("td")
    td8.innerText="Delete"
td8.addEventListener("click",del)
    tro.append(td1,td2,td3,td4,td5,td6,td7,td8)
    var m=document.querySelector("tbody")
    m.append(tro)
    


}
function del(){
    e.target.parentNode.remove()

}

