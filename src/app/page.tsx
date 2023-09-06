import ViewMain from "@/app_modules/main/view/main";
import { unsealData } from "iron-session";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const c = cookies().get("_tkn")
  if (!c || !c.value || _.isEmpty(c.value)) return redirect('/auth/login')
  const userId = await unsealData(c.value, { password: process.env.PWD as string })

  return <ViewMain data={{
    token: c.value,
    userId: userId
  }} />;
}
