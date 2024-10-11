
import React, { useState } from 'react';

function VideoUpload() {
    const [video, setVideo] = useState(null);

    const handleVideoChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleUpload = () => {
        if (video) {
            const formData = new FormData();
            formData.append('video', video);

            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }
    };

    return (
        <div>
            <h2>Upload Video</h2>
            <input type="file" onChange={handleVideoChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default VideoUpload;
