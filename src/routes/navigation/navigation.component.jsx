import { Outlet } from "react-router-dom"

const Navigation = () =>  {
    return (
        <div>
            <div>I am the Navigation Component</div>
            <Outlet />
        </div>

    )
}

export default Navigation