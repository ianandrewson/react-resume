/* eslint-disable indent */
import React from 'react';
import styles from './Body.css';

export default function Body() {
  return (
    <div className={styles.body}>
      <h3>PROJECTS</h3>
        <dl>
          <dt>PI PARTY</dt>
            <dd>
              Team project: Database backed IoT raspberry pi project with multifactor authentication.
            </dd>
          <dt>FRONTPAGE</dt>
            <dd>
            Team project: Tinder style news aggregation app featuring favorited articles and publisher filters.
            </dd>
          <dt>SUPREME COURT DATABASE</dt>
            <dd>
            Solo project: Database project of Supreme Court cases with a focus on aggregation.
            </dd>
          <dt>OFFBEAT</dt>
            <dd>
            Team project: Metronome / Sampler with user pattern saving and recall.
            </dd>
          <dt>CREATIVE CODE SKETCHES</dt>
            <dd>
            Solo projects: Various visual art projects realized with Processing enviornment.
            </dd>
        </dl>
      <h3>EDUCATIONAL HISTORY</h3>
        <dl>
          <dt>ALCHEMY CODE LAB - PORTLAND, OR</dt>
            <dd>
            Full stack software development
            </dd>
          <dt>PERFORMER'S HOUSE - SILKEBORG, DENMARK</dt>
            <dd>
              Interdiscplinary performing arts school
            </dd>
          <dt>PYRAMIND - SAN FRANCISCO, CA</dt>
            <dd>
              Audio engineering and production school
            </dd>
          <dt>UNIVERISTY OF CALIFORNIA - SANTA CRUZ</dt>
            <dd>
            School of Engineering - Bioengineering
            </dd>
        </dl>
      <h3>WORK HISTORY</h3>
        <dl>
          <dt>OMW CORPORATION - 2017-PRESENT</dt>
            <dd>
              QA Technician - Precision CNC manufacturer
            </dd>
          <dt>BLUESMASTERS LLC - 2017</dt>
            <dd>
              Archiving and preservation project for a Grammy and WC Handy Award winning producer.
            </dd>
          <dt>MAD MIDI COLLECTIVE - 2012-2015</dt>
            <dd>
            Owner / Chief Studio Technician - Self started music collective and studio focused on collaboration and community.
            </dd>
        </dl>
    </div>
  );
}
