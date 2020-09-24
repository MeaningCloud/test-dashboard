"using strict"

function myFunction(reportsList, path) {
    let reportDiv = $("#reports")
    reportDiv.append("<ul>")
    for(element of reportsList){
        console.log(element)
        console.log(element.path.replace(":", "%3A"))
        reportDiv.append(`<li> <a href="${path}/${element.path.replace(":", "%3A")}/index.html">${element.path} </a></li>`)
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
