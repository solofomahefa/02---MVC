const newElement = document.createElement("tbody");
const table = document.getElementById("main");
let html = "";
let array = [];
let count = 0;

function addHandler(){
    let res ={};
    const last = document.getElementById("lastname").value;
    const first = document.getElementById("firstname").value;
    const adress = document.getElementById("adress").value;
    res._id = count +1;
    res.firstName = first;
    res.lastName = last;
    res.adress = adress;
    res.status = false;
    array.push(res);
    onList(array);
    count++;
}

function onList(data) {
    data.forEach((e, i) => {
        if(!e.status) /*rehefa inona ny res.status no true?*/{
            html += "<tr val=" + i + "><td>" + e._id + "</td><td>" + e.firstName + "</td><td>" + e.lastName + "</td><td>" + e.adress + 
            "</td><td><i class ='fas fa-trash-alt'></i><i class ='far fa-circle></i></td></tr>";
        } else {
            html += "<tr><td>" + e._id + "</td><td>" + e.lastName + "</td><td>" + e.firstName + "</td><td>" + e.adress + 
            "</td><td><i class ='fas fa-trash-alt'></i><i class ='fas fa-check-circle></i></td></tr>";
         }
    })
    newElement.setAttribute('id', 'table');
    newElement.innerHTML = html;
    table.appendChild(newElement);
    html = "";

    document.getElementById("lastname").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("adress").value = "";
}