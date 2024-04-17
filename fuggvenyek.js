export function tablazatosszeallit(lista){
    /*összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka*/
    let txt = ""
    txt+="<table class = 'table table-striped'>"
    txt+="<tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>"
    lista.forEach((element,i) => {
        txt +=  `<tr>`;
        for (const key in element) {
            /*console.log("key: ", key, "akt.elem: ", element[key]);*/
            txt += `<td>${element[key]}</td>`;   
            }
        
        txt += `<td id="${i}" class="kuka">🗑️</td>       
                </tr>`
    });
    txt+="</table>"
    return txt
}

export function megjelenites(txt) {
    /*megjeleníti a html szöveget egy html elemben*/
    const adatokELEM = $(".adatok");
    adatokELEM.html(txt)
}