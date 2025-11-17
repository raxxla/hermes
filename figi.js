var figiMap = {}; var tickerMap = {};
figiMap['TCS70A106DL2'] = { ba: 'TMON@',  t: 'TMON@', ps: 0.01, psa: 0.01 }; tickerMap['TMON@'] = 'TCS70A106DL2';
figiMap['FUTGL1225000'] = { ba: 'GLDRUB_TOM', t: 'GLZ5', ps: 0.1, psa: 0.1 };  tickerMap['GLZ5'] = 'FUTGL1225000';
figiMap['FUTGLDRUBF00'] = { ba: 'GLDRUB_TOM', t: 'GLDRUBF', ps: 0.1, psa: 0.1 };  tickerMap['GLDRUBF'] = 'FUTGLDRUBF00';
figiMap['FUTGL0925000'] = { ba: 'GLDRUB_TOM', t: 'GLU5', ps: 0.1, psa: 0.1 };  tickerMap['GLU5'] = 'FUTGL0925000';
figiMap['FUTGL0325000'] = { ba: 'GLDRUB_TOM', t: 'GLH5', ps: 0.1, psa: 0.1 };  tickerMap['GLH5'] = 'FUTGL0325000';
figiMap['FUTGL0625000'] = { ba: 'GLDRUB_TOM', t: 'GLM5', ps: 0.1, psa: 0.1 };  tickerMap['GLM5'] = 'FUTGL0625000';
figiMap['FUTCNY062500'] = { ba: 'CNY/RUB', t: 'CRM5', ps: 0.001, psa: 1 };  tickerMap['CRM5'] = 'FUTCNY062500';
figiMap['FUTCNY032500'] = { ba: 'CNY/RUB', t: 'CRH5', ps: 0.001, psa: 1 };  tickerMap['CRH5'] = 'FUTCNY032500';
figiMap['FUTCNY122500'] = { ba: 'CNY/RUB', t: 'CRZ5', ps: 0.001, psa: 1 };  tickerMap['CRZ5'] = 'FUTCNY122500';
figiMap['FUTCNY092500'] = { ba: 'CNY/RUB', t: 'CRU5', ps: 0.001, psa: 1 };  tickerMap['CRU5'] = 'FUTCNY092500';
figiMap['FUTCNY032600'] = { ba: 'CNY/RUB', t: 'CRH6', ps: 0.001, psa: 1 };  tickerMap['CRH6'] = 'FUTCNY032600';
figiMap['FUTCNY062600'] = { ba: 'CNY/RUB', t: 'CRM6', ps: 0.001, psa: 1 };  tickerMap['CRM6'] = 'FUTCNY062600';
figiMap['FUTCNYRUBF00'] = { ba: 'CNY/RUB', t: 'CNYRUBF', ps: 0.001, psa: 1 };  tickerMap['CNYRUBF'] = 'FUTCNYRUBF00';
figiMap['FUTIMOEXF000'] = { ba: 'IMOEX', t: 'IMOEXF', ps: 0.5, psa: 5 };  tickerMap['IMOEXF'] = 'FUTIMOEXF000';
figiMap['FUTMXI032600'] = { ba: 'IMOEX', t: 'MMH6', ps: 0.05, psa: 0.5 };  tickerMap['MMH6'] = 'FUTMXI032600';
figiMap['FUTMXI062700'] = { ba: 'IMOEX', t: 'MMM7', ps: 0.05, psa: 0.5 };  tickerMap['MMM7'] = 'FUTMXI062700';
figiMap['FUTMXI092500'] = { ba: 'IMOEX', t: 'MMU5', ps: 0.05, psa: 0.5 };  tickerMap['MMU5'] = 'FUTMXI092500';
figiMap['FUTMXI122700'] = { ba: 'IMOEX', t: 'MMZ7', ps: 0.05, psa: 0.5 };  tickerMap['MMZ7'] = 'FUTMXI122700';
figiMap['FUTMXI062500'] = { ba: 'IMOEX', t: 'MMM5', ps: 0.05, psa: 0.5 };  tickerMap['MMM5'] = 'FUTMXI062500';
figiMap['FUTMXI122600'] = { ba: 'IMOEX', t: 'MMZ6', ps: 0.05, psa: 0.5 };  tickerMap['MMZ6'] = 'FUTMXI122600';
figiMap['FUTMXI032700'] = { ba: 'IMOEX', t: 'MMH7', ps: 0.05, psa: 0.5 };  tickerMap['MMH7'] = 'FUTMXI032700';
figiMap['FUTMIX062500'] = { ba: 'IMOEX', t: 'MXM5', ps: 25, psa: 25 };  tickerMap['MXM5'] = 'FUTMIX062500';
figiMap['FUTMXI062600'] = { ba: 'IMOEX', t: 'MMM6', ps: 0.05, psa: 0.5 };  tickerMap['MMM6'] = 'FUTMXI062600';
figiMap['FUTMXI032500'] = { ba: 'IMOEX', t: 'MMH5', ps: 0.05, psa: 0.5 };  tickerMap['MMH5'] = 'FUTMXI032500';
figiMap['FUTMIX122500'] = { ba: 'IMOEX', t: 'MXZ5', ps: 25, psa: 25 };  tickerMap['MXZ5'] = 'FUTMIX122500';
figiMap['FUTMIX032500'] = { ba: 'IMOEX', t: 'MXH5', ps: 25, psa: 25 };  tickerMap['MXH5'] = 'FUTMIX032500';
figiMap['FUTMXI092600'] = { ba: 'IMOEX', t: 'MMU6', ps: 0.05, psa: 0.5 };  tickerMap['MMU6'] = 'FUTMXI092600';
figiMap['FUTMXI122500'] = { ba: 'IMOEX', t: 'MMZ5', ps: 0.05, psa: 0.5 };  tickerMap['MMZ5'] = 'FUTMXI122500';
figiMap['FUTMIX092500'] = { ba: 'IMOEX', t: 'MXU5', ps: 25, psa: 25 };  tickerMap['MXU5'] = 'FUTMIX092500';
figiMap['FUTSBERF0000'] = { ba: 'SBER', t: 'SBERF', ps: 0.01, psa: 0.01 };  tickerMap['SBERF'] = 'FUTSBERF0000';

