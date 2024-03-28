import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
    const [value, setValue] = useState('');

    return <ReactQuill
        theme="snow"
        placeholder='Enter Details here ...'
        value={value}
        onChange={setValue}
        style={{
            height: '200px',
            width: '700px',
            color: 'white',
            borderRadius: '10px'
        }}
    />;
}

export default Editor