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
  Text,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import CodeSlide from 'spectacle-code-slide';
import Tree from './components/Tree.jsx';
import DottedNode from './components/DottedNode.jsx';
import FilledNode from './components/FilledNode.jsx';
import ImageNode from './components/ImageNode.jsx';

import HelloMessage from './components/HelloMessage.jsx';
import Timer from './components/Timer.jsx';

import renderTree from './renderTree';
import higherLevel from './higherLevel';

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
  screenshots: {
    one: require('../assets/screenshot1.png'),
    two: require('../assets/screenshot2.png'),
    three: require('../assets/screenshot3.png'),
    four: require('../assets/screenshot4.png')
  },
  monocleFile: require('../assets/monocle_file.svg'),
  arrow: require('../assets/arrow.svg'),
  wrapperSnippet: require('../assets/wrapper_snippet.svg'),
  stateSyncBefore: require('../assets/statesync_before.png'),
  stateSyncAfter: require('../assets/statesync_after.png'),
  redArrow: require('../assets/arrow.png')
};

preloader(images);


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
        <Deck transition={["slide"]} transitionDuration={500} progress="none">
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
            <Image style={{ position: 'absolute', top: -300, left: 375 }} width="25%" src={images.reactLogo} />
            <Appear>
              <div>
                <Image style={{ position: 'absolute', top: -50, left: 25 }} width="35%" src={images.componentsFinal} />
                <Text textColor="white" style={{ position: 'absolute', top: 265, left: 20 }}>Components-Based</Text>
                <Image style={{ position: 'absolute', top: -90, left: 550 }} width="45%" src={images.unidirectional} />
                <Text textColor="white" style={{ position: 'absolute', top: 265, left: 550 }}>Unidirectional Data Flow</Text>
              </div>
            </Appear>
          </Slide>
          <Slide transition="fade">
            <Text 
              textColor="white"
              style={{ 
                position: 'absolute',
                top: -250,
                left: 250
              }}>Components may have <S type="italic">props</S></Text>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example/HelloMessage.example")}
              margin="20px"
              style={{ 
                minWidth: "500px", 
                maxWidth: "500px",
                position: 'absolute',
                top: -50,
                left: 25
               }}
            />
            <HelloMessage name="Mike" />
          </Slide>
          <Slide transition="fade">
            <Text textColor="white">Components may have <S type="italic">state</S></Text>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example/Timer.example")}
              margin="20px"
              style={{ minWidth: "600px", maxWidth: "600px" }}
            />
            <Timer />
          </Slide>
          <Slide transition="fade">
            <Image width="50%" style={{ float: 'right' }} src={images.instagramSnippets.instagramApp} />
            <Appear style={{ position: 'absolute', top: 40, left: 492}}><Image width="47.5%" src={images.instagramBoxes.two} /></Appear>
            <Appear style={{ position: 'absolute', top: 0, left: -100, border: '5px solid #0DEC10' }}><Image src={images.instagramSnippets.postContainer} /></Appear>
            <Appear style={{ position: 'absolute', top: 110, left: 527}}><Image width="40%" src={images.instagramBoxes.one} /></Appear>
            <Appear style={{ position: 'absolute', top: 100, left: 0, border: '5px solid #EB5757' }}><Image src={images.instagramSnippets.post} /></Appear>
            <Appear style={{ position: 'absolute', top: 115, left: 505}}><Image width="45.5%" src={images.instagramBoxes.three} /></Appear>
            <Appear style={{ position: 'absolute', top: 200, left: 100, border: '5px solid #ECED2B' }}><Image src={images.instagramSnippets.postHeader} /></Appear>
            <Appear style={{ position: 'absolute', top: 452, left: 507}}><Image width="43.5%" src={images.instagramBoxes.four} /></Appear>
            <Appear style={{ position: 'absolute', top: 50, left: -50, border: '5px solid #2F80ED' }}><Image src={images.instagramSnippets.commentContainer} /></Appear>
            <Appear style={{ position: 'absolute', top: 590, left: 525}}><Image width="40.5%" src={images.instagramBoxes.five} /></Appear>
            <Appear style={{ position: 'absolute', top: 150, left: 50, border: '5px solid #BB6BD9' }}><Image src={images.instagramSnippets.commentBox} /></Appear>
          </Slide>
          <Slide transition="fade">
              <Image src={images.textLogo} margin="10px auto 20px" height="300px"/>
          </Slide>
          <CodeSlide
            transition={['fade']}
            code={require('raw!../assets/deck.example')}
            lang="jsx"
            ranges={[
              { loc: [0, 10], note: 'ES2015 React Component'},
              { loc: [0, 1], note: 'Component Name'},
              { loc: [10, 15], note: 'Methods' },
              { loc: [19, 24], note: 'Props and Children' },
            ]}
          />
          <CodeSlide
            transition={['fade']}
            code={require('raw!../assets/ast.example')}
            lang="js"
            ranges={[
              { loc: [0, 1], note: 'Abstract Syntax Tree'},
              { loc: [5, 15], note: 'Component Name'},
              { loc: [233, 243], note: 'Methods' },
              { loc: [519, 525], note: 'Children'},
              { loc: [395, 405], note: 'Props'},
              { loc: [440, 450], note: 'More Props'},
              { loc: [485, 495], note: 'Even More Props'},
            ]}
          />
          <CodeSlide
            transition={['fade']}
            code={require('raw!../assets/formatted.example')}
            lang="js"
            ranges={[
              { loc: [0, 1], note: 'Formatted Object'},
              { loc: [2, 3], note: 'Component Name'},
              { loc: [3, 4], note: 'Methods' },
              { loc: [5, 10], note: 'Children'},
              { loc: [10, 15], note: 'Props'},
              { loc: [15, 20], note: 'More Props'},
              { loc: [20, 25], note: 'Even More Props'},
            ]}
          />
          <Slide>
            <Image style={{ position: 'absolute', top: -100, left: 50 }} width="25%" src={images.monocleFile} />
            <Text textColor="white" style={{ position: 'absolute', top: 200 }}>Developer App</Text>
            <Image style={{ position: 'absolute', top: 0, left: 400 }} src={ images.arrow } width="25%" />
            <Image style={{ position: 'absolute', top: -75, left: 700 }} width="30%" src={images.monocleLogo} />
            <Text textColor="white" style={{ position: 'absolute', top: 200, left: 750 }}>Monocle</Text>
          </Slide>
          <Slide transition={["fade"]}>
            <Image style={{ position: 'absolute', top: -100, left: 50 }} width="25%" src={images.monocleFile} />
            <Text textColor="white" style={{ position: 'absolute', top: 200 }}>Developer App</Text>
            <Image style={{ position: 'absolute', top: -350, left: 100 }} src={images.wrapperSnippet} width="100%" />
            <Image style={{ position: 'absolute', top: -250, left: 582, border: '1px solid grey' }} width="40%" src={ images.stateSyncBefore } />
            <Image style={{ position: 'absolute', top: 110, left: 582, border: '1px solid grey' }} width="40%" src={ images.stateSyncAfter } />
          </Slide>
          <Slide>
            <Image style={{ position: 'absolute', top: -110, left: 50 }} width="25%" src={images.monocleFile} />
            <Text textColor="white" style={{ position: 'absolute', top: 200 }}>Developer App</Text>
            <Image style={{ position: 'absolute', top: -75, left: 700 }} width="30%" src={images.monocleLogo} />
            <Text textColor="white" style={{ position: 'absolute', top: 200, left: 750 }}>Monocle</Text>
            <Appear>
              <div>
                <Image style={{ position: 'absolute', top: -50, left: 420 }} src={ images.reduxLogo } width="20%" />
                <Text textColor="#7949b8" style={{ position: 'absolute', top: 200, left: 475 }}>Redux</Text>
              </div>
            </Appear>
          </Slide>
          <Slide transition={['fade']}>
            <Heading textSize={50}>NODE POSITIONING (D3)</Heading>
            <Tree treeInfo={renderTree}>
              <DottedNode />
            </Tree>
          </Slide>
          <Slide transition={['fade']}>
            <Heading textSize={50}>NODE RENDERING (REACT)</Heading>
            <Tree treeInfo={renderTree}>
              <FilledNode />
            </Tree>
          </Slide>
          <Slide transition={['fade']}>
            <Heading textSize={50}>LINK RENDERING (D3)</Heading>
            <Tree treeInfo={renderTree} links>
              <FilledNode />
            </Tree>
          </Slide>
          <Slide>
            <Appear style={{ position: 'absolute', top: -200, left: -100, border: '1px solid #EEEEEE'}}><Image width="60%" src={images.screenshots.one} /></Appear>
            <Appear style={{ position: 'absolute', top: -275, left: 480, border: '1px solid #EEEEEE'}}><Image width="60%" src={images.screenshots.two} /></Appear>
            <Appear style={{ position: 'absolute', top: -300, left: 125, border: '1px solid #EEEEEE'}}><Image width="70%" src={images.screenshots.three} /></Appear>
            <Appear style={{ position: 'absolute', top: -260, left: 75, border: '1px solid #EEEEEE'}}><Image width="80%" src={images.screenshots.four} /></Appear>
            <Appear style={{ position: 'absolute', top: -220, left: 190, transform: 'rotate(187deg)'}}><Image width="9%" src={images.redArrow} /></Appear>
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
};




          // <Slide>
          //   <Tree
          //     treeInfo={higherLevel}
          //     nodeW={170}
          //     nodeH={170}
          //     reverse
          //     links
          //   >
          //     <ImageNode />
          //   </Tree>
          // </Slide>