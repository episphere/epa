const hello = `EPA module loaded at ${Date()}`
const help = function(){window.open('https://aqs.epa.gov/aqsweb/documents/data_api.html')}

async function daily(){
    let url = 'https://aqs.epa.gov/data/api/dailyData/bySite?email=test@aqs.api&key=test&param=44201&bdate=20170618&edate=20170618&state=37&county=183&site=0014'
    return await (await fetch(url)).json()
    // https://aqs.epa.gov/data/api/dailyData/bySite?email=test@aqs.api&key=test&param=44201&bdate=20170618&edate=20170618&state=37&county=183&site=0014
}

export{
    hello,
    help,
    daily
}