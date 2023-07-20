import React from 'react'
import { Image } from '@chakra-ui/react'

export const WatchComp = ({image}) => {
    return (
        <div>
            <Image
                borderRadius='full'
                boxSize='150px'
                src={image}
                alt='Dan Abramov'
            />
        </div>
    )
}
