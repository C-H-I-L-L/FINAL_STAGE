import React, { Component } from 'react';
import PlayVid from './playVid';
import Courage from '../../../static/assets/courage.png';


class ProfileUI extends Component {
  render() {
    return (
      <div class='rawr'>
          <div class='left-side'>
            <img src={Courage} alt='Courage the Cowardly Dog' />
            {/* <hr /> */}

            <p> Favorite genre to play: Djent Metal </p>

            <p>
              Instruments played:  Guitar (13yrs) <br />
                                    Vocals [clean] (10 years) <br />
                                    Vocals [growls/screams] (8 years) <br />
            </p>

            <p>
              Anything else? || Can play violin. Not well, but I can do it lol.
            </p>
            
          </div>

          <div class='middle-side'>

            <div class ='content'>
              <h2>Music</h2>
              <PlayVid />
            </div>

          </div>

          <div class='right-side'>

            <h3>Contact</h3>
            {/* <hr /> */}
          </div>
      </div>
    );
  }
}

export default ProfileUI;