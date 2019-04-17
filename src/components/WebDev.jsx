import React from 'react';

const styles = {
  margin: {
    marginBottom: 30
  }
}

const WebDev = () => {
  return (
    <section>
      <h2>Web Development</h2>
      <h4>Aon Cyber Solutions</h4>
      <p>Software Developer</p>
      <div style={styles.margin}>
        <a href="https://www.aon.com/cyber-solutions">Aon Cyber</a>
      </div>

      <h4>Human Interaction</h4>
      <p>Web dev / Founder / UX/UI Designer</p>
      <div>
        <a href="http://hinteraction.com">hinteraction.com</a> /
        <a href="https://github.com/olegchursin">GitHub</a>
      </div>
    </section>
  );
};

export default WebDev;