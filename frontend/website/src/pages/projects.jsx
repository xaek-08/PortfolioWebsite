import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react"; 
import api from "../api/axios";

function ProjectsPage(){
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        api.get('/projects').catch
        then()
    },[])
    return(
        <>
            <Navbar/>
        </>
    )
}

export default ProjectsPage