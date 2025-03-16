var figiMap = {};
figiMap['TCS70A106DL2'] = { ba: 'TMON@',  t: 'TMON@', ps: 0.01, psa: 0.01 };
figiMap['FUTGL1225000'] = { ba: 'GLDRUB_TOM', t: 'GLZ5', ps: 0.1, psa: 0.1 };
figiMap['FUTGLDRUBF00'] = { ba: 'GLDRUB_TOM', t: 'GLDRUBF', ps: 0.1, psa: 0.1 };
figiMap['FUTGL0925000'] = { ba: 'GLDRUB_TOM', t: 'GLU5', ps: 0.1, psa: 0.1 };
figiMap['FUTGL0325000'] = { ba: 'GLDRUB_TOM', t: 'GLH5', ps: 0.1, psa: 0.1 };
figiMap['FUTGL0625000'] = { ba: 'GLDRUB_TOM', t: 'GLM5', ps: 0.1, psa: 0.1 };
figiMap['FUTCNY062500'] = { ba: 'CNY/RUB', t: 'CRM5', ps: 0.001, psa: 1 };
figiMap['FUTCNY032500'] = { ba: 'CNY/RUB', t: 'CRH5', ps: 0.001, psa: 1 };
figiMap['FUTCNY122500'] = { ba: 'CNY/RUB', t: 'CRZ5', ps: 0.001, psa: 1 };
figiMap['FUTCNY092500'] = { ba: 'CNY/RUB', t: 'CRU5', ps: 0.001, psa: 1 };
figiMap['FUTCNY032600'] = { ba: 'CNY/RUB', t: 'CRH6', ps: 0.001, psa: 1 };
figiMap['FUTCNY062600'] = { ba: 'CNY/RUB', t: 'CRM6', ps: 0.001, psa: 1 };
figiMap['FUTCNYRUBF00'] = { ba: 'CNY/RUB', t: 'CNYRUBF', ps: 0.001, psa: 1 };
figiMap['FUTIMOEXF000'] = { ba: 'IMOEX', t: 'IMOEXF', ps: 0.5, psa: 5 };
figiMap['FUTMXI032600'] = { ba: 'IMOEX', t: 'MMH6', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI062700'] = { ba: 'IMOEX', t: 'MMM7', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI092500'] = { ba: 'IMOEX', t: 'MMU5', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI122700'] = { ba: 'IMOEX', t: 'MMZ7', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI062500'] = { ba: 'IMOEX', t: 'MMM5', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI122600'] = { ba: 'IMOEX', t: 'MMZ6', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI032700'] = { ba: 'IMOEX', t: 'MMH7', ps: 0.05, psa: 0.5 };
figiMap['FUTMIX062500'] = { ba: 'IMOEX', t: 'MXM5', ps: 25, psa: 25 };
figiMap['FUTMXI062600'] = { ba: 'IMOEX', t: 'MMM6', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI032500'] = { ba: 'IMOEX', t: 'MMH5', ps: 0.05, psa: 0.5 };
figiMap['FUTMIX122500'] = { ba: 'IMOEX', t: 'MXZ5', ps: 25, psa: 25 };
figiMap['FUTMIX032500'] = { ba: 'IMOEX', t: 'MXH5', ps: 25, psa: 25 };
figiMap['FUTMXI092600'] = { ba: 'IMOEX', t: 'MMU6', ps: 0.05, psa: 0.5 };
figiMap['FUTMXI122500'] = { ba: 'IMOEX', t: 'MMZ5', ps: 0.05, psa: 0.5 };
figiMap['FUTMIX092500'] = { ba: 'IMOEX', t: 'MXU5', ps: 25, psa: 25 };

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

function getPoseProfit(pose)
{
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

