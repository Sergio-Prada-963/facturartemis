const urlConstructora = "http://localhost:3309/api/constructora";


export const getConstructora = async ()=>{
    try {
        const constructora = await fetch(urlConstructora);
        const datoConstructora = await constructora.json();
        return datoConstructora;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}