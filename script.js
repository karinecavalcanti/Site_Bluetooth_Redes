tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00d2ff" 
        },
        links: {
            enable: true, 
            color: "#0051ff", 
            distance: 150, 
            opacity: 0.4,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 1.5, 
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "bounce" 
            }
        },
        size: {
            value: 3,
            random: true
        },
        opacity: {
            value: 0.5
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab" 
            },
            onClick: {
                enable: true,
                mode: "push" 
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                links: {
                    opacity: 0.8
                }
            },
            push: {
                quantity: 4
            }
        }
    },
    detectRetina: true
});