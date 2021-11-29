import React from 'react'
import Particles from 'react-particles-js';

function ParticlesComponenet() {
    return (
        <div style={{ backgroundColor: '#000' }}>
        <Particles
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }}
        />
      </div>
    )
}

export default ParticlesComponenet;
