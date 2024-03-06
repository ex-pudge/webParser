// const axios = require('axios')
// const cheerio = require('cheerio')
// const { url } = require('inspector')

// url = 'https://cafa.iphiview.com/cafa/GiveNow/SearchResults/tabid/617/dispatch/dagenhancedcharitysearch_geo$10001/Default.aspx'
// axios.get(url)
//     .then(data => {
//         // sys
//         const $ = cheerio.load(data.data)
//         // // путь к ссылкам
//         var list = [];
//         $('#dnn_ctr2095_ViewDAGEnhancedCharitySearchResults_module_cst_results_ctl00__0')
//             .each( el => {
//             // const href = $(el)
//             // list.push($(href).text());
//             console.log(el)
//             });
//             // то, что получилось итерируется на каждом цикле, нужна асинхронная функция, чтобы записывать данные в промис, позже, новый массив
//         // console.log(list)
//     })