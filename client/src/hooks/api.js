import axios from "axios"
import { API_ENDPOINT } from "../constants"


const useAPI = () => {

    const generateProof = async (lat, lng) => {
        const { data } = await axios.get(API_ENDPOINT + `/generate-proof?lat=${lat}&lng=${lng}`)
        return data;
    }

    const search = async (lat, lng, radius, date, time) => {
        let timestamp = (new Date(date)).valueOf() + (3600000 * Number(time))
        timestamp = Math.floor(timestamp / 1000)
        const { data } = await axios.get(API_ENDPOINT + `/search?lat=${lat}&lng=${lng}&radius=${radius}&timestamp=${timestamp}`)
        return data;
    }

    const uploadProof = async (payload) => {
        const { data } = await axios.post(API_ENDPOINT + "/capture", payload, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }

    const getStats = async () => {
        const { data } = await axios.get(API_ENDPOINT + `/stats`)
        return data;
    }

    return {
        generateProof,
        uploadProof,
        getStats,
        search
    }

}

export default useAPI;


