'use client'
import { Button, Center, PasswordInput, Stack, TextInput, Title, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { ViewLogin } from "../../login";
import _ from "lodash";
import toasts from 'react-simple-toasts'
import { useRouter } from "next/navigation";
import { funRegister } from "../fun/register";

export default function ViewRegister() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    async function onRegister() {
        setLoading(true)
        if (_.values(dataUser).includes("")) return setLoading(false), toasts("isi seemua datanya")
        const apa = await funRegister({ data: dataUser })
        if (!apa.success) return setLoading(false), toasts(apa.message)
        toasts("success")
        router.replace('/auth/login')
    }

    return <Center>
        <Stack maw={720}>
            <Title>Register</Title>
            <TextInput placeholder="name" onChange={(val) => setDataUser({
                ...dataUser,
                name: val.target.value
            })} />
            <TextInput placeholder="email" onChange={(val) => setDataUser({
                ...dataUser,
                email: val.target.value
            })} />
            <PasswordInput placeholder="password" onChange={(val) => setDataUser({
                ...dataUser,
                password: val.target.value
            })} />
            <Button loading={loading} onClick={onRegister}>REGISTER</Button>
            <UnstyledButton onClick={() => router.push('/auth/login')} c={"blue"}>Login</UnstyledButton>
        </Stack>
    </Center>
}