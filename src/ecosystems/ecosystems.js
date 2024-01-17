import React from 'react';
import {
  Container,
  Collaborationwrapper,
  Propertieswrapper,
  Propertiesinnerwrapper,
  Leftsidebox,
  Headingmain,
  Textproperties,
  Rightsidesection,
  collabrationimagebox,
  Handimagebox,
  Collabrationimagefunctionbox,
  Imagebox,
  Creatorfuntions,
  Creatorwrapper,
} from './ecosystem.styled';

export const Taskfour = () => {
  return (
    <div>
      <Container>
        <Collaborationwrapper>
          <Propertieswrapper>
            <Propertiesinnerwrapper>
              <Leftsidebox>
                <Headingmain>
                  Get ready for seamless collaborations, with personalised
                  content and insights.
                </Headingmain>
                <Textproperties>
                  Spreadd is a decentralised ecosystem for creators economy
                  giving commercial mobility to brands, creators helping
                  accelerate their growth.
                </Textproperties>
              </Leftsidebox>

              <Rightsidesection>
                <collabrationimagebox>
                  <Handimagebox
                    src="https://spreadd.io/23139c22a9dbe19db52db946b5655757.jpg"
                    alt="hand-collab"
                  />
                </collabrationimagebox>
                <Collabrationimagefunctionbox>
                  <Imagebox
                    src="https://spreadd.io/97c4edf916b8ca47f84b658b2b139441.jpg"
                    alt="Talk-people"
                  />
                </Collabrationimagefunctionbox>
                <Creatorfuntions>
                  <Creatorwrapper>1.37k+ Creators</Creatorwrapper>
                </Creatorfuntions>
              </Rightsidesection>
            </Propertiesinnerwrapper>
          </Propertieswrapper>
        </Collaborationwrapper>
      </Container>
    </div>
  );
};
