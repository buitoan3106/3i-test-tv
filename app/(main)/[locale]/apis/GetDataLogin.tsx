import { http } from "../utils/http"

export const  GetTreeCategoryData = ()=>http.post(`MobileLogin/GetTreeCategoryData`);
export const  GetListCmsItem = (id)=>http.post(`MobileLogin/GetListCmsItem?cat_id=${id}`);
export const  GetListFile = ()=>http.post(`MobileLogin/GetListFile`);