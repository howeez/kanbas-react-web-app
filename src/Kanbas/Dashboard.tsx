import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1000/Home">
                        <img src="/images/fundies.jpg" width={200} />
                        <div>
                            <h5>
                                CS1000 Fundies
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fundimentals of Computer Science
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/4550/Home">
                        <img src="/images/wd.jpg" width={200} />
                        <div>
                            <h5>
                                CS4550 Web Dev
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Web Development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1500/Home">
                        <img src="/images/ca.jpg" width={200} />
                        <div>
                            <h5>
                                CA1500 Intro to Culinary
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to the Culinary Arts
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/4000/Home">
                        <img src="/images/ood.jpg" width={200} />
                        <div>
                            <h5>
                                CS4000 OOD
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Object Oriented Design
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/4500/Home">
                        <img src="/images/pl.jpeg" width={200} />
                        <div>
                            <h5>
                                CS4500 PL
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Programming Languages
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/3220/Home">
                        <img src="/images/eece.jpeg" width={200} />
                        <div>
                            <h5>
                                EECE3220 Digital Design
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fundimentals of Digital Design and Computer Orginization
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
