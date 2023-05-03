const inputText = document.getElementById("input");
const list = document.getElementById("list");

function addList() {
   if (confirm("Are you sure you wanna get the Data from the JSON API???")){

  
        var http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if(this.readyState === 4) {
                if(this.status === 200) {
                    var data = JSON.parse(this.responseText);
                    for(var i = 0; i < data.length; i++) {
                         let todo = data[i].title;
                        let newList = document.createElement("li");
                        newList.innerText = todo;
                        list.appendChild(newList);

                         newList.addEventListener('click', function() {
        newList.style.textDecoration = "line-through";
        newList.style.color = "red";
        
    })

    newList.addEventListener('dblclick', function() {
        list.removeChild(newList);
    })
                        
                    }
                }
            }
        }
        http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
        http.send();
   
    }

}
     



