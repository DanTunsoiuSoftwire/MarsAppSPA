import * as axios from "axios";
import {useEffect, useState} from "react";
import {ImageData} from "./ImageData.ts";
import './GetImageComponent.css'

export default function GetImageConponent(props: { api : axios.AxiosInstance }) {
    const defaultData: ImageData = new ImageData();
    const [photoData, setPhotoData] = useState(defaultData);
    const [defaultDate, setDefaultDate] = useState("2003-07-06");

    const fetchPhoto = async (date : string) => {
        try {
            console.log('apod/photos/' + date);
            const { data } = await props.api.get('apod/photos/' + date);
            setPhotoData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log(photoData)
    }, [photoData]);

    function searchPhoto(formData : FormData) {
        const query = formData.get("query");
        fetchPhoto(query!.toString()).then();
        console.log(query!.toString());
    }

    return (
        <div className="container">
            <div className="item-search">
                <form action={searchPhoto}>
                    <label>
                        Please select a date:
                        <input name="query" type="date" defaultValue={defaultDate} onChange={(e) => setDefaultDate(e.target.value)} />
                        <button type="submit">Get Image</button>
                    </label>
                </form>
            </div>
            <div className="item-title">
                <h1> {photoData.title} </h1>
            </div>
            <div className="item-image">
                <img
                    src={photoData.url}
                    alt="Waiting for image."
                />
            </div>
            <div className="item-description">
                <p> {photoData.description} </p>
            </div>
        </div>
    )
}