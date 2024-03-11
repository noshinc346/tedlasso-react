import api from "./apiConfig.js"

export const getEpisodes = async () => {
    try {
        const response = await api.get("/episodes");
        return response.data;
    } catch (error) {
        console.error("Error getting all episodes: ", error)
    }
}

export const getEpisode = async (id) => {
    try {
        const response = await api.get(`/episodes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting episode: ", error)
    }
}

export const createEpisode = async (episodeData) => {
    try {
        const response = await api.post("/episodes", episodeData);
        return response.data;
    } catch (error) {
        console.error("Error creating episode: ", error)
    }
}

export const editEpisode = async (id, episodeData) => {
    try {
        const response = await api.put(`/episodes/${id}`, episodeData);
        return response.data;
    } catch (error) {
        console.error("Error editing episode: ", error)
    }
}

export const deleteEpisode = async (id) => {
    try {
        const response = await api.delete(`/episodes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error delete episode: ", error)
    }
}