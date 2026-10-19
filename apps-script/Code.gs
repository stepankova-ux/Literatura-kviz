// Google Apps Script – zapisuje výsledky žáků do Google Tabulky.
// Vlož do Rozšíření > Apps Script v tabulce (viz README.md).

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Datum", "Jméno", "Okruh", "Body", "Celkem", "Procenta"]);
  }
  sheet.appendRow([
    new Date(data.date), data.name, data.cat,
    data.score, data.total, data.pct
  ]);
  return ContentService.createTextOutput("ok");
}
