// GET - /products
export const getProductsList = async (apiKey: string) => {
    const response = await fetch('https://www.hostmyservers.fr/api/products/', {
        method: 'GET',
        headers: {
            'Authorization': `${apiKey}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};

export const getProductById = async (apiKey: string, productId: number) => {
    const products = await getProductsList(apiKey);
    const data = products.data.find((item: any) => item.id === productId);
    return data;
};

export const getProductId = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.id;
    return data;
};

export const getProductOfferId = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.offer_id;
    return data;
};

export const getProductCreatedAt = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.created_at;
    return data;
};

export const getProductExpiredAt = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.expired_at;
    return data;
};

export const getProductStatus = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.statut;
    return data;
};

export const getProductOs = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.data.os;
    return data;
};

export const getProductIpv4 = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.data.ipv4;
    return data;
};

export const getProductIpv6 = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.data.ipv6;
    return data;
};

export const getProductVmid = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.data.vmid;
    return data;
};

export const getProductOsShort = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.data.os_short;
    return data;
};

export const getProductServerId = async (apiKey: string, productId: number) => {
    const product = await getProductById(apiKey, productId);
    const data = product.data.server_id;
    return data;
};

// POST - /products
export const createProduct = async (apiKey: string) => {
    const response = await fetch('https://www.hostmyservers.fr/api/products/', {
        method: 'POST',
        headers: {
            'Authorization': `${apiKey}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};