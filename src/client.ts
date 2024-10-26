import * as user from './api/user';
import * as products from './api/products'
class HMSClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public user = {
    // GET - /user/details
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
    getBusinessType: () => user.getUserBusinessType(this.apiKey),
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

    // GET - /user/revoke
    revokeToken: () => user.revokeUserToken(this.apiKey)
  };

  public products = {
    // GET - /products
    getProductsList: () => products.getProductsList(this.apiKey),
    getProductById: (productId: number) => products.getProductById(this.apiKey, productId),
    getId: (productId: number) => products.getProductId(this.apiKey, productId),
    getOfferId: (productId: number) => products.getProductOfferId(this.apiKey, productId),
    getCreatedAt: (productId: number) => products.getProductCreatedAt(this.apiKey, productId),
    getExpiredAt: (productId: number) => products.getProductExpiredAt(this.apiKey, productId),
    getStatus: (productId: number) => products.getProductStatus(this.apiKey, productId),
    getOs: (productId: number) => products.getProductOs(this.apiKey, productId),
    getIpv4: (productId: number) => products.getProductIpv4(this.apiKey, productId),
    getIpv6: (productId: number) => products.getProductIpv6(this.apiKey, productId),
    getVmid: (productId: number) => products.getProductVmid(this.apiKey, productId),
    getOsShort: (productId: number) => products.getProductOsShort(this.apiKey, productId),
    getServerId: (productId: number) => products.getProductServerId(this.apiKey, productId),

    //POST - /products
    createProduct: () => products.createProduct(this.apiKey),
  }
}

export default HMSClient;