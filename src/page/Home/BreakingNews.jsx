import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex font-medium bg-gray-100" >
            <button class="btn btn-sm  btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-8" to='/'>
                I can be a React component, multiple React components....
                </Link>
                <Link className="mr-8" to='/'>
                I can be a React component, multiple React components....
                </Link>
                <Link className="mr-8" to='/'>
                I can be a React component, multiple React components....
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;