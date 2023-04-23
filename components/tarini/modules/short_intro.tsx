import { useState } from "react";

function ShortIntro(props:any){
    let [extras_module,setExtra_Module]=useState<any>({})
    return(
        <>
        <div className="container text-center">
            <h2 className="text-muted title title-lg text-uppercase">{extras_module.short_intro.title?extras_module.short_intro.title:''}</h2>
            <p style={{fontSize: "18px"}}>{extras_module.short_intro.intro?extras_module.short_intro.intro:''}</p>
        </div>
        <div className="mb-5"></div>
        </>
    )
}
export default ShortIntro;