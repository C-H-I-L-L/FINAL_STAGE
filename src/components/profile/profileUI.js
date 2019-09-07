import React, { Component } from 'react';


class ProfileUI extends Component {
  render() {
    return (
      <div class='rawr'>
          <div class='left-side'>
            <h3>about me goes over here</h3>
            <hr />

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
            <p>video goes here</p>
            {/* <renderVideo /> */}
          </div>

          </div>

          <div class='right-side'>

            <p>oh no, we're not in bikini bottom anymore</p>
            <hr />
          </div>
      </div>
    );
  }
}

export default ProfileUI;