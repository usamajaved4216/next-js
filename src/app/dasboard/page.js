import Link from "next/link";

async function Dashboard() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const response = await res.json();

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Meme Dashboard</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {response.data.memes.map((item, index) => (
                    <div key={index} style={{ width: "300px", margin: "20px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", overflow: "hidden" }}>
                        <img src={item.url} alt="Meme" style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }} />
                        <div style={{ padding: "16px" }}>
                            <h2 style={{ margin: "0", fontSize: "18px" }}>Meme #{index + 1}</h2>
                            <p style={{ margin: "10px 0", fontSize: "14px", color: "#555" }}>Author: {item.author}</p>
                            <Link href={`/meme-detail?url=${item.url}`}>
                                <button style={{ display: "block", textAlign: "center", padding: "8px 16px", borderRadius: "4px", background: "#007bff", color: "#fff", textDecoration: "none" }}>Select this meme</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
