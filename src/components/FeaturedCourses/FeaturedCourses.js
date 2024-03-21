import {FaArrowRight, FaDropbox} from "react-icons/fa";
import {Link} from "react-router-dom";
import React from "react";
import '../ExploreByJobCategory/ExploreByJobCategory.css';
import {TbCircleLetterN} from "react-icons/tb";
import {SiTerraform, SiUdacity} from "react-icons/si";

export default function FeaturedCourses() {
    return (
        <div style={{color: '#251E1E', marginLeft: '100px', height: '100vh', marginTop: '100px'}}>
            <div className="row align-items-center">
                <div className="col">
                    <div style={{color: "white", fontSize: '40px', display: 'inline'}}>Featured</div>
                    <div style={{color: "red", fontSize: '40px', display: 'inline'}}> Courses</div>
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

            <div className="row mt-5 justify-content-center" style={{marginRight: '80px'}}>

                <div className="col-5 card category-card m-3" style={{backgroundColor: "white", color: "black"}}>
                    <div className="row">
                        <div className="col-2 mx-4">
                            <TbCircleLetterN className="mt-5 mx-5 category-card-img"
                                             style={{color: "green", fontSize: '75px'}}/>
                        </div>
                        <div className="col-6 text-dark">
                            <div className="mt-5 fs-2 fw-bold">Social Media Assistant</div>
                            <p className="fs-4">Nomad . Paris, France</p>
                            <div className="row mb-4">
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Full-Time</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-warning rounded-5 text-warning"><b>Marketing</b>
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary rounded-5 text-primary"><b>Design</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-5 card category-card m-3" style={{backgroundColor: "white", color: "black"}}>
                    <div className="row">
                        <div className="col-2 mx-4">
                            <FaDropbox  className="mt-5 mx-5 category-card-img"
                                           style={{color: "blue", fontSize: '75px'}}/>
                        </div>
                        <div className="col-6 text-dark">
                            <div className="mt-5 fs-2 fw-bold">Brand Designer</div>
                            <p className="fs-4">Dropbox . San Fransisco, USA</p>
                            <div className="row mb-4">
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Full-Time</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-warning rounded-5 text-warning"><b>Marketing</b>
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary rounded-5 text-primary"><b>Design</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-5 card category-card m-3" style={{backgroundColor: "white", color: "black"}}>
                    <div className="row">
                        <div className="col-2 mx-4">
                            <SiTerraform  className="mt-5 mx-5 category-card-img"
                                           style={{color: "lightblue", fontSize: '75px'}}/>
                        </div>
                        <div className="col-6 text-dark">
                            <div className="mt-5 fs-2 fw-bold">Interactive Developer</div>
                            <p className="fs-4">Terraform . Hamburg, Germany</p>
                            <div className="row mb-4">
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Full-Time</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-warning rounded-5 text-warning"><b>Marketing</b>
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary rounded-5 text-primary"><b>Design</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-5 card category-card m-3" style={{backgroundColor: "white", color: "black"}}>
                    <div className="row">
                        <div className="col-2 mx-4">
                            <SiUdacity  className="mt-5 mx-5 category-card-img"
                                           style={{color: "aqua", fontSize: '75px'}}/>
                        </div>
                        <div className="col-6 text-dark">
                            <div className="mt-5 fs-2 fw-bold">Interactive Developer</div>
                            <p className="fs-4">Udacity . Paris, France</p>
                            <div className="row mb-4">
                                <div className="col">
                                    <button className="btn btn-success rounded-5 text-white"><b>Full-Time</b></button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-warning rounded-5 text-warning"><b>Marketing</b>
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-outline-primary rounded-5 text-primary"><b>Design</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}