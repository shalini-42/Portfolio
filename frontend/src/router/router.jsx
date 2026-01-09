import {createBrowserRouter, Router} from 'react-router-dom';
import App from '../App';

import SkillCard from '../components/SkillCard/SkillCard';
import Project from '../components/Project/Project';
import Contact from '../components/Contact';
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail';
import HomePage from '../pages/Home/HomePage';

const my_router = createBrowserRouter(
    [
        {
            element:<App/>,
            children: [
                {
                    path: '/',
                    element:<HomePage/>
                },
                {
                    path: '/skillcard',
                    element:<SkillCard/>
                },
                {
                    path: '/project',
                    element:<Project/>
                },
                
                {
                    path: '/contact',
                    element:<Contact/>
                },
                {
                    path:'/project/:id',
                    element:<ProjectDetail/>
                }
            ]
        }
    ]
)
export default my_router;