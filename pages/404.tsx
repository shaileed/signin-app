import Link from "next/link";

const NotFound= () => {
    return (
        <div className="mx-auto"  style={{width: "200px;"}}>
            <h4 style={{color:"red"}}>404 Not Found</h4>
            <p>Go Back to <u><Link href="/">Home</Link></u></p>
        </div>
    );
}

export default NotFound;