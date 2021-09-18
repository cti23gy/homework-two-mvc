function showVariable(newName) {  
    console.log("newName app.js " + newName);
}


function setBindings() {
    $("nav a").click(function(e) {
        let btnID = e.currentTarget.id;
        MODEL.getMyVariable(btnID, showVariable);
    });

}

$(document).ready(function() {
    console.log("ready");
    setBindings();
});