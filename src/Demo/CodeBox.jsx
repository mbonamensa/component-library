import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';
import { FaRegClipboard } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"

export default function CodeBox({code}) {
    const [showCopied, setShowCopied] = useState(false)
    const { contextSafe } = useGSAP()   

    useEffect(() => {
        Prism.highlightAll()
    }, [code])

    const fadeInOut =  contextSafe(() => {
        gsap.fromTo(".copied", 
        {opacity: 0}, 
        {
            opacity: 1,
            onComplete: () => {
            setTimeout(() => { 
                gsap.to(".copied", {opacity: 0})
            }, 3000);
            }
        })
    })

    const copyToClipboard = () => {
        const textarea = document.createElement('textarea');
        textarea.style.height = 0
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        setShowCopied(true)
        fadeInOut()
    
    };

    useEffect(() => {
        if (showCopied) {
            setTimeout(() => {
                setShowCopied(false)
            }, 2500);
        }
    }, [showCopied])



    return (
        <div className="code-box-wrapper">
            <div className="copy-container">
            <span className={`copied ${showCopied ? "show" : ""}`}>Copied!</span>
            <div className="copy" title="Copy Code" onClick={copyToClipboard}>
                <FaRegClipboard />
            </div>
            </div>
            <pre>
                <code className={`language-jsx`}>
                    {code}
                </code>
            </pre>
        </div>
    )
}