'use client'
import { useSearchParams } from "next/navigation";
import { useState, createRef } from "react";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";

function memeDetail(params) {
    const searchParams = useSearchParams()
    const memeUrl = searchParams.get('url')

    const [text1, setText1] = useState()
    const [text2, setText2] = useState()

    const memeRef = createRef();

    const exportMeme = () => {
        exportComponentAsJPEG(memeRef, {
            fileName: 'memeFileName'
        })
    }

    return(
        <>
        <h1>Edit Meme</h1>
        <div ref={memeRef} className="edit-meme"> 
        <img src={memeUrl} width={300} />

        <Draggable><h4>{text1}</h4></Draggable>
        <Draggable><h4>{text2}</h4></Draggable>
        </div>
        <input placeholder="Enter Meme " onChange={e => setText1(e.target.value)} />
        <input placeholder="Enter Meme " onChange={e => setText2(e.target.value)} />
        <button onClick={exportMeme}>Save</button>
        </>
    )
};

export default memeDetail;