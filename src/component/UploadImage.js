import React from 'react';
import ImageUploading from 'react-images-uploading';
import "./UploadImage.css"
import { Margin } from '@mui/icons-material';
export function UploadImage({setUser}){
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList[0]?.data_url, addUpdateIndex, "onChange");
        setImages(imageList);
        setUser((item) => ({ ...item, image: imageList[0]?.data_url }))
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => {
                    // console.log(imageList, "imageList")
                    return (
                        // write your building UI
                        <div className="upload__image-wrapper">
    
                        {!imageList?.length ? (
                                <button
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                className='hello'
                            >
                               Add Image
                            </button>
                            ) : null} 
                            
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }}
            </ImageUploading>
        </div>
    );
            }


