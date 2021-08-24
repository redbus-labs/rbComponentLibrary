export const getQueryObject = (params: string = "") => {
    let paramString: any = params ? params : location.search;
    const queryObject: any = {};

    paramString = paramString.substr(1, paramString.length);

    paramString = paramString.split("&");

    for (const param of paramString) {
        const paramKey = param.split("=")[0];
        const paramValue = param.split("=")[1];
        queryObject[paramKey] = decodeURIComponent(paramValue);
    }

    return queryObject;
};

export const queryObjectStringify = (paramObject: any) => {
    const paramKeys = Object.keys(paramObject);
    let paramString = "";
    for (let i = 0; i < paramKeys.length; i++) {
        paramString += `${paramKeys[i]}=${encodeURIComponent(
            paramObject[paramKeys[i]],
            )}${i >= paramKeys.length - 1 ? "" : "&"}`;
    }
    return paramString;
};