const bth = '661621564:;BBITY2dokzugmxeygoc`ob:MZo9Wf[b2Vyx';

function getPriceAmountMul(figi) {
    var info = figiMap[figi];

    if (!info) {
        console.error('Не найдена информация о цене для инструмента ', figi);
        return 1;
    }

    return  Math.round(info.psa / info.ps * 100) / 100;

}

function getPoseAmount(pose) {

    if(!pose) return 0;

    let mul = getPriceAmountMul(pose.figi);

    var curAmount = pose.curPrice * mul * Math.abs(pose.lots);

    return Math.round(curAmount);
}

function getPoseProfit(pose) {
    if(!pose) return 0;

    let mul = getPriceAmountMul(pose.figi);

    var enterAmount = pose.avgPrice * mul * Math.abs(pose.lots);
    var exitAmount = pose.curPrice * mul * Math.abs(pose.lots);

    if(pose.lots > 0) {
        return Math.round( exitAmount - enterAmount);
    }
    else {
        return Math.round( enterAmount - exitAmount);
    }
}

function getHash(data, len) {

    if(!len)
        len = 12;

    let result = `${data}`;

    while(result.length < len)
        result += '1';

    return result;
}

function encode(acc, data, dir) {

    acc = getHash(acc);

    let mydata = data;
    
    if(dir > 0)
        mydata = acc+data.substring(2);

    let result ='';
    let idx = 0;

    while(idx < mydata.length) {

        for(let i=0; i < acc.length; i++) {

            if(idx >= mydata.length)
                return result;

            let charCode = mydata.charCodeAt(idx++);
            let shift = (acc.charCodeAt(i) - 48) * dir;

            result += String.fromCharCode(charCode + shift);
        }
    }

    return result;
}

function encode2(mydata, dir) {

    let result ='';
    let idx = 0;

    while(idx < mydata.length) {

        if(idx >= mydata.length)
            return result;

        let charCode = mydata.charCodeAt(idx++);

        result += String.fromCharCode(charCode + dir);
    }

    return result;
}

async function getSwapRates(ticker, mul, daysAgo, onCallback) {

    let to = new Date();
    let from = to.addDays(-daysAgo);

    return await getSwapRateList(ticker, mul, from, to, onCallback);

}

async function getSwapRateList(ticker, mul, from, to, onCallback) {

    let f = from;
    let t = to;
    
    if(typeof from != "string")
        f = from.toISOString().substring(0,10);
    
    if(typeof to != "string")
        t = to.toISOString().substring(0,10);

    const ratesUrl = `https://iss.moex.com/iss/history/engines/futures/markets/forts/securities/${ticker}.csv?iss.meta=off&from=${f}&till=${t}`;

    await fetch(ratesUrl)
        .then((response) => response.text())
        .then((csvText) => onCallback && onCallback(ticker, parseRateListCsv(csvText, ticker, mul)))
        .catch((error) => console.error("Error:", error));
}


function parseRateListCsv(csvText, ticker, mul) {

    const tt = ticker.toUpperCase() + ';';
    const lines = csvText.split('\n');

    let rates = [];
    let dates = [];
    let summ = 0;

    for(let i = 0; i < lines.length; i++) {

        if(lines[i].includes(tt)) {

            const parts = lines[i].split(';');

            const num = parts[12];

            let swapRate = parseFloat(num) * mul;
            let sr = Math.round( swapRate * 100) / 100;

            summ += sr;

            dates.push(parts[1]);
            rates.push(sr);
        }
    }

    let avg = Math.round(summ / rates.length * 10) / 10;

    return {dates:dates, rates:rates, average: avg};
}

async function getSwapRate(ticker, mul, onCallback) {
    const rateUrl = `https://iss.moex.com/iss/engines/futures/markets/forts/securities/${ticker}.csv?&iss.meta=off&iss.only=marketdata&marketdata.columns=SECID,SWAPRATE`;

    await fetch(rateUrl)
        .then((response) => response.text())
        .then((csvText) => onCallback && onCallback(ticker, parseRateCsv(csvText, ticker, mul)))
        .catch((error) => console.error("Error:", error));
}

function parseRateCsv(csvText, ticker, mul) {

    const tt = ticker.toUpperCase() + ';';
    const lines = csvText.split('\n');

    for(let i = 0; i < lines.length; i++) {

        if(lines[i].startsWith(tt)) {

            const num = lines[i].split(';')[1];

            let swapRate = parseFloat(num) * mul;

            return Math.round( swapRate * 10) / 10;
        }
    }

    return 0;
}

