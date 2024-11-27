import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HeroSectionForm from "../components/HeroSectionForm"
import SideBarNav from "../components/SideBarNav"
import AboutUsForm from "../components/AboutUsForm"
import WhatWeDoForm from "../components/WhatWeDoForm"
import ActivitiesForm from "../components/ActivitiesForm"
import EventsForm from "../components/EventsForm"
import PublicationsForm from "../components/PublicationsForm"
import ClubForm from "../components/ClubForm"
import DistrictForm from "../components/DistrictForm"

const Home = () => {
    const router = createBrowserRouter([
        {path: '/', element: <SideBarNav />, children: [
            {index: true, element: <HeroSectionForm />},
            {path: '/herosection', element: <HeroSectionForm />},
            {path: '/about-us', element: <AboutUsForm />},
            {path: '/what-we-do', element: <WhatWeDoForm />},
            {path: '/activities', element: <ActivitiesForm />},
            {path: 'events', element: <EventsForm />},
            {path: '/publications', element: <PublicationsForm />},
            {path: '/add-club', element: <ClubForm />},
            {path: '/add-district', element: <DistrictForm />},
            {element: <Notification />}
        ]}
    ])
    return(
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default Home;