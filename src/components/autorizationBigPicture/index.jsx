import Image from 'next/image'

import style from "./style.module.scss"

export const AutorizationBigPicture = () => {
    return (
        <div className={`${style.wr_img}`}>
            <Image
                src="/images/other/img_autorization.svg"
                alt="full images"
                width={100}
                height={100}
            />
        </div>
    )
}