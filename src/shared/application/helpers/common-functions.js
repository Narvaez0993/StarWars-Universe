import { categoryCard } from "../constants/utils";

export const extractIdAndResourceType = (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1);
    const resourceType = url.substring(url.indexOf('api/') + 'api/'.length, url.lastIndexOf('/'));

    return { id, resourceType };
}

export const categoryFoils = (id, resourceType) => {
    switch (resourceType) {
        case 'films':
            return categoryCard.special;
        case 'starships':
            return id <= 10 ? categoryCard.special : categoryCard.regular;
        case 'people':
            return id <= 20 ? categoryCard.special : categoryCard.regular;
        default:
            return null;
    }
}

export const filteredData = (data, dataFilter, type) => {
    if(data){
        return data.filter(d => {
            const { id } = extractIdAndResourceType(d.url);
            return dataFilter?.[type]?.includes(id)
        });
    }

    return []
}