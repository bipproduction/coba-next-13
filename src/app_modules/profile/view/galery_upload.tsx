import { Box, Image, Title } from "@mantine/core";
import { Group, Text, useMantineTheme, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import _ from "lodash";
import toast from "react-simple-toasts";
import { useState } from "react";
import { funUpload } from "../fun/upload";
import { useShallowEffect } from "@mantine/hooks";

export default function ViewGaleryUpload({ data }: { data: any }) {
    const [loading, setLoading] = useState(false)
    const [hasilGambar, setHasilGambar] = useState<string | null>(null)
    const [listData, setListData] = useState<any[]>(data)

    useShallowEffect(() => {

    }, [])

    return <>
        <Title>Upload</Title>
        {JSON.stringify(listData)}
        <Box miw={300} pos={"relative"}>
            {hasilGambar && <Image src={hasilGambar} alt="" width={300} />}
        </Box>
        <Dropzone
            loading={loading}
            onDrop={async (files) => {
                setLoading(true)
                if (!files || _.isEmpty(files)) return toast("tidak ada yang dipilih")
                const fd = new FormData()
                fd.append('file', files[0])

                const apa = await funUpload(fd)
                if (apa.success) {
                    setHasilGambar(`/img/${apa.data.id}.${apa.data.ext}`)
                    return setLoading(false), toast('success')
                }
            }}
            onReject={(files) => console.log('rejected files', files)}
            // maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
        >
            <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                <Dropzone.Accept>
                    <IconUpload
                        size="3.2rem"
                        stroke={1.5}

                    />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <IconX
                        size="3.2rem"
                        stroke={1.5}

                    />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    <IconPhoto size="3.2rem" stroke={1.5} />
                </Dropzone.Idle>

                <div>
                    <Text size="xl" inline>
                        Drag images here or click to select files
                    </Text>
                    <Text size="sm" color="dimmed" inline mt={7}>
                        Attach as many files as you like, each file should not exceed 5mb
                    </Text>
                </div>
            </Group>
        </Dropzone>
    </>
}