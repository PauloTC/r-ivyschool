import React, { useState, useCallback, Component } from 'react'
import {
    CardMedia,
    Container,
    Fab,
    Box,
    Typography,
    Grid,
    CardContent,
    TextField
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";

const useStyles = makeStyles({

})



const ExploreCollege = () => {
    
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    const classes = useStyles();

    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
          },
          {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
          },
          {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
          },
          {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
          },
          {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
          },
          {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
          },
          {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
          },
          {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 4,
            height: 3
          },
          {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
          }
    ];

    return (
        <Box  py={15} >

                <Container maxWidth="xl" >
                    <Grid alignItems="center"  container >
                        <Grid item xs={12} sm={6}  lg={3} >
                            <Typography  variant="body1"  >    
                                <Box color="#7C7C7C" fontWeight={ 300 } > ALL EDUMA ALL THE TIME</Box>
                            </Typography>
                            <Typography variant="h4" >
                                <Box fontWeight={ 900 } >Explore Eduma</Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}  lg={ 2 } >
                            <Typography  variant="h2" >
                                <Box  textAlign="center" fontWeight={ 800 } > 24 </Box>
                            </Typography>
                            <Typography variant="h5" >
                                <Box  color="#7C7C7C" fontWeight={ 300 } textAlign="center"  > HOURS </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={12}   lg={ 7 } >
                            <Typography>
                                <Box color="#7C7C7C" >There's always something amazing happening at Michigan Whether it's on campus or around the world our students, faculty staff and alumni are out seizing the day as shown in the slideshow below suspendisse potenti</Box>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Box mt={ 6 } >
                        <Gallery margin={ 5 }  photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                                />
                            </Modal>
                            ) : null}
                        </ModalGateway>
                    </Box>
                    
                </Container>

        </Box>         
    )
}



export default ExploreCollege