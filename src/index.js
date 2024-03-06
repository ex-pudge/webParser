// const axios = require('axios')
// const cheerio = require('cheerio')
// // сюда ебашить ссылки
// var urls = [
//     'https://cafa.iphiview.com/cafa/DispatchRedirect.aspx?dispatch=byorganization_id$206738_hash$0eefca3e4d81995eb8f314b45e1d72dfac9d64d0',
//     'https://cafa.iphiview.com/cafa/DispatchRedirect.aspx?dispatch=byorganization_id$184243_hash$c6b6561c0c0ded497518b65a5fee4d0958f75b7a',
//     'https://cafa.iphiview.com/cafa/DispatchRedirect.aspx?dispatch=byorganization_id$11362_hash$8a1a3c9af49674fc6e8eabbdd39f8593374b4d59'
// ]
// // хуёвый массив
// var arr = []

// urls.forEach(url => {
//     axios.get(url).then(data => {
//         // sys
//         const $ = cheerio.load(data.data)
//         // пустой объект
//         let org = {}
//         // сбор данных
//         org.orgName = $('#dnn_ctr1513_ModuleContent > div > h1')
//             .text()
//         org.resPerson = $('')
//             .text()
//         org.mail = $('#dnn_ctr1513_ModuleContent > div > div.AllCommunications > table > tbody > tr:nth-child(2) > td:nth-child(2)')
//             .text()
//         // добавление данных в массив
//         arr.push(org)
//         // то, что получилось итерируется на каждом цикле, нужна асинхронная функция, чтобы записывать данные в промис, позже, новый массив
//         console.log(arr)
//     })
// })