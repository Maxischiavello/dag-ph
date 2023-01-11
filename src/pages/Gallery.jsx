import { Container } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import data from '../data'

function Gallery() {

    return (
        <Container>
            <ImageList
                sx={{
                    columnCount: {
                        xs: '1 !important',
                        sm: '2 !important',
                        md: '3 !important',
                        lg: '3 !important',
                        xl: '4 !important',
                    },
                }} variant="masonry" cols={3} gap={8}>
                {data.map((photo, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${photo}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={index}
                            loading="lazy"
                            style={{pointerEvents: 'none'}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}

export default Gallery