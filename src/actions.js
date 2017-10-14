export function displayCompanies(dCompanies){
    return{
        type: 'DISPLAY',
        payload: dCompanies,
    }
}

export function trackCompany(nCompany){
    return{
      type: 'TRACK',
      payload: nCompany
    }
}