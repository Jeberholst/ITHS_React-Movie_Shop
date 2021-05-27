import mockDataGeneral from './mock-data-general.json';

var userBillingInfo = createBillingInfo();

const fetchBillingInfo = async () => {

  const response = mockDataGeneral.billingInfo
  const billingInfo = createBillingInfo(
    response.firstName, 
    response.lastName,
    response.address, 
    response.postalCode, 
    response.county, 
    response.country
  );
  
  userBillingInfo = billingInfo
    
}

function createBillingInfo(firstName, lastName, address, postalCode, county, country){
  return {
     firstName,
     lastName,
     address, 
     postalCode, 
     county, 
     country
  };
}

export const fetchers = { fetchBillingInfo }

export {
  userBillingInfo
}