import { init } from "./main.js";
export function adatokListaba(lista) {
    /* összegyűjti az űrlapról az adatokat */
    let adat = {
        nev: "",
        kor:0,
        nem:true
    };
    /* megfogjuk az űrlapmezőket */
    const submitELEM = $("#submit")
    
    /* beleteszi a listába, ha rákattintunk a hozzáad gombra */
    submitELEM.on("click", function(event){
        event.preventDefault()

        const nevELEM = $("#nev");
        const korELEM = $("#kor");
        const nemELEM = $("input[name='nem']:checked");
        /* submit gombról levesszük az alapértelmezett eseménykezelőt */
        
        adat = {
            nev:nevELEM.val(),
            kor:korELEM.val(),
            nem:nemELEM.val()===false ? false : true
        }
        const validELEMEK = $("valid-feedback")
        console.log(validELEMEK.eq(0).css("display"))

        if(validELEMEK.eq(0).css("display")==="block" && validELEMEK.eq(0).css("block"))

        lista.push(adat)
        init(lista)
})
}