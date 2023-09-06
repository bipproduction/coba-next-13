'use server'

import prisma from "@/app_modules/bin/prisma"

export async function funRegister({ data }: { data: any }) {
    const usr = await prisma.user.findUnique({ where: { email: data.email } })
    if (usr) return {
        success: false,
        message: "email sudah terpakai , silahkan login"
    }

    await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password
        }
    })

    return {
        success: true,
        message: "success"
    }
}