function sortTable(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex].innerHTML;
      y = rows[i + 1].getElementsByTagName("td")[columnIndex].innerHTML;
      
      floatx=parseFloat(x);
      floaty=parseFloat(y);

      if(floatx){
        //Caz de numere, nu trebuie caz la int
        if (floatx > floaty) {
          shouldSwitch = true;
          break;
        }
      }
      else{
        //Caz de stringuri
        if (x.toLowerCase() > y.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }

    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

}
