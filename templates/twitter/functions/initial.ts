'use server'
import { dimensionsForRatio } from '@/lib/constants'
import { loadGoogleFontAllVariants } from '@/lib/fonts'
import { buildFramePage } from '@/lib/sdk'
import { ImageResponse } from '@vercel/og'
import type { Config, State } from '..'
import CoverView from '../views/Cover'

export default async function initial(config: Config, state: State) {
    const fonts = []
	
	const roboto = await loadGoogleFontAllVariants('Roboto')
	fonts.push(...roboto)

    if (config?.title?.fontFamily) {
        const titleFont = await loadGoogleFontAllVariants(config.title.fontFamily)
        fonts.push(...titleFont)
    }
	
    const r = new ImageResponse(CoverView(config), {
        ...dimensionsForRatio['1.91/1'],
        fonts: fonts,
    })

    // get image data from vercel/og ImageResponse
    const bufferData = Buffer.from(await r.arrayBuffer())
    const imageData = bufferData.toString('base64')

    return buildFramePage({
        buttons: [
            {
                label: '→',
            },
        ],
        image: 'data:image/png;base64,' + imageData,
        config: config,
        aspectRatio: '1.91:1',
        function: 'page',
    })
}
