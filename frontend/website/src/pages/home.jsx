import Navbar from "../components/navbar"
import Card from "../components/cards"
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import api from "../api/axios.js"

function Home(){
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        api.get("projects/")
           .then((res)=> setProjects(res.data))
           .catch((err)=>console.error(err))
    },[])
    return(
        <>
        {/* Navbar */}
          <div>
            <Navbar/>
          </div>  
        {/* Projects Card */}
        <div className="px-8 py-8">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-700">
                    Featured Projects
                </h2>
                <Link
                    to="/projects"
                    className="font-medium text-pink-500 hover:text-pink-600"
                    >
                See More →
                </Link>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project=>(
                <Card
                key={project.id}
                project={project}
                />
            ))
        }
        </div>
        {/* Blogs Card */}
        {/* <div className="px-8 py-8">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-700">
                    Featured Blogs
                </h2>
                <Link
                    to="/projects"
                    className="font-medium text-pink-500 hover:text-pink-600"
                    >
                See More →
                </Link>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card/>
            <Card/>
            <Card/>
        </div> */}
        </>
    )
}

export default Home