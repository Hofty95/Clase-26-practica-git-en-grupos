const fs = require('fs');
const path = require('path');

const moduloObjetivos = {
    leerJSON : function(){
        const objetivosJSON = fs.readFileSync(path.join(__dirname,'..','data','objetivos.json'),'utf-8');
        const objetivosParseado = JSON.parse(objetivosJSON);

        return objetivosParseado;
    }
}

module.exports = moduloObjetivos;