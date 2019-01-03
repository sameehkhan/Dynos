function myFunction() {
 var d = new Date();
 var hours = d.getHours();
 var currentTime = d.toLocaleDateString();
 var counter = SpreadsheetApp.getActiveSheet().getRange('B1').getValues();
 
 if (hours >= 6 && hours <= 23) {
 var response = UrlFetchApp.fetch('https://instapx.herokuapp.com');
 SpreadsheetApp.getActiveSheet().getRange('A' + counter).setValue('Visted at ' + currentTime + ' ' + hours + 'h');
 SpreadsheetApp.getActiveSheet().getRange('B1').setValue(Number(counter) + 1);
 }
}
