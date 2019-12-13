import axios from 'axios';

const baseUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";


const fetchNewsIds =  () => axios.get(baseUrl).then(data => data.data);


export const fetchNews =  async (payload) => {
	const ids = await fetchNewsIds();
  	const currentPosts = ids.slice(payload[1], payload[0]);
	return Promise.all(currentPosts.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(data => data.data)));
}

