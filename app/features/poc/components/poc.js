import _ from 'lodash';
import React from 'react';
import {createTimeline, helpers} from 'animated-timeline';
import {compose, withHandlers} from 'recompose';

import {PLAYLIST} from '../data';

// render
const Card = ({getRef}) => (
  <div
    className="card"
    ref={getRef}
    style={{backgroundColor: PLAYLIST[0].color}}
  />
);

// build animation
const steps = _.take(PLAYLIST, PLAYLIST.length - 1);

const t = createTimeline({
  easing: 'easeOutSine',
});

const animate = ref => {
  const animations = steps.map((x, i) => {
    const next = PLAYLIST[i + 1];

    return t.animate({
      el: ref,
      backgroundColor: helpers.transition({
        from: x.color,
        to: next.color,
      }),
      offset: helpers.startAfter(x.duration),
    });
  });

  t.sequence(animations).start();
};

// compose
export default compose(
  withHandlers({
    getRef: () => ref => {
      animate(ref);
    },
  }),
)(Card);
