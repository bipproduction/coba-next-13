'use client'
import ViewGaleryUpload from "./galery_upload";

export default function ViewGalery({data}: {data: any}) {
    return <>
        <ViewGaleryUpload data={data} />
    </>
}