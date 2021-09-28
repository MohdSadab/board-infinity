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
    let button=createElement("button");
    button.innerHTML='update';
    console.log(button)
    para.appendChild(button);
    appendChild(para);
    button.addEventListener('click',()=>{
        console.log('this')
        inputarea.value=para.getAttribute('data-value')
        item=para
        
    })
    inputarea.value='';
    para.addEventListener('dblclick', ()=>{
        const parent=document.getElementById("root");
        parent.removeChild(para)
    })
}

function setItemValue(event,curr){
   
}

function updateItemValue(event){
    const inputValue=getInputValue().value
    const elem=item.getElementsByTagName('button')[0]
    item.innerText=inputValue
    item.setAttribute('data-value',inputValue)
    item.appendChild(elem)
}

//add item 
//get value from input area 
//get output area
//create an element in which you want append the value
//append the value get by user(via input text)
//append the element(which we have created in previous step ) as a child to the (output area)



