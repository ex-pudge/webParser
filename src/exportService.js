// const xlsx = require('xlsx');
// const path = require('path');

// const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {
//     const workBook = xlsx.utils.book_new();
//     const workSheetData = [
//         workSheetColumnNames,
//         ... data
//     ];
//     const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
//     xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
//     xlsx.writeFile(workBook, path.resolve(filePath));
// }

// const exportOrganizationsToExcel = (organizations, workSheetColumnNames, workSheetName, filePath) => {
//     const data = organizations.map(org => {
//         return [org.orgName, org.resPerson, org.mail];
//     });
//     exportExcel(data, workSheetColumnNames, workSheetName, filePath);
// }

// module.exports = exportOrganizationsToExcel;