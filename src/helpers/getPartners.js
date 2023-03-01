export const getPartners = async() => {
    const URL = "https://insumosdym.com/apis/api_atb/public/api/partners";
    const resp = await fetch(URL);
    const data  = await resp.json();
    
    const partners = data.map( dt => (
      {
        number_partner: dt.number_partner,
        name : dt.name,
        units : dt.units,
      }
    ));

    return partners;
  }