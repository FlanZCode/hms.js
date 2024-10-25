// /user/details
export const getUserDetails = async (apiKey: string) => {
  const response = await fetch('https://www.hostmyservers.fr/api/user/details/', {
    headers: { 'Authorization': `${apiKey}` }
  });
  const data = await response.json();
  return data;
};

export const getUserId = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.id;
};

export const getUserName = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.lastname;
};

export const getUserLastName = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.name;
};

export const getUserRole = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.role;
};

export const getUserEmail = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.email;
};

export const getUserEmailVerifiedAt = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.email_verified_at;
};

export const getUser2FAConfirmedAt = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.two_factor_confirmed_at;
};

export const getUserPhoneNumber = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.tel;
};

export const getUserAddress = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.address;
};

export const getUserRegion = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.region;
};

export const getUserCity = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.city;
};

export const getUserPostalCode = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.postalcode;
};

export const getUserCountry = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.country;
};

export const getUserBusiness = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.business;
};

export const getUserTypeBusiness = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.type_buisness;
};

export const getUserBusinessSiret = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.business_siret;
};

export const getUserBusinessTva = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.business_tva;
};

export const getUserLanguage = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.language;
};

export const isUserStudent = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.student;
};

export const getUserTokens = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.tokens;
};

export const getUserCustStripe = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.cust_stripe;
};

export const getUserCustGocardless = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.cust_gocardless;
};

export const getUserGithubToken = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.github_token;
};

export const getUserGoogleToken = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.google_token;
};

export const isUserBounced = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.bounced;
};

export const getUserSmtp = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.smtp;
};

export const isUserNotifNewsLetter = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.notifnewsletter;
};

export const isUserNotifNew = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.notifnew;
};

export const isUserNotifWork = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.notifwork;
};

export const isUserNotifConnexion = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.notifconnexion;
};

export const getUserCreatedAt = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.created_at;
};

export const getUserUpdatedAt = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.updated_at;
};

export const getUserDeletedAt = async (apiKey: string) => {
  const data = await getUserDetails(apiKey);
  return data.data.deleted_at;
};


// /user/revoke
export const revokeUserToken = (apiKey: string) => fetch('https://www.hostmyservers.fr/api/user/revoke/', {
    headers: { 'Authorization': `${apiKey}` }
});