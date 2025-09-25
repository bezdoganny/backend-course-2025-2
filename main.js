const date  = "20231001"
const time_period = "q"
let url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank")
url.searchParams.set("date",date)
url.searchParams.set("period",time_period)
url.searchParams.set("json","")
console.log(url)