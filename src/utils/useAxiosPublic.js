import axios from "axios"

export const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: '',
    })

    return {
        axiosPublic
    }
}