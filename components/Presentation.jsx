import React from "react";



// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
// import Graph from './components/Graph.jsx';
import StateSync from './components/StateSync.jsx';
import gameTree from './gameTree';
import IFrame from './components/IFrame.jsx';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  monocleLogo: require('../assets/monocle_logo.svg'),
  textLogo: require('../assets/monocle_type_logo.svg'),
  reactLogo: require('../assets/react_logo.svg'),
  reduxLogo: require('../assets/redux.png'),
  npmLogo: require('../assets/npm-logo.svg'),
  ghLogo: require('../assets/github-logo.png'),
  monocleApp: require('../assets/monocle_app.png'),
  componentsFinal: require('../assets/components_final.svg'),
  unidirectional: require('../assets/unidirectional.svg'),
  instagramSnippets: {
    instagramApp: require('../assets/problem/InstagramApp.png'),
    commentBox: require('../assets/problem/CommentBox.png'),
    commentContainer: require('../assets/problem/CommentContainer.png'),
    post: require('../assets/problem/Post.png'),
    postContainer: require('../assets/problem/PostContainer.png'),
    postHeader: require('../assets/problem/PostHeader.png'),
  },
  instagramBoxes: {
    one: require('../assets/ig_1.svg'),
    two: require('../assets/ig_2.svg'),
    three: require('../assets/ig_3.svg'),
    four: require('../assets/ig_4.svg'),
    five: require('../assets/ig_5.svg'),
  },
  monocleFile: require('../assets/monocle_file.svg'),
  arrow: require('../assets/arrow.svg'),
  wrapperSnippet: require('../assets/wrapper_snippet.svg'),
  stateSyncBefore: require('../assets/statesync_before.png'),
  stateSyncAfter: require('../assets/statesync_after.png')
};

const theme = createTheme({
  primary: "#3498DB"
},
{
  primary: 'Roboto'
});
            // <Appear style={{ position: 'absolute', top: 150, left: 480,}}><Image width= "50%" height="1000px" src={images.instagramBoxes.one} /></Appear>

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition="slide" transitionDuration={500} progress="none">
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
            react monocle
            </Heading>
            <Text size={1} fit textColor ="black">
              a hierarchical representation of your code
            </Text>
            <Heading size={2} caps textColor="white" textSize={50}>
              made for <span style={{color: '#61DAFB'}}>ReactJS</span>
            </Heading>
            <Text textColor="black" textSize="24">created by: michael-bryant choa, jenna davis, and jerry mao</Text>
          </Slide>
          <Slide transition="fade">
            <Image width="40%" height="40%" src={images.reactLogo} />
          </Slide>
          <Slide transition="fade">
            <Image style={{ position: 'absolute', top: -100, left: 0 }} width="40%" src={images.componentsFinal} />
            <Image style={{ position: 'absolute', top: -150, left: 500 }} width="50%" src={images.unidirectional} />
            <Text textColor="white" style={{ position: 'absolute', top: 240, left: 20 }}>Components-Based</Text>
            <Text textColor="white" style={{ position: 'absolute', top: 240, left: 550 }}>Unidirection Data Flow</Text>
          </Slide>
          <Slide transition="fade">
            <Image width="50%" style={{ float: 'right' }} src={images.instagramSnippets.instagramApp} />
            
            <Appear style={{ position: 'absolute', top: 0, left: -100, border: '5px solid #0DEC10' }}><Image src={images.instagramSnippets.postContainer} /></Appear>
            <Appear style={{ position: 'absolute', top: 40, left: 492}}><Image width="47.5%" src={images.instagramBoxes.two} /></Appear>
            <Appear style={{ position: 'absolute', top: 100, left: 0, border: '5px solid #EB5757' }}><Image src={images.instagramSnippets.post} /></Appear>
            <Appear style={{ position: 'absolute', top: 110, left: 527}}><Image width="40%" src={images.instagramBoxes.one} /></Appear>
            <Appear style={{ position: 'absolute', top: 200, left: 100, border: '5px solid #ECED2B' }}><Image src={images.instagramSnippets.postHeader} /></Appear>
            <Appear style={{ position: 'absolute', top: 115, left: 505}}><Image width="45.5%" src={images.instagramBoxes.three} /></Appear>
            <Appear style={{ position: 'absolute', top: 50, left: -50, border: '5px solid #2F80ED' }}><Image src={images.instagramSnippets.commentContainer} /></Appear>
            <Appear style={{ position: 'absolute', top: 452, left: 507}}><Image width="43.5%" src={images.instagramBoxes.four} /></Appear>
            <Appear style={{ position: 'absolute', top: 150, left: 50, border: '5px solid #BB6BD9' }}><Image src={images.instagramSnippets.commentBox} /></Appear>
            <Appear style={{ position: 'absolute', top: 590, left: 525}}><Image width="40.5%" src={images.instagramBoxes.five} /></Appear>
          </Slide>
          <Slide transition="fade">
              <Image src={images.textLogo} margin="10px auto 20px" height="300px"/>
          </Slide>
          <Slide>
            <Image style={{ position: 'absolute', top: -100, left: 50 }} width="25%" src={images.monocleFile} />
            <Image style={{ position: 'absolute', top: 0, left: 400 }} src={ images.arrow } width="25%" />
            <Image style={{ position: 'absolute', top: -75, left: 700 }} width="30%" src={images.monocleLogo} />
          </Slide>
          <Slide transition="fade">
            <Image style={{ position: 'absolute', top: -100, left: 50 }} width="25%" src={images.monocleFile} />
            <Image style={{ position: 'absolute', top: -350, left: 100 }} src={images.wrapperSnippet} width="100%" />
            <Image style={{ position: 'absolute', top: -250, left: 582, border: '1px solid grey' }} width="40%" src={ images.stateSyncBefore } />
            <Image style={{ position: 'absolute', top: 110, left: 582, border: '1px solid grey' }} width="40%" src={ images.stateSyncAfter } />
          </Slide>
          <Slide>
            <Image style={{ position: 'absolute', top: -100, left: 50 }} width="25%" src={images.monocleFile} />
            <Image style={{ position: 'absolute', top: -75, left: 700 }} width="30%" src={images.monocleLogo} />
            <Appear style={{ position: 'absolute', top: -50, left: 400 }}>
                <Image src={ images.reduxLogo } width="20%" />
            </Appear>
          </Slide>
          <Slide>
            <Heading caps>Check Us Out</Heading>
            <div style={{marginTop: 50}} >
              <div style={{display: 'flex', marginLeft: 200}}>
                <Image margin="5" padding="0" src={images.ghLogo} width="8%" height="8%" />
                <Text 
                  margin="10"
                  textColor="white" 
                  textAlign="right" 
                  textSize="24"
                  lineHeight="2">
                    github.com/team-gryff/react-monocle
                </Text>
              </div>  
              <div style={{display: 'flex', marginLeft: 200}}>
                <Image margin="8" padding="0" src={images.npmLogo} width="10%" height="10%"/>
                <Text 
                  margin="10"
                  textColor="white" 
                  textAlign="right" 
                  textSize="24">
                    npmjs.com/package/react-monocle
                </Text>  
              </div>
            </div>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}