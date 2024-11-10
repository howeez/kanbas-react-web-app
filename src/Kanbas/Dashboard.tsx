import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="wd-dashboard-course col" style={{ width: "300px", height: "380px"}}>
                    <div className="card rounded-3 overflow-hidden" style={{width: "250px", height: "350px"}}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/1234/Home">
                            <img src="/images/reactjs.jpg" width={250} height={160} />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1234 React JS
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px", height: "380px"}}>
                <div className="card rounded-3 overflow-hidden" style={{width: "250px", height: "350px"}}>
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1000/Home">
                        <img src="/images/fundies.jpg"  width={250} height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS1000 Fundies
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Fundimentals of Computer Science
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px", height: "380px"}}>
                <div className="card rounded-3 overflow-hidden" style={{width: "250px", height: "350px"}}>
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/4550/Home">
                        <img src="/images/wd.jpg"  width={250} height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS4550 Web Dev
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Web Development
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px", height: "380px"}}>
                <div className="card rounded-3 overflow-hidden" style={{width: "250px", height: "350px"}}>
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1500/Home">
                        <img src="/images/ca.jpg"  width={250} height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CA1500 Intro to Culinary
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Introduction to the Culinary Arts
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px", height: "380px"}}>
                <div className="card rounded-3 overflow-hidden" style={{width: "250px", height: "350px"}}>
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/4000/Home">
                        <img src="/images/ood.jpg" width={250} height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS4000 OOD
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Object Oriented Design
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px", height: "380px"}}>
                <div className="card rounded-3 overflow-hidden" style={{width: "250px", height: "350px"}}>
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/4500/Home">
                        <img src="/images/pl.jpeg" width={250} height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                CS4500 PL
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Programming Languages
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px", height: "380px"}}>
                <div className="card rounded-3 overflow-hidden" style={{width: "250px", height: "350px"}}>
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/3220/Home">
                        <img src="/images/eece.jpeg" width={250} height={160} />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                                EECE3220 Digital Design
                            </h5>
                            <p className="wd-dashboard-course-title card-text">
                                Fundimentals of Digital Design and Computer Orginization
                            </p>
                            <button className="btn btn-primary"> Go </button>
                        </div>
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
