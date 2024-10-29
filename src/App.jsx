import { BrowserRouter, Routes, Route } from "react-router-dom"
import BadgeDemo from "./Demo/pages/BadgeDemo"
import BannerDemo from "./Demo/pages/BannerDemo"
import CardDemo from "./Demo/pages/CardDemo"
import TestimonialDemo from "./Demo/pages/TestimonialDemo"
import Home from "./Demo/pages/Home"
import Layout from "./Demo/Layout"
import NotFound from "./Demo/pages/404"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="badge" element={<BadgeDemo />}/>
                    <Route path="banner" element={<BannerDemo />}/>
                    <Route path="card" element={<CardDemo />} />
                    <Route path="testimonial" element={<TestimonialDemo />}/>
                </Route>
                <Route path="*" element={ <NotFound /> }/> 
            </Routes>
        </BrowserRouter>
    )
}