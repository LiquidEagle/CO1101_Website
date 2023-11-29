function showInfo(speakerRole,speakerName, speakerDescription) {
    // Get the content of the box_description class

    var boxElement = event.target.closest('.box');
    var boxDescription = boxElement.querySelector(".box_description");
    boxDescription.innerHTML = `<h1><b>${speakerName}</b></h1><br><b>${speakerRole}</b><br>${speakerDescription}`;


    // Display the content 
    boxDescription.style.visibility = (boxDescription.style.visibility === 'visible') ? 'hidden' : 'visible';
}



function filterTable() {

    var dropmenu, selection, table, rows;
    dropmenu = document.getElementById("day");
    selection = dropmenu.value;
    table = document.getElementById("timetable");
    rows = table.getElementsByTagName("tr");

    for(var i=1; i<rows.length; i++) {
        var row, day;
        row = rows[i];
        day = row.cells[0].textContent.trim();
        
        if (selection == "all" || day == selection) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
        
    }
}