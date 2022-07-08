import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import aris from '../../../../images/aris.jpg';
import ccm from '../../../../images/ccm.jpg';
import timeflip from '../../../../images/timeflip.jpg';
import ipCamera from '../../../../images/ip-camera.jpg';

import { Carousel } from 'react-responsive-carousel';
import { ProjectsContainer } from './style';

const Projects = () => {

    return <ProjectsContainer>
        <Carousel width={800} centerMode={true} centerSlidePercentage={90} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={aris} />
                <p className="legend">Песочница</p>
            </div>
            <div>
                <img src={ccm} />
                <p className="legend">ЦКМ</p>
            </div>
            <div>
                <img src={timeflip} />
                <p className="legend">TimeFlip</p>
            </div>
            <div>
                <img src={ipCamera} />
                <p className="legend">IP-Камера</p>
            </div>
        </Carousel>
    </ProjectsContainer>
};

export default Projects;