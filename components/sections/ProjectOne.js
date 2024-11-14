import React from 'react';
import ProjectSlider from '../slider/ProjectSlider';

const ProjectOne = ({ addClass }) => {
    return (
        <>
            <section className={`project-section pb-0 ${addClass}`}>
                <div className="auto-container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="sub-title"></span>
                                <h2>High quality products &amp; services That we stand behind</h2>
                            </div>
                            <div className="col-lg-5">
                                <div className="text">There are many variations of passages of available but majority have suffered alteration in some form, by humou or randomised words which don&apos;t look even slightly believable.</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSlider />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectOne;