import axios from "axios";

const youtubeKey = 'AIzaSyDotPGd4xQfEiXvJi4HPoIaeKOowCxaCIE';

const getHotTerendVideos = async () => {
    const hotTrendVidoes = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${youtubeKey}`
    );
    return hotTrendVidoes.data;
};

const getReserchedVideos = async (typing) => {
    const reserchedString = typing;
    const reserchedVideos = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${reserchedString}&key=${youtubeKey}`
    );
    return reserchedVideos.data;
};


export { getHotTerendVideos, getReserchedVideos };
