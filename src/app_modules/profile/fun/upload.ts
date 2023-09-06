'use server'
import prisma from '@/app_modules/bin/prisma'
import fs from 'fs'

export async function funUpload(formData: FormData) {
    const f: any = formData.get('file')
    const fName = f.name
    const fExt = f.name.split(".").pop()

    const fl = await prisma.galery.create({
        data: {
            name: fName,
            ext: fExt
        },
        select: {
            id: true,
            name: true,
            ext: true
        }
    })

    const filenya = Buffer.from(await f.arrayBuffer())
    fs.writeFileSync(`./public/images/${fl.id}.${fExt}`, filenya)

    return {
        success: true,
        message: "success",
        data: fl
    }

}