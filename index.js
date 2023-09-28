const  inputBox = document.getElementById("input-box");
const  listContainer = document.getElementById("list-container");

function addTask(){
        if(inputBox.value === ''){
            alert("You must write something!");
        }
        else{
            let li = document.createElement("li"); // <li>Hello2</li>
            console.log("li element", li);
            li.innerHTML = inputBox.value; 
            listContainer.appendChild(li);
            let span = document.createElement("span");  // <span></span>
            span.innerHTML ="\u00d7"; // <span>X</span>
                                    // li ->  <li>Hello2</li>
            li.appendChild(span);  // <li>Hello2 <span>u00d7</span></li> // Hello2 X

        
        }
        inputBox.value ="";
        saveData()
}

listContainer.addEventListener("click", function(e){

    // console.log('li tag name clicked',e.target.tagName)

    if(e.target.tagName === "LI"){
    
        e.target.classList.toggle("checked");
     }
        else if(e.target.tagName === "SPAN"){ 
            e.target.parentElement.remove();
            saveData()
        }
    }, false);

    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");

    }
    showTask();





    
    // const arr = [1,2,3,4,5]
    // // arr * 2
    // let arr2 = []

    // for(i=0;i<arr.length;i++) {
    //    arr2[i] = arr[i] * 2;
    // }

    // const arr3 = arr.map(item => item * 2);
    // console.log("arr3 printing", arr3)
