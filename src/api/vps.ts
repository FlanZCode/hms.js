//GET - /vps
export const getAllVpsData = async (apiKey: string) => {
    const response = await fetch('https://www.hostmyservers.fr/api/vps/', {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

export const getVpsIdList = async (apiKey: string) => {
    const vpsData = await getAllVpsData(apiKey);
    const data: { id: number }[] = vpsData.data;
    return data.map((item: { id: number }) => item.id);
};

//GET - /vps/{id}
export const getVpsData = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

export const getVpsId = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.id;
    return data;
};

export const getVpsOfferId = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.offer_id;
    return data;
};

export const getVpsCreatedAt = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.created_at;
    return data;
};

export const getVpsExpiredAt = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.expired_at;
    return data;
};

export const getVpsStatus = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.statut;
    return data;
};

export const getVpsOs = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.data.os;
    return data;
};

export const getVpsMainIpv4 = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.data.ipv4;
    return data;
};

export const getVpsMainIpv6 = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.data.ipv6;
    return data;
};

export const getVpsVmid = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.data.vmid;
    return data;
};

export const getVpsOsShort = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.data.os_short;
    return data;
};

export const getVpsServerId = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.data.server_id;
    return data;
};

export const getVpsModel = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model;
    return data;
};

export const getVpsName = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model.name;
    return data;
};

export const getVpsDisk = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model.disk;
    return data;
};

export const getVpsVCore = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model.vcore;
    return data;
};

export const getVpsMemory = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model.memory;
    return data;
};

export const getVpsType = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model.type;
    return data;
};

export const getVpsDatacenter = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model.datacenter;
    return data;
};

export const getVpsAvailableOptions = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.model.availableOptions;
    return data;
};

export const getVpsDisplayName = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.displayName;
    return data;
};

export const getVpsState = async (apiKey: string, vpsId: number) => {
    const vps = await getVpsData(apiKey, vpsId);
    const data = vps.data.state;
    return data;
};

//POST - /vps/{id}/start
export const startVps = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/start`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//POST - /vps/{id}/stop
export const stopVps = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/stop`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//POST - /vps/{id}/restart
export const restartVps = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/restart`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//GET - /vps/{id}/ips
export const getVpsIps = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/ips`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data: { data: { ip: string }[] } = await response.json();
    return data.data.map(item => item.ip);
};

