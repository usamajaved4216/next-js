import Link from "next/link";

async function Dashboard() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const response = await res.json();
    console.log("🚀 ~ Dashboard ~ response:", response)

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Meme Dashboard</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {response.data.memes.map((item, index) => (
                    <div key={index} style={{ width: "250px", margin: "20px", boxShadow: "0px 4px 8px grey", borderRadius: "8px", }}>
                        <img src={item.url} alt="Meme" style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }} />
                        <div style={{ padding: "16px" }}>
                            <h4 style={{ margin: "10px 0", fontSize: "13px" }}>Meme #{index + 1 }</h4>
                            <h2 style={{ margin: "10px 0", fontSize: "18px" }}>{item.name}</h2>
                            <Link href={`/meme-detail?url=${item.url}`}>
                                <button style={{ cursor: "pointer", textAlign: "center", padding: "8px 16px" ,borderRadius: "4px", background: "#007bff", color: "#fff"}}>Select this meme</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
