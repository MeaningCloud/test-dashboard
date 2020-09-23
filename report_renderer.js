"using strict"

let count = 0;

function myFunction() {
    let reportDiv = $("#reports")
    reportDiv.append("<p> HELLO </p>")

    
/*
    <ul>
    </ul>

    let startYear = $("#startYear option:selected").text();
    let endYear = $("#endYear option:selected").text();
    if(startYear > endYear){
        let a = startYear
        startYear = endYear
        endYear = a
    }
    let imageName = element + "_" + startYear + "_" + endYear + ".png";
    console.log(imageName);

    clear();
    let imageParent = document.getElementById("body");
    let image = document.createElement("img");
    image.id = "id";
    image.className = "classImg";
    image.src = "model/combine/diagrams/" + imageName; // image.src = "IMAGE URL/PATH"
    imageParent.appendChild(image);
*/
}

function clear() {
    document.getElementById("body").innerHTML = "";
}

$(document).ready(function() {
    myFunction();
    let path = window.location.pathname;
    path = path.substring(0, path.lastIndexOf('/'));
    console.log(path)

    let reportsPath = path + "/reports"

    console.log(reportsPath)


    var fileNames = new Array();
    $.ajax({
      url: "reports",
      success: function(data){
            print(data)

        /* $(data).find("td > a").each(function(){
            if(openFile($(this).attr("href"))){
                fileNames.push($(this).attr("href"));
            }           
         });*/
      }
    }); 
    /*
    console.log(fileNames);
    function openFile(file) {
        var extension = file.substr( (file.lastIndexOf('.') +1) );
        switch(extension) {
            case 'jpg':
            case 'png':
            case 'gif':   // the alert ended with pdf instead of gif.
            case 'zip':
            case 'rar':
            case 'pdf':
            case 'php':
            case 'doc':
            case 'docx':
            case 'xls':
            case 'xlsx':
                return true;
                break;
            default:
                return false;
        }
    };
    */
});