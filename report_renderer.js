"using strict"

function myFunction(reportsList, path) {
    let reportDiv = $("#reports")
    
    reportsSorted = []
    for(element of reportsList){
        elementSplit = element.path.split("-")
        timeSplit = elementSplit[1].split(":")
        date = new Date(elementSplit[4], parseInt(elementSplit[3]) - 1, elementSplit[2], parseInt(timeSplit[0]) + 2, timeSplit[1])
        elementPath = element.path
        let obj = {date: date,
                   path: elementPath
                }
        reportsSorted.push(obj);
    }

    reportsSorted.sort((a, b) => {
        return b.date - a.date;
    })

    // create unordered list
    reportDiv.append("<ul>")
    for(element of reportsSorted){
        elementSplit = element.path.split("-")
        timeSplit = elementSplit[1].split(":")

        reportDiv.append(`<li> <a href="${path}/${element.path.replace(":", "%3A")}/index.html">${elementSplit[0]}-${parseInt(timeSplit[0]) + 2}:${timeSplit[1]}-${elementSplit[2]}-${elementSplit[3]}-${elementSplit[4]}</a></li>`)
    }
    reportDiv.append("</ul>")
}

$(document).ready(function() {
    let path = window.location.pathname;
    path = path.substring(0, path.lastIndexOf('/'));

    let reportsPath = path + "/reports"

    $.ajax({
        url: "https://api.github.com/repos/MeaningCloud/test-dashboard/git/trees/master",
    }).done(function( data ) {
        let reportsInfo = null;
        for (element of data.tree){
            if(element.path === "reports")
                reportsInfo = element;
        }

        $.ajax({
            url: reportsInfo.url,
        }).done(function( data ) {
            myFunction(data.tree, reportsPath)
        });
    });
});
