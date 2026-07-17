import {useEffect, useState} from "react";
import * as axios from "axios";
import {APODData} from "./APODDate.ts";

export default function APODComponent(props: { api : axios.AxiosInstance }) {
    const defaultDate: APODData = new APODData();
    const [photoData, setPhotoData] = useState(defaultDate);

    const fetchPhoto = async () => {
        try {
            const { data } = await props.api.get('apod/today')
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
                alt="Waiting for image."
                />
        </div>
    )
};
