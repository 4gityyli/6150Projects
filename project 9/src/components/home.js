import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= "https://s2.loli.net/2022/12/16/uEOYyAeNBgc4GkS.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Hello! It's Yuyan Li</h1>

            <hr/>

          <p> Python | Java | C++ | SQL | HTML/CSS | JavaScript | React </p>

        <div className="social-links">

          <a href="https://www.linkedin.com/in/yuyanlirenee/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a href="https://github.com/4gityyli" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          <a href="https://www.youtube.com/channel/UCCFoajVSpz0DUpVWKMagbgQ" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default home;
