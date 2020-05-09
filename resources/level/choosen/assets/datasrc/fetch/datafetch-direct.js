
//Feeder Function
let count  =0;

for(let j = 1; j <= data.length; j++){
    //Create a div element with id=myD + j
    var idhere = document.getElementById("directList");
    var d = document.createElement("div");
    d.className = "directList__single";
    d.innerHTML = "<ul id=\"myD" + j + `\"></ul>`;
    idhere.appendChild(d);
    //Inserting content of each head
    var idAll = document.getElementById("myD" + j);
    for(let k = 0; k < data[j - 1].innerdata.length ; k++){
        var el2 = document.createElement("li");
        el2.innerHTML = '<a href = \"'  + data[j - 1].innerdata[k][1] + ' \" target=\"_blank\"><img src=\"' + data[j-1].innerdata[k][2] + '\"> </a>';
        idAll.appendChild(el2);
    }
    count+=data[j-1].innerdata.length;
}
