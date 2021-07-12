let content = document.getElementById('content')
let userQuery = document.getElementById('userQueryInput')
let btn = document.getElementById('categoryButton')
let ok = document.getElementById('Ok')
let searchI = document.getElementById('search')
let save_btn = document.getElementById('save-btn')
let search_btn = document.getElementById('search-btn');
let append_btn = document.getElementById('append-btn');


window.onload = (e) => {
	content.disabled = true;
    userQuery.disabled = true;
    
    btn.style.display = 'none'
}


ok.addEventListener("click", () => {
    if(document.getElementById('new').checked){
        content.disabled = false;
        userQuery.disabled = false;
        ok.style.display = 'none'
        btn.innerHTML = "Save"
        btn.style.display = 'initial'

        btn.addEventListener("click", () => {
            let userContent = content.value;
            let fileName = userQuery.value;
            localStorage.setItem(fileName, userContent);
            console.log(localStorage.getItem(fileName))
        })
    }

    else if(document.getElementById('edit').checked){
        userQuery.disabled = false;
        ok.style.display = 'none'
        btn.innerHTML = "Edit"
        btn.style.display = 'initial'

        btn.addEventListener("click", () => {
            let fileName = userQuery.value;
            if(fileName == null)
            {
                console.log("Please mention Content Name")
            }
            else{
                var findContent = localStorage.getItem(fileName)
                if(findContent == null){
                    console.log("Sorry, there is no content named as such")
                }

                else{
                    content.disabled = false;
                    content.innerText = findContent;
                    btn.innerHTML = "Confirm"
                    btn.addEventListener("click", () => {
                        localStorage.removeItem(fileName)
                        let newContent = content.value
                        localStorage.setItem(fileName, newContent)  // Here content.value will be the new value edited by the user
                        console.log(localStorage.getItem(fileName))
                    })
                }
            }
        })

    }

    else if(document.getElementById('delete').checked){
        userQuery.disabled = false;
        ok.style.display = 'none'
        btn.innerHTML = "Delete"
        btn.style.display = 'initial'

        btn.addEventListener("click", () => {
            let fileName = userQuery.value;
            let findContent = localStorage.getItem(fileName)
            if(findContent == null){
                console.log("There is no file named such.")
            }
            else{
                localStorage.removeItem(fileName)
                console.log("Deleted")
            }

        })

    }

    else{
        console.log("Please select a option")
    }
})



// save_btn.addEventListener("click", () =>{
//     let myContentName = nameI.value;
//     let myContent = content.value;
//     localStorage.setItem(myContentName, myContent);
//     console.log(localStorage.getItem(myContentName));

// })


// search_btn.addEventListener("click", () => {
//     if(!searchI.value)
//     {
//         console.log("No");
//     }
//     else{
//         content.innerText = localStorage.getItem(searchI.value);
//     }
// })

