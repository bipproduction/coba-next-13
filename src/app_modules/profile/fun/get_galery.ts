'use server'

import prisma from "@/app_modules/bin/prisma"

export async function funGetGalery(){
    const data = await prisma.galery.findMany({
        select: {
            id: true,
            name: true,
            ext: true
        }
    })

    return data
}