export const API_URL = (page, perPage) => `https://project-happy-thoughts-api-5j5sndevjq-lz.a.run.app/thoughts?page=${page}&size=${perPage}`
export const LIKES_URL = (messageID) => `https://project-happy-thoughts-api-5j5sndevjq-lz.a.run.app/thoughts/${messageID}/like`
