export const getUnits = async() => {
    const URL = "https://atb.cloud2.work/api/public/api/units";//"http://127.0.0.1:8000/api/units";  //"https://insumosdym.com/apis/api_atb/public/api/units";
    const resp = await fetch(URL);
    const data  = await resp.json();
    
    const units = data.map( dt => (
      {
        id : dt.id,
        auto_cve: dt.number,
        group: dt.groups
      }
    ));

    return units;
  }