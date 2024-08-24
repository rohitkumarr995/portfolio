import React, { useEffect } from "react"
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import Loader from "../utils/loading"
const LazyHome = React.lazy(()=>import('../components/home'))
const LazyAbout = React.lazy(()=>import('../components/about'))
const LazyResume = React.lazy(()=>import('../components/resume'))
const LazyContact = React.lazy(()=>import('../components/contact'))
const LazyProjects = React.lazy(()=>import('../components/projects'))
const LazyNotFound = React.lazy(()=>import('../components/not-found'))

const AppRoutes = () =>{
    
    const location = useLocation();
    console.log(location.pathname);

    return(
        <Routes>
            <Route path="/home" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyHome/>
                </React.Suspense>
            }/>
            <Route path="/about" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyAbout/>
                </React.Suspense>
            }/>
            <Route path="/resume" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyResume/>
                </React.Suspense>
            }/>
            <Route path="/projects" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyProjects/>
                </React.Suspense>
            }/>
            <Route path="/contact" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyContact/>
                </React.Suspense>
            }/>
            <Route path="*" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyNotFound/>
                </React.Suspense>
            }/>
        </Routes>
    )
}

export default AppRoutes