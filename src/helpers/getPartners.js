export const getPartners = async() => {
    const URL = "https://atb.cloud2.work/api/public/api/partners"; //"http://127.0.0.1:8000/api/partners/"; //https://insumosdym.com/apis/api_atb/public/api/partners";
    const resp = await fetch(URL);
    const data  = await resp.json();
    
    const partners = data.map( dt => (
      {
        id : dt.id,
        number_partner: dt.number_partner,
        name : dt.name,
        units : dt.units,
      }
    ));

    return partners;
  }