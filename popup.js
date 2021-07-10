let content = document.getElementById('content')
let nameI = document.getElementById('name')
let searchI = document.getElementById('search')
let save_btn = document.getElementById('save-btn')
let search_btn = document.getElementById('search-btn');
console.log("Hey");

save_btn.addEventListener("click", () =>{
    
    let myContentName = nameI.value;
    let myContent = content.value;
    localStorage.setItem(myContentName, myContent);
    console.log(localStorage.getItem(myContentName));

})


search_btn.addEventListener("click", () => {
    if(!searchI.value)
    {
        console.log("No");
    }
    else{
        content.innerText = localStorage.getItem(searchI.value);
    }
})

