    //Animation init
    new WOW().init();

    //Modal
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })

    // Material Select Initialization
    $(document).ready(function () {
      $('.mdb-select').material_select();
    });

    // MDB Lightbox Init
    $(function () {
      $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
    });

// Get the modal
var modal = document.getElementById("orderModal");

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let x = 1;

function addRow() {
    var parantDiv = document.getElementById("orderFormGroup");
    var button = document.getElementById("addButton");
    var outerDiv = document.createElement("DIV");
    
    outerDiv.setAttribute("class", "form-row");
    
    let innerDiv1 = document.createElement("DIV");
    innerDiv1.setAttribute("class", "col-6");
    
    let innerDiv2 = document.createElement("DIV");
    innerDiv2.setAttribute("class", "col-2");
    
    var select = document.createElement("SELECT");
    select.setAttribute("class", "custom-select");
    
    var optS = document.createElement("option");
    optS.setAttribute("selected", "true");
    optS.innerHTML = "Please Select A Item";
    
    var opt1 = document.createElement("option");
    opt1.setAttribute("value", "1");
    opt1.innerHTML = "Hummus - $5";
    
    var opt2 = document.createElement("option");
    opt2.setAttribute("value", "2");
    opt2.innerHTML = "Roasted Alberta Carrots - $13";
    
    var opt3 = document.createElement("option");
    opt3.setAttribute("value", "3");
    opt3.innerHTML = "Vendome Sausage Roll - $11";
    
    var opt4 = document.createElement("option");
    opt4.setAttribute("value", "4");
    opt4.innerHTML = "Smoked Salmon Potato Donuts - $13";
    
    var opt5 = document.createElement("option");
    opt5.setAttribute("value", "5");
    opt5.innerHTML = "Avocado Toast - $15";
    
    select.appendChild(optS);
    select.appendChild(opt1);
    select.appendChild(opt2);
    select.appendChild(opt3);
    select.appendChild(opt4);
    select.appendChild(opt5);
    
    innerDiv1.appendChild(select);
    
    var numInput = document.createElement("INPUT");
    numInput.setAttribute("type", "number");
    numInput.setAttribute("class", "form-control");
    x++;
    numInput.setAttribute("id", "quantity" + x);
    
    innerDiv2.appendChild(numInput);
    
    outerDiv.appendChild(innerDiv1);
    outerDiv.appendChild(innerDiv2);
    
    let insertedNode = parantDiv.insertBefore(outerDiv, button);
}