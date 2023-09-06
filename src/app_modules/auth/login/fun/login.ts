'use server'

import prisma from "@/app_modules/bin/prisma"
import { sealData } from "iron-session"
import { cookies } from 'next/headers'

export async function funLoagin({ data }: { data: any }) {
    const usr = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (!usr) return {
        success: false,
        message: "user tidak ditemukan, silahkan register"
    }

    if (data.password !== usr.password) return {
        success: false,
        message: "email or password salah"
    }

    const tkn = await sealData(usr.id, { password: process.env.PWD as string })
    cookies().set({
        name: "_tkn",
        value: tkn
    })

    return {
        success: true,
        message: "success"
    }


}