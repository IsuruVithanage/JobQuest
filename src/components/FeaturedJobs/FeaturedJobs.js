import {FaArrowRight, FaDropbox, FaTwitter,} from "react-icons/fa";
import {Link} from "react-router-dom";
import React from "react";
import '../ExploreByJobCategory/ExploreByJobCategory.css';
import {SiCanva, SiGodaddy, SiRevolut} from "react-icons/si";
import {TbCircleLetterP} from "react-icons/tb";
import {IoLogoDesignernews} from "react-icons/io";
import {MdOutlineProductionQuantityLimits} from "react-icons/md";

export default function FeaturedJobs() {
    return (
        <div style={{color: '#251E1E', marginLeft: '100px', height: '100vh', marginTop: '100px'}}>
            <div className="row align-items-center">
                <div className="col">
                    <div style={{color: "white", fontSize: '40px', display: 'inline'}}>Featured</div>
                    <div style={{color: "red", fontSize: '40px', display: 'inline'}}> Jobs</div>
                </div>
                <div className="col text-right">
            <span style={{marginTop: '20px', marginBottom: '0px'}}>
                <Link to="/" className="nav-link" style={{
                    color: "red",
                    marginRight: '100px',
                    fontSize: "large",
                    marginTop: '20px'
                }}>Show all Jobs <FaArrowRight/></Link>
            </span>
                </div>
            </div>

            <div className="row mt-5" style={{marginRight: '80px'}}>

                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <SiRevolut className="mt-3 mx-3 category-card-img"
                                               style={{color: "black", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Email Marketing</div>
                            <p className="mx-3">Revolut . Madrid, Spain</p>
                            <p className="mx-3">Revolut is looking for Email Marketing to help team ma ...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Marketing</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Design</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <FaDropbox className="mt-3 mx-3 category-card-img"
                                               style={{color: "blue", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Brand Designer</div>
                            <p className="mx-3">Dropbox . San Fransisco, US</p>
                            <p className="mx-3">Dropbox is looking for Brand Designer to help the team t ...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Design</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Business</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <TbCircleLetterP className="mt-3 mx-3 category-card-img"
                                               style={{color: "black", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Email Marketing</div>
                            <p className="mx-3">Pitch . Berlin, Germany</p>
                            <p className="mx-3">Pitch is looking for Customer Manager to join marketing t ...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Marketing</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <IoLogoDesignernews className="mt-3 mx-3 category-card-img"
                                               style={{color: "green", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Visual Designer</div>
                            <p className="mx-3">Blinklist . Granada, Spain</p>
                            <p className="mx-3">Blinkist is looking for Visual Designer to help team desi ...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Design</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row mt-5" style={{marginRight: '80px'}}>

                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <MdOutlineProductionQuantityLimits className="mt-3 mx-3 category-card-img"
                                               style={{color: "blue", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Product Designer</div>
                            <p className="mx-3">ClassPass . Manchester, UK</p>
                            <p className="mx-3">ClassPass is looking for Product Designer to help us...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Marketing</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Design</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <SiCanva className="mt-3 mx-3 category-card-img"
                                               style={{color: "aquamarine", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Lead Designer</div>
                            <p className="mx-3">Canva . Ontario, Canada</p>
                            <p className="mx-3">Canva is looking for Lead Engineer to help develop n ...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Design</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Business</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <SiGodaddy  className="mt-3 mx-3 category-card-img"
                                               style={{color: "black", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Brand Strategist</div>
                            <p className="mx-3">GoDaddy . Marseille, France</p>
                            <p className="mx-3">GoDaddy is looking for Brand Strategist to join the team...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Marketing</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card category-card"
                         style={{width: '18rem', backgroundColor: "white", color: "black"}}>
                        <div className="card-body">
                            <div className="row align-content-between">
                                <div className="col">
                                    <FaTwitter  className="mt-3 mx-3 category-card-img"
                                               style={{color: "blue", fontSize: '30px'}}/>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary">Full Time
                                    </button>
                                </div>
                            </div>
                            <div className="card-title fs-5 mt-2 mx-3 fw-bold">Data Analyst</div>
                            <p className="mx-3">Twitter . San Diego, US</p>
                            <p className="mx-3">Twitter is looking for Data Analyst to help team desi ...</p>
                            <div className="row mx-1">
                                <div className="col">
                                    <button className="btn btn-warning rounded-5 text-white"><b>Technology</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}