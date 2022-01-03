// This function (custm Hook) allows you to reuse the HttpRequests instead of having to write axios fetches/apis the whole time
import {useEffect, useState} from 'react'
import axios from 'axios'

export const useAxiosGet = (url) => {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => { // executes when page/component rerenders
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setTimeout(() => setRequest({
                    loading: false,
                    data: null,
                    error: true
                }),2000)
            })
    }, [url])

    return request
}