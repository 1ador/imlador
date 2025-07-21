import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function WorkProjectPage() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) return <div>Project not found</div>;

    return (
        <div className="page-wrapper worksub">
            <header className="worksub-header">
                <figure>
                    <img alt="Portfolio." loading="eager" src={project.image.hero} />
                </figure>
                <header className="heading-wrapper">
                    <h1 className="top-heading ">{project.title}</h1>
                    <div className="heading-divider "></div>
                </header>
                <div className="worksub-intro ">
                    <div className="intro-content">
                        <div className="intro-left">
                            <div className="intro-left-group">
                                <span className="round-label text-medium">Date</span>
                                <p>{project.date}</p>
                            </div>
                            <div className="intro-left-group">
                                <span className="round-label text-medium">Roles</span>
                                <div className="intro-left-list">
                                    <p>{project.role}</p>
                                </div>
                            </div>
                        </div>
                        <p>{project.description}</p>
                    </div>
                    <div className="worksub-divider"></div>
                </div>
            </header>

            <div className="worksub-info ">
                <section>
                    <div className="section-heading-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22.9843 11.5497C17.6237 11.5497 14.9327 11.5497 13.6913 10.3086C12.4498 9.06751 12.4498 6.37659 12.4498 1.01563C12.4498 0.896356 12.4025 0.781971 12.3181 0.697634C12.2338 0.613298 12.1194 0.565918 12.0001 0.565918C11.8809 0.565918 11.7665 0.613298 11.6821 0.697634C11.5978 0.781971 11.5504 0.896356 11.5504 1.01563C11.5504 6.37663 11.5504 9.06751 10.309 10.3086C9.06751 11.5497 6.37659 11.5497 1.01599 11.5497C0.896626 11.5497 0.782147 11.5971 0.697742 11.6815C0.613336 11.7659 0.565918 11.8804 0.565918 11.9998C0.565918 12.1191 0.613336 12.2336 0.697742 12.318C0.782147 12.4024 0.896626 12.4498 1.01599 12.4498C6.37659 12.4498 9.06751 12.4498 10.309 13.6909C11.5504 14.9324 11.5504 17.6233 11.5504 22.9839C11.5504 23.1032 11.5978 23.2175 11.6821 23.3019C11.7665 23.3862 11.8809 23.4336 12.0001 23.4336C12.1194 23.4336 12.2338 23.3862 12.3181 23.3019C12.4025 23.2175 12.4498 23.1032 12.4498 22.9839C12.4498 17.6233 12.4498 14.9324 13.6913 13.6909C14.9327 12.4498 17.6237 12.4498 22.9843 12.4498C23.1036 12.4498 23.2181 12.4024 23.3025 12.318C23.3869 12.2336 23.4343 12.1191 23.4343 11.9998C23.4343 11.8804 23.3869 11.7659 23.3025 11.6815C23.2181 11.5971 23.1036 11.5497 22.9843 11.5497Z"></path>
                        </svg>
                        <h2>System Architecture</h2>
                    </div>
                    <figure className="single-img-wrapper">
                        <img alt="Portfolio brand guidelines cover." loading="eager" src={project.image.tech} />
                    </figure>
                </section>

                {project.hasMobileView && project.image.mobile && (
                    <section>
                        <div className="section-heading-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M22.9843 11.5497C17.6237 11.5497 14.9327 11.5497 13.6913 10.3086C12.4498 9.06751 12.4498 6.37659 12.4498 1.01563C12.4498 0.896356 12.4025 0.781971 12.3181 0.697634C12.2338 0.613298 12.1194 0.565918 12.0001 0.565918C11.8809 0.565918 11.7665 0.613298 11.6821 0.697634C11.5978 0.781971 11.5504 0.896356 11.5504 1.01563C11.5504 6.37663 11.5504 9.06751 10.309 10.3086C9.06751 11.5497 6.37659 11.5497 1.01599 11.5497C0.896626 11.5497 0.782147 11.5971 0.697742 11.6815C0.613336 11.7659 0.565918 11.8804 0.565918 11.9998C0.565918 12.1191 0.613336 12.2336 0.697742 12.318C0.782147 12.4024 0.896626 12.4498 1.01599 12.4498C6.37659 12.4498 9.06751 12.4498 10.309 13.6909C11.5504 14.9324 11.5504 17.6233 11.5504 22.9839C11.5504 23.1032 11.5978 23.2175 11.6821 23.3019C11.7665 23.3862 11.8809 23.4336 12.0001 23.4336C12.1194 23.4336 12.2338 23.3862 12.3181 23.3019C12.4025 23.2175 12.4498 23.1032 12.4498 22.9839C12.4498 17.6233 12.4498 14.9324 13.6913 13.6909C14.9327 12.4498 17.6237 12.4498 22.9843 12.4498C23.1036 12.4498 23.2181 12.4024 23.3025 12.318C23.3869 12.2336 23.4343 12.1191 23.4343 11.9998C23.4343 11.8804 23.3869 11.7659 23.3025 11.6815C23.2181 11.5971 23.1036 11.5497 22.9843 11.5497Z"></path>
                            </svg>
                            <h2>Mobile User Interface</h2>
                        </div>
                        <figure className="double-img-wrapper">
                            {project.image.mobile.slice(0, 2).map((img, index) => (
                                <div key={`first-${index}`}>
                                    <img
                                        className="phone-screen"
                                        alt={`Mobile screen ${index + 1}`}
                                        loading="eager"
                                        src={img}
                                    />
                                </div>
                            ))}
                        </figure>

                        <figure className="double-img-wrapper">
                            {project.image.mobile.slice(2, 4).map((img, index) => (
                                <div key={`second-${index}`}>
                                    <img
                                        className="phone-screen"
                                        alt={`Mobile screen ${index + 3}`}
                                        loading="eager"
                                        src={img}
                                    />
                                </div>
                            ))}
                        </figure>
                    </section>
                )}

                <section>
                    <div className="section-heading-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22.9843 11.5497C17.6237 11.5497 14.9327 11.5497 13.6913 10.3086C12.4498 9.06751 12.4498 6.37659 12.4498 1.01563C12.4498 0.896356 12.4025 0.781971 12.3181 0.697634C12.2338 0.613298 12.1194 0.565918 12.0001 0.565918C11.8809 0.565918 11.7665 0.613298 11.6821 0.697634C11.5978 0.781971 11.5504 0.896356 11.5504 1.01563C11.5504 6.37663 11.5504 9.06751 10.309 10.3086C9.06751 11.5497 6.37659 11.5497 1.01599 11.5497C0.896626 11.5497 0.782147 11.5971 0.697742 11.6815C0.613336 11.7659 0.565918 11.8804 0.565918 11.9998C0.565918 12.1191 0.613336 12.2336 0.697742 12.318C0.782147 12.4024 0.896626 12.4498 1.01599 12.4498C6.37659 12.4498 9.06751 12.4498 10.309 13.6909C11.5504 14.9324 11.5504 17.6233 11.5504 22.9839C11.5504 23.1032 11.5978 23.2175 11.6821 23.3019C11.7665 23.3862 11.8809 23.4336 12.0001 23.4336C12.1194 23.4336 12.2338 23.3862 12.3181 23.3019C12.4025 23.2175 12.4498 23.1032 12.4498 22.9839C12.4498 17.6233 12.4498 14.9324 13.6913 13.6909C14.9327 12.4498 17.6237 12.4498 22.9843 12.4498C23.1036 12.4498 23.2181 12.4024 23.3025 12.318C23.3869 12.2336 23.4343 12.1191 23.4343 11.9998C23.4343 11.8804 23.3869 11.7659 23.3025 11.6815C23.2181 11.5971 23.1036 11.5497 22.9843 11.5497Z"></path>
                        </svg>
                        <h2>Landing Page</h2>
                    </div>
                    <figure className="single-img-wrapper">
                        <img alt="Portfolio Table of Contents." loading="eager" src={project.image.landing} />
                    </figure>
                </section>
            </div>

        </div>



    );
}
