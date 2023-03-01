export const getUnits = async() => {
    const URL = "https://insumosdym.com/apis/api_atb/public/api/units";
    const resp = await fetch(URL);
    const data  = await resp.json();
    
    const units = data.map( dt => (
      {
        id : dt.id,
        auto_cve: dt.number,
      }
    ));

    return units;
  }