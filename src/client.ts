import * as user from './api/user';

class hmsClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public user = {
    // /user/details
    getDetails: () => user.getUserDetails(this.apiKey),
    getId: () => user.getUserId(this.apiKey),
    getName: () => user.getUserName(this.apiKey),
    getLastName: () => user.getUserLastName(this.apiKey),
    getRole: () => user.getUserRole(this.apiKey),
    getEmail: () => user.getUserEmail(this.apiKey),
    getEmailVerifiedAt: () => user.getUserEmailVerifiedAt(this.apiKey),
    get2FAConfirmedAt: () => user.getUser2FAConfirmedAt(this.apiKey),
    getPhoneNumber: () => user.getUserPhoneNumber(this.apiKey),
    getAddress: () => user.getUserAddress(this.apiKey),
    getRegion: () => user.getUserRegion(this.apiKey),
    getCity: () => user.getUserCity(this.apiKey),
    getPostalCode: () => user.getUserPostalCode(this.apiKey),
    getCountry: () => user.getUserCountry(this.apiKey),
    getBusiness: () => user.getUserBusiness(this.apiKey),
    getTypeBusiness: () => user.getUserTypeBusiness(this.apiKey),
    getBusinessSiret: () => user.getUserBusinessSiret(this.apiKey),
    getBusinessTva: () => user.getUserBusinessTva(this.apiKey),
    getLanguage: () => user.getUserLanguage(this.apiKey),
    isStudent: () => user.isUserStudent(this.apiKey),
    getTokens: () => user.getUserTokens(this.apiKey),
    getCustStripe: () => user.getUserCustStripe(this.apiKey),
    getCustGocardless: () => user.getUserCustGocardless(this.apiKey),
    getGithubToken: () => user.getUserGithubToken(this.apiKey),
    getGoogleToken: () => user.getUserGoogleToken(this.apiKey),
    isBounced: () => user.isUserBounced(this.apiKey),
    getSmtp: () => user.getUserSmtp(this.apiKey),
    isNotifNewsLetter: () => user.isUserNotifNewsLetter(this.apiKey),
    isNotifNew: () => user.isUserNotifNew(this.apiKey),
    isNotifWork: () => user.isUserNotifWork(this.apiKey),
    isNotifConnexion: () => user.isUserNotifConnexion(this.apiKey),
    getCreatedAt: () => user.getUserCreatedAt(this.apiKey),
    getUpdatedAt: () => user.getUserUpdatedAt(this.apiKey),
    getDeletedAt: () => user.getUserDeletedAt(this.apiKey),

    // /user/revoke
    revokeToken: () => user.revokeUserToken(this.apiKey)
  };
}

export default hmsClient;