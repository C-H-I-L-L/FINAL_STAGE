import React, { Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export default class App extends Component {
  render() {
    return (
      <div id="example"></div>
<script type="text/babel">
    let Image = cloudinaryReact.Image;
    ReactDOM.render(
            <div>
                <h1>Hello, world!</h1>
                <Image cloudName="demo" publicId="sample" width="300" crop="scale"/>
                 { /* or using the namespace cloudinaryReact */ }
                <cloudinaryReact.CloudinaryContext cloudName="demo">
                    <cloudinaryReact.Image publicId="sample">
                        <cloudinaryReact.Transformation width="200" crop="scale" angle="10"/>
                    </cloudinaryReact.Image>
                </cloudinaryReact.CloudinaryContext>
            </div>,
            document.getElementById('example')
    );
</script>
    );
  }
}