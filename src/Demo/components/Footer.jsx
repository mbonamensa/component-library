import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer-wrapper">
            <footer>
                <p>Created by <strong>devMaame</strong></p> 
                <a className="footer-icon-link" href="https://x.com/devMaame" target="_blank"><FaTwitter /></a> 
                <a className="footer-icon-link" href="https://github.com/mbonamensa" target="_blank"><FaGithub /></a>
            </footer>
        </div>
    )
}