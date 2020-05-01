import Particles, { HoverMode } from 'react-particles-js';

import React from 'react';

export const ParticleCanvas = () => (
  <Particles
    height={'400px'}
    params={{
      particles: {
        number: {
          value: 20,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: HoverMode.repulse,
          },
        },
      },
    }}
  />
);
