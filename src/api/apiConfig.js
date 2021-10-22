const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '365990e7ad988942878f11e960c6bfbc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;