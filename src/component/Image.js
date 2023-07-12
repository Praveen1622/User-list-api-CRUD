import React, { useState } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';

//import images from local
// import img1 from './images/kitten/200.jpg';
// import img2 from './images/kitten/201.jpg';
// import img3 from './images/kitten/202.jpg';
// import img4 from './images/kitten/203.jpg';

const imageList = [];

const Image = () => {
  const [image, setImage] = useState(null);

  const onPick = (pickedImage) => {
    setImage(pickedImage);
  };

  return (
    <div>
      <ImagePicker
        images={imageList.map((image, i) => ({ src: image, value: i }))}
        onPick={onPick}
      />
      <button type="button" onClick={() => console.log(image)}>
        OK
      </button>s
    </div>
  );
};

export default Image;
