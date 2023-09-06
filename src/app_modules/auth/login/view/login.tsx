'use client'

import { Button, Center, PasswordInput, Stack, TextInput, Title, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { ViewRegister } from "../../register";
import { useRouter } from "next/navigation";
import _ from "lodash";
import toast from "react-simple-toasts";
import { funLoagin } from "../fun/login";

export default function ViewLogin() {
    const router = useRouter()
    const [laoding, setloading] = useState(false)
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    })

    async function onLogin() {
        setloading(true)
        if (_.values(dataLogin).includes("")) return toast("isi data yang diperluakan")
        const apa = await funLoagin({ data: dataLogin })
        if (!apa.success) return setloading(false), toast(apa.message)
        toast("success")
        router.replace('/')
    }
    return <>
        <Center>
            <Stack maw={720}>
                <Title>LOGIN</Title>
                <TextInput placeholder="email" onChange={(val) => setDataLogin({
                    ...dataLogin,
                    email: val.target.value
                })} />
                <PasswordInput placeholder="password" onChange={(val) => setDataLogin({
                    ...dataLogin,
                    password: val.target.value
                })} />
                <Button loading={laoding} onClick={onLogin}>LOGIN</Button>

                <UnstyledButton onClick={() => router.push('/auth/register')} c="blue">Register</UnstyledButton>
            </Stack>
        </Center>
    </>
}