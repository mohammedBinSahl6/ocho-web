import { Link, Outlet } from "react-router-dom";

export default function GForms(){
    return(
        <div className="container-fluid starter" id="Forms-design">
            <div className="row py-5">
            <h5 className="text-center">Choose a Language</h5>
                <div className="f-holder">
                    
                    <div className="btn-group">
                        <Link className="btn btn-outline-dark" to='/D-forms/en'>En</Link>
                        <Link className="btn btn-outline-dark" to='/D-forms/ar'>Ar</Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
               <Outlet />
            </div>
        </div>
    )
}