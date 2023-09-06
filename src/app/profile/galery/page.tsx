import { funGetGalery } from "@/app_modules/profile/fun/get_galery";
import ViewGalery from "@/app_modules/profile/view/galery";

export default async function Page() {
    const data = await funGetGalery()
    return <>
        <ViewGalery data={data} />
    </>
}