export const extractIdAndResourceType = (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1);
    const resourceType = url.substring(url.indexOf('api/') + 'api/'.length, url.lastIndexOf('/'));

    return { id, resourceType };
}