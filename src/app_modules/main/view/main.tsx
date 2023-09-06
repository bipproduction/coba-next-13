'use client'
import { ActionIcon, AppShell, Group, Header, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdAccountCircle } from 'react-icons/md'

export default function ViewMain({ data }: { data: any }) {
    const router = useRouter()
    return <AppShell
        header={<Header height={60} p={"sm"}>
            <Group align="center" position="apart" >
                <Title order={3}>Next 13</Title>
                <ActionIcon onClick={() => router.push('/profile')}>
                    <MdAccountCircle size={36} />
                </ActionIcon>
            </Group>
        </Header>}>

    </AppShell>
}