//GET - /vps/{id}/ips/{ip}
export const getVpsIpData = async (apiKey: string, vpsId: number, ip: string) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/ips/${ip}`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

export const getVpsIpId = async (apiKey: string, vpsId: number, ip: string) => {
    const ipData = await getVpsIpData(apiKey, vpsId, ip);
    const data = ipData.data.id;
    return data;
};

export const getVpsIpGateway = async (apiKey: string, vpsId: number, ip: string) => {
    const ipData = await getVpsIpData(apiKey, vpsId, ip);
    const data = ipData.data.gateway;
    return data;
};

export const getVpsIpType = async (apiKey: string, vpsId: number, ip: string) => {
    const ipData = await getVpsIpData(apiKey, vpsId, ip);
    const data = ipData.data.type;
    return data;
};

export const isVpsIpLocked = async (apiKey: string, vpsId: number, ip: string) => {
    const ipData = await getVpsIpData(apiKey, vpsId, ip);
    const data = ipData.data.locked;
    return data;
};

//GET - /vps/{id}/firewall/options
export const getVpsFireWallOptions = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/options`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//POST - /vps/{id}/firewall/options
export const globalVpsFirewallConfiguration = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/options`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//GET - /vps/{id}/firewall/rules
export const getVpsFirewallRules = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/rules`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//POST - /vps/{id}/firewall/rules
export const createVpsFirewallRule = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/rules`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//PUT - /vps/{id}/firewall/rules/{rule}
export const editVpsFirewallRule = async (apiKey: string, vpsId: number, rule: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/rules/${rule}`, {
      method: 'PUT',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//DELETE - /vps/{id}/firewall/rules/{rule}
export const deleteVpsFirewallRule = async (apiKey: string, vpsId: number, rule: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/rules/${rule}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//GET - /vps/{id}/firewall/ipset
export const getVpsFirewallIpset = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/ipset`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//POST - /vps/{id}/firewall/ipset
export const createVpsFirewallIpset = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/ipset`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//GET - /vps/{id}/firewall/ipset/{nameipsetlist}
export const getVpsFirewallIpsetCidr = async (apiKey: string, vpsId: number, nameipsetlist: string) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/ipset/${nameipsetlist}`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//POST - /vps/{id}/firewall/ipset/{nameipsetlist}
export const addVpsFirewallIpsetCidr = async (apiKey: string, vpsId: number, nameipsetlist: string) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/ipset/${nameipsetlist}`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//DELETE - /vps/{id}/firewall/ipset/{nameipsetlist}
export const deleteVpsFirewallIpset = async (apiKey: string, vpsId: number, nameipsetlist: string) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/ipset/${nameipsetlist}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//DELETE - /vps/{id}/firewall/ipset/{nameipsetlist}/{cidr}
export const deleteVpsFirewallIpsetCidr = async (apiKey: string, vpsId: number, nameipsetlist: string, cidr: string) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/firewall/ipset/${nameipsetlist}/${cidr}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//GET - /vps/{id}/availableUpgrade
export const getVpsAvailableUpgradeData = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/availableUpgrade`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

export const getVpsAvailableUpgrade = async (apiKey: string, vpsId: number) => {
    const availableUpgradeData = await getVpsAvailableUpgradeData(apiKey, vpsId);
    const data: { name: string }[] = availableUpgradeData.data;
    return data.map((item: { name: string }) => item.name);
};

//GET - /vps/{id}/distributions
export const getVpsDistributionsData = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/distributions`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

export const getVpsDistributions = async (apiKey: string, vpsId: number) => {
    const distributionsData = await getVpsDistributionsData(apiKey, vpsId);
    const data: { name: string }[] = distributionsData.data.distributions;
    return data.map((item: { name: string }) => item.name);
};

//POST - /vps/{id}/rebuild
export const rebuildVps = async (apiKey: string, vpsId: number) => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/rebuild`, {
      method: 'POST',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

//GET - /vps/{id}/statistics/{time}
export const getVpsStatisticsData = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month') => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/statistics/${time}`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};

export const getVpsStatisticsList = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month',) => {
    const statisticsData = await getVpsStatisticsData(apiKey, vpsId, time);
    const data: { time: number }[] = statisticsData.data;
    return data.map((item: { time: number }) => item.time);
};

export const getVpsStatisticData = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticsData = await getVpsStatisticsData(apiKey, vpsId, time);
    const data = statisticsData.data.find((item: any) => item.time === timestamp);
    return data;
};

export const getVpsStatisticTime = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.time : null;
};

export const getVpsStatisticCpu = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.cpu : null;
};

export const getVpsStatisticMemory = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.memory : null;
};

export const getVpsStatisticMaxMemory = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.max_memory : null;
};

export const getVpsStatisticDiskWrite = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.diskwrite : null;
};

export const getVpsStatisticDiskRead = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.diskread : null;
};

export const getVpsStatisticNetIn = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.netin : null;
};

export const getVpsStatisticNetOut = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month', timestamp: number) => {
    const statisticData = await getVpsStatisticData(apiKey, vpsId, time, timestamp);
    return statisticData ? statisticData.netout : null;
};

//GET - /vps/{id}/antiddos/{time}
export const getVpsAntiDdos = async (apiKey: string, vpsId: number, time: 'hour' | 'day' | 'week' | 'month') => {
    const response = await fetch(`https://www.hostmyservers.fr/api/vps/${vpsId}/antiddos/${time}`, {
      method: 'GET',
      headers: {
        'Authorization': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
};