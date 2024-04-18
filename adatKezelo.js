export function tablazatRendez(lista, irany) {
    /*adott mező szerint rendezi a táblázatot. akkor hívódik meg*/
    lista.sort(function(e1,e2){
       /* if (e1.nev > e2.nev){
            return 1
        } else{
            return -1
        }    
        }*/
       
        return e1.nev.toUpperCase()>e2.nev.toUpperCase() ? 1*irany : -1*irany; 
    })
    return lista
}

export function szuresNevSzerint(lista, szurtSzoveg) {
/*  a szürőbe írt szó alapján kilistázza azoakt az adatokat a listából, 
    amelyekben szerepel a név mezőjében az adott szó. Ezután  megjelenítjük a szűrt listát az oldalon.
    Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma. */
    const SZURTLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg) 
    })
    console.log(SZURTLISTA)
    return SZURTLISTA
}

export function sorTorles(lista,index){
    /* minden sor végén legyen egy kuka a sor indexével, erre kattintva töröljük az adott sort a listából, 
    és újra megjelenítjük a táblázatot a módosult listával.*/
    lista.splice(index,1)
    return lista;
}