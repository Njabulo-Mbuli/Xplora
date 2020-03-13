import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    imgStyling: {
        width: "80%",
        height: "auto",
        margin:"1em 0em",
        boxSizing:"border-box"
    },
    imageContainer: {
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gridColumnGap: "1px",
        width: "100%",
        maxWidth: "800px",
        boxSizing:"border-box"
    }
})

const ImageContainer = ({ flickr_images }) => {
    const classes = useStyles()
    console.log(flickr_images)
    return <div className={classes.imageContainer}>
        {flickr_images.map(imgUrl => {
            return <img key={imgUrl} className={classes.imgStyling} src={imgUrl} />
        })}
    </div>
}

export default ImageContainer