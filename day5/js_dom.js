//  childelement  in dom  immideately direct relationship with parent
//  siblings   same level (same parrent)

//  dom (document object model)

//  in old browser we use  getElementById, getElementsByTagName, getElementsByClassName

//  in current browser or(new version) we use querySelector or querySelectorAll


//  css selector mainly 3 types  bytag by class name and by id 
// class name .nameOftheClass  
//  for id we use #nameOfId
//  for tag we use tagname  
function createElement(elemtType,text){
    const elem=document.createElement(elemtType);
    elem.textContent = text;
    return elem;
}


function getInputValue(){
    const val=document.querySelector("#item_input").value;
    return val
}



function appendChild(child){
    const parent=document.getElementById("root");
    parent.appendChild(child);
}

let index=0;
let item_id=-1;
function addItem(){
    const val=getInputValue();
    
    const elem =createElement('p',val);
    index++;
    let curr=index;
    elem.setAttribute("id",index);
    elem.addEventListener("click",(event)=>setItemValue(event,curr))
    //console.log(elem.id)
    appendChild(elem)
}

function setItemValue(event,curr){
    const val=document.querySelector("#item_input");
    val.value=document.getElementById(curr).innerText
    item_id=curr
}

function updateItemValue(event){
    const val=getInputValue();
    const item=document.getElementById(item_id);
    console.log(item,">>>")
    // item.innerHTML=val;
}



