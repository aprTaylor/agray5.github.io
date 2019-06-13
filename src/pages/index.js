import React, { Component } from 'react'

//Depends
import styled from 'styled-components';
import Img from "gatsby-image"
import withSizes from 'react-sizes'
import Container from '@material-ui/core/Container';
import Typography from '../styles/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

//Components

import Constellations from '../components/constellations'
import withWidth from '@material-ui/core/withWidth';

//Assets 
import theme, {Colors} from '../theme'
import Attribute from '../components/attribute';

const mapSizesToProps = ({width, height}) => ({
    width: width?width:800,
  height: height?height:700,
});

const IndexPage = ({theme, data, width}) => (
  <Root maxWidth={false}>
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <HalfBox display="flex" flexDirection="column" justifyContent={width==='lg'?"center":"start"}>
            <Typography variant="h1" align='center'>
              April Gray
            </Typography>
            <Typography variant="subtitle1" component='h1' align='center'>
              Mobile/Web/Software
            </Typography>
            <Typography variant="subtitle1" component='h1' align='center'>
              Developer
            </Typography>
          </HalfBox>
        </Grid>
          <Grid item xs={12} md={6}>
            {/*<Title theme={theme} title="April Gray" subtitles={["Mobile/Web/Software", "Developer"]}/>*/}
            <StyledImg fluid={data.wolf.childImageSharp.fluid}/>
            <StyledConstellations {...mapSizesToProps(withSizes)}/>
            <Attribute href="https://unsplash.com/photos/wK_DZlAJJ_Q" author="Grégoire Bertaud" />
          </Grid>
    </Grid>
  </Root>
)

export default withWidth()(IndexPage)

export const query = graphql`
  query {
    wolf: file(relativePath: { eq: "wolf.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }`

const HalfBox = styled(Box)`
  height: 100%;

  ${theme.breakpoints.down('md')} {
    margin-top: 15%;
  }
`

const Root = styled(Container)`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(${Colors.primary} 0%,rgba(0,0,0,1) 70%);

    ${theme.breakpoints.up('md')} {
      background: linear-gradient(to right, ${Colors.primary} 0%,rgba(0,0,0,1) 50%);
    }
    /*media.desktop background: linear-gradient(to right, ${Colors.primary} 0%,rgba(0,0,0,1) 50%);*/
`;

const StyledConstellations = styled(Constellations)`
    display: none;
    right: 0;
    top: 0;

    ${theme.breakpoints.up('md')} {
      display: block;
    }
    
`

const StyledImg = styled(Img)`
    position: absolute !important;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    transform: scaleX(-1);
    overflow: visible !important;

    width: 100%;

    ${theme.breakpoints.up('md')} {
      width: 50%;
      height: 50%;
    }
`;