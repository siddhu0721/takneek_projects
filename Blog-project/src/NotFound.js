import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>That page not found</h2>
            <Link to="/">Back to the Homepage</Link>
        </div>
     );
}
 
export default NotFound;