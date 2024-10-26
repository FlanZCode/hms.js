import * as user from './api/user';
import * as products from './api/products'
import * as vps from './api/vps';
class HMSClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public user = {
    // GET - /user/details
    getDetails: () => user.getUserDetails(this.apiKey),
    getId: () => user.getUserId(this.apiKey),
    getName: () => user.getUserName(this.apiKey), //Name and last name are switch in HMS API (DO NOT FORGET TO SWITCH WHEN HMS FIX IT)
    getLastName: () => user.getUserLastName(this.apiKey), //Name and last name are switch HMS API (DO NOT FORGET TO SWITCH WHEN HMS FIX IT)
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
    getBusinessType: () => user.getUserBusinessType(this.apiKey), //Buisness is written instead of business (DO NOT FORGET TO RENAME WHEN HMS FIX IT)
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
    revokeToken: () => user.revokeUserToken(this.apiKey), //Not working (error from HMS API, not the module)
  };

  public products = {
    // GET - /products
    getList: () => products.getProductsList(this.apiKey),
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
    createProduct: () => products.createProduct(this.apiKey), //Not working (error from HMS API, not the module)
  }

  public vps = {
    //GET - /vps
    getData: () => vps.getAllVpsData(this.apiKey),
    getIdList: () => vps.getVpsIdList(this.apiKey),

    //GET - /vps/{id}
    getDataById: (vpsId: number) => vps.getVpsData(this.apiKey, vpsId),
    getId: (vpsId: number) => vps.getVpsId(this.apiKey, vpsId),
    getOfferId: (vpsId: number) => vps.getVpsOfferId(this.apiKey, vpsId),
    getCreatedAt: (vpsId: number) => vps.getVpsCreatedAt(this.apiKey, vpsId),
    getExpiredAt: (vpsId: number) => vps.getVpsExpiredAt(this.apiKey, vpsId),
    getStatus: (vpsId: number) => vps.getVpsStatus(this.apiKey, vpsId),
    getOs: (vpsId: number) => vps.getVpsOs(this.apiKey, vpsId),
    getMainIpv4: (vpsId: number) => vps.getVpsMainIpv4(this.apiKey, vpsId),
    getMainIpv6: (vpsId: number) => vps.getVpsMainIpv6(this.apiKey, vpsId),
    getVmid: (vpsId: number) => vps.getVpsVmid(this.apiKey, vpsId),
    getOsShort: (vpsId: number) => vps.getVpsOsShort(this.apiKey, vpsId),
    getServerId: (vpsId: number) => vps.getVpsServerId(this.apiKey, vpsId),
    getModel: (vpsId: number) => vps.getVpsModel(this.apiKey, vpsId),
    getName: (vpsId: number) => vps.getVpsName(this.apiKey, vpsId),
    getDisk: (vpsId: number) => vps.getVpsDisk(this.apiKey, vpsId),
    getVCore: (vpsId: number) => vps.getVpsVCore(this.apiKey, vpsId),
    getMemory: (vpsId: number) => vps.getVpsMemory(this.apiKey, vpsId),
    getType: (vpsId: number) => vps.getVpsType(this.apiKey, vpsId),
    getDatacenter: (vpsId: number) => vps.getVpsDatacenter(this.apiKey, vpsId),
    getAvailableOptions: (vpsId: number) => vps.getVpsAvailableOptions(this.apiKey, vpsId),
    getDisplayName: (vpsId: number) => vps.getVpsDisplayName(this.apiKey, vpsId),
    getState: (vpsId: number) => vps.getVpsState(this.apiKey, vpsId),

    //POST - /vps/{id}/start
    startVps: (vpsId: number) => vps.startVps(this.apiKey, vpsId),

    //POST - /vps/{id}/stop
    stopVps: (vpsId: number) => vps.stopVps(this.apiKey, vpsId),

    //POST - /vps/{id}/restart
    restartVps: (vpsId: number) => vps.restartVps(this.apiKey, vpsId), //Not working (error from HMS API, not the module)

    ip: {
      //GET - /vps/{id}/ips
      getList: (vpsId: number) => vps.getVpsIps(this.apiKey, vpsId),

      //GET - /vps/{id}/ips/{ip}
      getData: (vpsId: number, ip: string) => vps.getVpsIpData(this.apiKey, vpsId, ip), //Not working with IPv6 address (error from HMS API, not the module)
      getId: (vpsId: number, ip: string) => vps.getVpsIpId(this.apiKey, vpsId, ip), //Not working with IPv6 address (error from HMS API, not the module)
      getGateway: (vpsId: number, ip: string) => vps.getVpsIpGateway(this.apiKey, vpsId, ip), //Not working with IPv6 address (error from HMS API, not the module)
      getType: (vpsId: number, ip: string) => vps.getVpsIpType(this.apiKey, vpsId, ip), //Not working with IPv6 address (error from HMS API, not the module)
      isLocked: (vpsId: number, ip: string) => vps.isVpsIpLocked(this.apiKey, vpsId, ip), //Not working with IPv6 address (error from HMS API, not the module)
    },
    firewall: {
      //GET - /vps/{id}/firewall/options
      getOptions: (vpsId: number) => vps.getVpsFireWallOptions(this.apiKey, vpsId), //Not working (error from HMS API, not the module), waiting for fix before continue

      //POST - /vps/{id}/firewall/options
      globalConfiguration: (vpsId: number) => vps.globalVpsFirewallConfiguration(this.apiKey, vpsId), //Not working, returning HTML code (error from HMS API, not the module)

      //GET - /vps/{id}/firewall/rules
      getRules: (vpsId: number) => vps.getVpsFirewallRules(this.apiKey, vpsId), //Not working (error from HMS API, not the module), waiting for fix before continue

      //POST - /vps/{id}/firewall/rules
      createRule: (vpsId: number) => vps.createVpsFirewallRule(this.apiKey, vpsId), //Not working, returning HTML code (error from HMS API, not the module), waiting for fix before continue

      //PUT - /vps/{id}/firewall/rules/{rule}
      editRule: (vpsId: number, rule: number) => vps.editVpsFirewallRule(this.apiKey, vpsId, rule), //Not working, returning HTML code (error from HMS API, not the module), waiting for fix before continue

      //DELETE - /vps/{id}/firewall/rules/{rule}
      deleteRule: (vpsId: number, rule: number) => vps.deleteVpsFirewallRule(this.apiKey, vpsId, rule), //Not working (error from HMS API, not the module), waiting for fix before continue

      //GET - /vps/{id}/firewall/ipset
      getIpset: (vpsId: number) => vps.getVpsFirewallIpset(this.apiKey, vpsId), //Not working (error from HMS API, not the module), waiting for fix before continue

      //POST - /vps/{id}/firewall/ipset
      createIpset: (vpsId: number) => vps.createVpsFirewallIpset(this.apiKey, vpsId), //Not working, returning HTML code (error from HMS API, not the module), waiting for fix before continue

      //GET - /vps/{id}/firewall/ipset/{nameipsetlist}
      getIpsetCidr: (vpsId: number, nameipsetlist: string) => vps.getVpsFirewallIpsetCidr(this.apiKey, vpsId, nameipsetlist), //Not working (error from HMS API, not the module), waiting for fix before continue

      //POST - /vps/{id}/firewall/ipset/{nameipsetlist}
      addIpsetCidr: (vpsId: number, nameipsetlist: string) => vps.addVpsFirewallIpsetCidr(this.apiKey, vpsId, nameipsetlist), //Not working (error from HMS API, not the module), waiting for fix before continue

      //DELETE - /vps/{id}/firewall/ipset/{nameipsetlist}
      deleteIpset: (vpsId: number, nameipsetlist: string) => vps.deleteVpsFirewallIpset(this.apiKey, vpsId, nameipsetlist), //Not working (error from HMS API, not the module), waiting for fix before continue

      //DELETE - /vps/{id}/firewall/ipset/{nameipsetlist}
      deleteIpsetCidr: (vpsId: number, nameipsetlist: string, cidr: string) => vps.deleteVpsFirewallIpsetCidr(this.apiKey, vpsId, nameipsetlist, cidr), //Not working (error from HMS API, not the module), waiting for fix before continue
    },

    //GET - /vps/{id}/availableUpgrade
    getAvailableUpgradeData: (vpsId: number) => vps.getVpsAvailableUpgradeData(this.apiKey, vpsId),
    getAvailableUpgrade: (vpsId: number) => vps.getVpsAvailableUpgrade(this.apiKey, vpsId),

    //GET - /vps/{id}/distributions
    getDistributionsData: (vpsId: number) => vps.getVpsDistributionsData(this.apiKey, vpsId),
    getDistributions: (vpsId: number) => vps.getVpsDistributions(this.apiKey, vpsId),

    //POST - /vps/{id}/rebuild
    rebuild: (vpsId: number) => vps.rebuildVps(this.apiKey, vpsId),

    statistics: {
      //GET - /vps/{id}/statistics/{time}
      getStatisticsData: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month') => vps.getVpsStatisticsData(this.apiKey, vpsId, time),
      getStatisticsList: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month') => vps.getVpsStatisticsList(this.apiKey, vpsId, time),
      getStatisticData: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticData(this.apiKey, vpsId, time, timestamp),
      getStatisticTime: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticTime(this.apiKey, vpsId, time, timestamp),
      getStatisticCpu: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticCpu(this.apiKey, vpsId, time, timestamp),
      getStatisticMemory: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticMemory(this.apiKey, vpsId, time, timestamp),
      getStatisticMaxMemory: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticMaxMemory(this.apiKey, vpsId, time, timestamp),
      getStatisticDiskWrite: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticDiskWrite(this.apiKey, vpsId, time, timestamp),
      getStatisticDiskRead: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticDiskRead(this.apiKey, vpsId, time, timestamp),
      getStatisticNetIn: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticNetIn(this.apiKey, vpsId, time, timestamp),
      getStatisticNetOut: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => vps.getVpsStatisticNetOut(this.apiKey, vpsId, time, timestamp),
    },

    getAntiDdosData: (vpsId: number, time: 'hour' | 'day' | 'week' | 'month') => vps.getVpsAntiDdos(this.apiKey, vpsId, time),

  };
}

export default HMSClient;