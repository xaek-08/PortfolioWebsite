import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import Card from "../components/cards";


const filters = ['All', 'LLMOps', 'Full Stack', 'Agents', 'RAG', 'Fine-Tuning']
function ProjectsPage() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        api.get('projects/')
            .then((res) => setProjects(res.data))
            .catch((err) => console.error(err))
    }, [])
    const [selectedFilter, setSelectedFilter] = useState("All")
    return (
        <>
            <Navbar />
            { /* hero-section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto">
                    <p className="uppercase tracking-widest text-sm text-gray-500">
                        Projects
                    </p>
                    <h1 className="mt-4 text-5xl font-bold">
                        Building AI Products,
                        <br />
                        Full-Stack Applications
                        <br />
                        & Experiments
                    </h1>
                    <p className="mt-6 text-lg text-gray-500">
                        A collection of projects exploring AI engineering,
                        backend systems, and modern web development
                    </p>
                </div>
            </section>

            {/* Filter bar */}
            <section className="flex justify-center gap-3 ">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={
                            selectedFilter == filter
                                ? "px-5 py-2 rounded-full bg-gray-900 text-white"
                                : "px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                        }
                    >
                        {filter}
                    </button>
                ))}
            </section>
            {/* Featured Section */}
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        project={project}
                    />
                ))}
            </section>

            {/* Grid Section 2 */}
        </>
    )
}

export default ProjectsPage