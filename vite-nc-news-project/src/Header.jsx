//import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { motion } from "framer-motion"
import './styles.css'

const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0,
        
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
    },
}
}
const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 20,
        transition: {
            duration: 0.25,
            when: "afterChildren",
        },
    },
};
const text = {
    initial: {
        y: 40,
        fill: "white",
    },
    animate: {
        y: 80,
        fill: "url(#pattern)",
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};


<motion.svg variants={textContainer} className="absolute z-50 flex"></motion.svg>
export default function Header () {
    //const { user } = useContext(UserContext)
    return (
        <motion.div
            style={{
                position: 'absolute',
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: 'black',
            }}
            initial="initial"
            animate="animate"
            variants={blackBox}
        >
            <svg
                style={{
                    position: 'absolute',
                    zIndex: 50,
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                }}
            >
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    style={{ color: 'white' }}
                >
                    <rect style={{ width: '100%', height: '100%', fill: 'current' }} />
                    <rect style={{ width: '100%', height: '100%', fill: 'LightGray' }} />
                </pattern>
                <text
                    x="50%"
                    y="50%"
                    style={{
                        fontSize: '4em',
                        fontWeight: 'bold',
                        textAnchor: 'middle',
                        fill: 'url(#pattern)',
                    }}
                    variants={text}
                    initial="initial"
                    animate="animate"
                >
                    NC NEWS
                </text>
            </svg>
        </motion.div>
    )

}



//relative z - 50 w - full bg - black opacity - 0.5