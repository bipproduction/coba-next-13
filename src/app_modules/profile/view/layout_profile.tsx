'use client'
import { AppShell, Box, Burger, Drawer, Flex, Header, MediaQuery, NavLink, Navbar, ScrollArea, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdSettings } from "react-icons/md";

export default function ViewLayoutProfile({ children }: { children: any }) {
    const [opened, setOpened] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false)
    const router = useRouter()
    return <>
        <AppShell header={<Header p={"sm"} height={60}>
            <Flex>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger opened={openDrawer} onClick={() => setOpenDrawer(!openDrawer)} />
                </MediaQuery>
                <Title order={3}>Profile</Title>
            </Flex>
        </Header>}
            navbar={<Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                <Navbar.Section grow component={ScrollArea}>
                    <NavLink label={"edit"} onClick={() => router.push('/profile/edit')} />
                    <NavLink label={"galery"} onClick={() => router.push('/profile/galery')} />
                </Navbar.Section>
                <Navbar.Section>
                    <NavLink icon={<MdSettings />} />
                </Navbar.Section>
            </Navbar>}
        >
            {children}
            <Box h={2000}></Box>
            <Title>Bawah</Title>

        </AppShell>
        <Drawer opened={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Title>Ini Drawernya</Title>
        </Drawer>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Flex pos={"fixed"} bottom={0} p="lg" bg={"blue"} w={"100%"}>
                <Title>Menu</Title>
            </Flex>
        </MediaQuery>

    </>
}