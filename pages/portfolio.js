import { useState } from "react";
import Layout from "../component/layout";
import PortfolioView from "../component/portfolio/portfolio-view";
import portfolioData from "../component/portfolio/portfolio-data.json"
import ImageList from "../component/portfolio/image-list";

export default function Portfolio() {
    const projects = portfolioData.projects
    const [index, setIndex] = useState(0)
    const handleItemClick = (newIndex) => {
        setIndex((prevIndex) => projects[newIndex] ? newIndex : prevIndex)
    }
    return (
        <Layout>
            <div id="portfolios">
                <PortfolioView projects={projects} projectIndex={index} handleItemClick={handleItemClick} />
                <ImageList detail={false} projects={projects} projectIndex={index} handleItemClick={handleItemClick} />
            </div>
        </Layout>
    )
}
