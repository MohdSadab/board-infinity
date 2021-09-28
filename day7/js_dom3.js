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
    const val=document.querySelector("#item_input");
    return val
}



function appendChild(child){
    const parent=document.getElementById("root");
    parent.appendChild(child);
}

let index=0;
let item=null;
function addItem(){
    let inputarea=getInputValue();
    let para=createElement("p",inputarea.value);
    para.setAttribute("data-value",inputarea.value)
    appendChild(para);
    // para.addEventListener('click',()=>{
    //     // step 1 for update
    //     item=para // para is the element which we clicked
    //     // step 2 for update
    //     inputarea.value=para.getAttribute('data-value')

        
    // })
    inputarea.value='';
    // para.addEventListener('dblclick', ()=>{
    //     const parent=document.getElementById("root");
    //     parent.removeChild(para)
    // })
}

function setItemValue(event,curr){
   
}

function updateItemValue(event){
    // step 3  
    const input =getInputValue().value
    // step 4
    item.innerText=input
   
}

/**
 * update item steps
 * 1-> graps(save the refrence) of  the element you want to update
 * 2-> make a copy of the element value in the input area
 * 3-> get the input value
 * 4-> use the item ref(step 1) and assign value from step 3
 */


// event bubbling 
const saveRefrence =(event)=>{
    // step 1 for update
    item=event.target// para is the element which we clicked
    // step 2 for update
    let inputarea=getInputValue();
    inputarea.value=item.getAttribute('data-value')
    
}

function eventBubble(event){
    console.log(event.currentTarget.getAttribute("id"),"event called by")
    // console.log(event.target,"event origin")
}
//onclick ,vaaalue of clicked para should be passed into input box
//save reference of the clicked element(event.target)
//get the input value
//update  the value of the refrenced element (saved in step 2)
let targetElement;
const saveRefrence2 =(event)=>{
    targetElement=event.target
    let elementValue=event.target.innerText;
    let inputarea=getInputValue();
    inputarea.value=elementValue;
}

const update2=()=>{
    let inputarea=getInputValue().value;
    targetElement.innerText=inputarea
}