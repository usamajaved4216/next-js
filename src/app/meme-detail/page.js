'use client';
import { useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";

function MemeDetail() {
    const searchParams = useSearchParams();
    const memeUrl = searchParams.get('url');

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const memeRef = useRef();

    const exportMeme = () => {
        exportComponentAsJPEG(memeRef, {
            fileName: 'memeFileName'
        });
    }

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Edit Meme</h1>
            <div style={{ position: "relative", width: "300px", margin: "0 auto", textAlign: "center" }} ref={memeRef}>
                <img src={memeUrl} alt="Meme" width={300} />
                <Draggable>
                    <div style={{ position: "absolute", cursor: "pointer", top: "20%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h4 style={{ margin: "0", padding: "4px", background: "rgba(255, 255, 255, 0.7)", borderRadius: "4px", userSelect: "none" }}>{text1}</h4>
                    </div>
                </Draggable>
                <Draggable>
                    <div style={{ position: "absolute", cursor: "pointer", top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <h4 style={{ margin: "0", padding: "4px", background: "rgba(255, 255, 255, 0.7)", borderRadius: "4px", userSelect: "none" }}>{text2}</h4>
                    </div>
                </Draggable>
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <input type="text" placeholder="Enter Meme Text 1" onChange={e => setText1(e.target.value)} style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
                <input type="text" placeholder="Enter Meme Text 2" onChange={e => setText2(e.target.value)} style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
                <button onClick={exportMeme} style={{ padding: "8px 16px", borderRadius: "4px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>Save</button>
            </div>
        </div>
    );
}

export default MemeDetail;
