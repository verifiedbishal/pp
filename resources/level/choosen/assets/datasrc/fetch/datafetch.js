
//Feeder Function
let count  =0;
var countSub = document.getElementById("countSubject");
countSub.innerHTML = data.length + ` Topics`;
var countDetails = document.getElementById("countDetails");
countDetails.innerHTML = `Sharing is caring !`;
var countMail = document.getElementById("countMail");
countMail.innerHTML = `<a href=\"mailto:verifiedbishal@gmail.com?subject=Send Resources\">Mail Us The Resources<\/a>`;
for(let j = 1; j <= data.length; j++){
    //Create a div element with id=myD + j
    var idhere = document.getElementById("feedhere");
    var d = document.createElement("div");
    d.className = "buffer__box--single";
    d.innerHTML = "<ul id=\"myD" + j + `\"></ul>`;
    idhere.appendChild(d);
    //Get each div created above and insert its heading and content
    var id = document.getElementById("myD" + j);
    var m = document.createElement("h2");
    m.innerHTML = data[j - 1].heading + '<span>[Click to view / download]</span>';
    id.appendChild(m);
    //Inserting content of each head
    var idAll = document.getElementById("myD" + j);
    for(let k = 0; k < data[j - 1].innerdata.length ; k++){
        var el2 = document.createElement("li");
        el2.innerHTML = '<a href = \"'  + data[j - 1].innerdata[k][1] + ' \" target=\"_blank\">' + data[j - 1].innerdata[k][0] + '</a>';
        idAll.appendChild(el2);
    }
    count+=data[j-1].innerdata.length;
}
var countFiles = document.getElementById("countFiles");
countFiles.innerHTML = count + ` Digital Files In This Page`;
