import axios from "../httpClient";

export const getBanners = () => axios.get(`/api/banners`);
export const getBanner = (bannerId) => axios.get(`/api/banners/${bannerId}`);
export const createBanner = (data) => axios.post(`/api/banners`, data);
export const updateBanner = (data) =>
  axios.post(`/api/banners/${bannerId}`, data);
export const deleteBanner = (bannerId) =>
  axios.delete(`/api/banners/${bannerId}`);
