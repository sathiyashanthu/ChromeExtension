let box=document.getElementById("inp-btn")
let del=document.getElementById("del-btn")
let txtEl=document.getElementById("txt-el")
let ulEl=document.getElementById("ul-el")
let tabBtn=document.getElementById("tab-btn")
let arr=[ ] 
let element=JSON.parse(localStorage.getItem("arr"))
if(element)
{  arr=element
    render(arr)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        arr.push(tabs[0].url)
        localStorage.setItem("arr", JSON.stringify(arr) )
        render(arr)
    })
})
del.addEventListener("dblclick",function(){
    localStorage.clear()
    arr=[]
    render(arr)
})
box.addEventListener("click",function () {
  if(txtEl.value!="")
  {
  arr.push(txtEl.value)
  clear() 
  localStorage.setItem("arr",JSON.stringify( arr))
  render(arr) 

  }  
} )
function clear()
{
    txtEl.value=""
}
function render( leads){
    let listitems=""
    for(let i=0;i<leads.length;i++)
    {
        listitems+=`
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML=listitems
}
