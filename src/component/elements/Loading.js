import React from 'react'
import { BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
import { css } from '@emotion/core'

export default function Loading() {
    const loasderCSS = css`
        margin-top : 25px;
        margin-bottom : 25px;
    `
    return (
        <div>
            <BounceLoader  css={loasderCSS} size={24} color='red' loading/>
            <BarLoader css={loasderCSS} size={48} color='blue' loading/>
            <BeatLoader css={loasderCSS} size={20} color='black' loading/>
        </div>
    )
}
