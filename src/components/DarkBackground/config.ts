import { IParticlesParams } from "react-particles-js";

export const params: IParticlesParams = {
    "particles": {
        color: {
            value: "#fff"
        },
        "number": {
            "value": 2000,
            "density": {
                "enable": true,
                "value_area": 5000
            }
        },
        "line_linked": {
            "enable": false,
            "opacity": 0.02
        },
        "move": {
            "direction": "top-right",
            "speed": 0.1
        },
        "size": {
            random: true,
            anim: {
                size_min: 1,
                
            }
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}