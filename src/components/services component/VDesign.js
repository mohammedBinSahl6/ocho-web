import create from '../../images/create-design.jpg'
import Logo from '../Logo';
import vdgroup from '../../images/VD-GROUP.svg'
import vlogo from '../../images/v-logo.svg'
import { Link } from 'react-router-dom';
export default function VDesign(){
    return(
        <>
            <div className="container-fluid starter " id="vd-land">
                <div className="row pt-5">
                    <h1 className="text-center head text-white">VDesign</h1>
                </div>
                <div className='row  py-5'>
                    <div className='col-sm-6'>
                        <div className='f-holder'>
                        <img className='logo' src={vlogo} />
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='f-holder'>
                            <img className='logo' src={vdgroup} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id="ready-d">
                <div className="row pt-5">
                    <h1 className="head text-center">Ready Made Designs</h1>
                </div>

                <div className="row pt-3">
                    <div className="col-sm p-3">
                        <div className="f-holder">
                            <a>
                        <div className="r-work r-work-1  f-holder">
                            <div className='bov'></div>
                            <h2 className="text-center">show</h2>
                        </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-sm p-3">
                        <div className="f-holder">
                            <a>
                        <div className="r-work r-work-2  f-holder">
                            <div className='bov'></div>
                            <h2 className="text-center">show</h2>
                        </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-sm p-3">
                        <div className="f-holder">
                            <a>
                        <div className="r-work r-work-3  f-holder">
                            <div className='bov'></div>
                            <h2 className="text-center">show</h2>
                        </div>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-sm p-3">
                        <div className="f-holder">
                            <a>
                        <div className="r-work r-work-4  f-holder">
                            <div className='bov'></div>
                            <h2 className="text-center">show</h2>
                        </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-sm p-3">
                        <div className="f-holder">
                            <a>
                        <div className="r-work r-work-5  f-holder">
                            <div className='bov'></div>
                            <h2 className="text-center">show</h2>
                        </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-sm p-3">
                        <div className="f-holder">
                            <a>
                        <div className="r-work r-work-6  f-holder">
                            <div className='bov'></div>
                            <h2 className="text-center">show</h2>
                        </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id="create-design">
                <div className="row pt-5">
                    <h1 className="text-center head">Create Your Own</h1>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <img src={create} className='create-vector' />
                    </div>
                    <div className="col-sm-6">
                        <div className='f-holder'>
                            <a href='/D-forms/en' className='btn btn-outline-dark start-d-btn my-5'>Start</a>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        
        
        
        
        </>
    )
}