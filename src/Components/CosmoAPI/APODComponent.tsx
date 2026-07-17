import {useEffect, useState} from "react";
import * as axios from "axios";

export default function APODComponent() {
    const defaultDate = {
        copyright: "",
        date: "",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: ""
    }
    const [photoData, setPhotoData] = useState(defaultDate);
    const api = axios.create({
        baseURL: 'http://localhost:5100',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const fetchPhoto = async () => {
        try {
            const { data } = await api.get('apod/today')
            setPhotoData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPhoto().then();
    }, []);

    useEffect(() => {
        console.log(photoData)
    }, [photoData]);

    return (
        <div>
            <h1> {photoData.title} </h1>
            <img
                src={photoData.url}
                alt="Could not get image from the url."
                />
        </div>
    )
};
