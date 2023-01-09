import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Helloworld from "components/Helloworld";
import {
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Alert,
  Button,
  ButtonGroup,
  Modal,IconButton,
  Popover,
  Box,
} from "@mui/material";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.unsplash.com/photo-1673232141234-889ed2cf341c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.unsplash.com/photo-1673199890697-ca3566baeb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.unsplash.com/photo-1673199890697-ca3566baeb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.unsplash.com/photo-1673199890697-ca3566baeb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.unsplash.com/photo-1673199890697-ca3566baeb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.unsplash.com/photo-1673199890697-ca3566baeb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" onDragStart={handleDragStart} role="presentation" />,
];


export default function Home() {
  return (
    <>
      helloworld 11111
      <div style={{
        marginLeft: '10vw',
        marginRight: '10vw',
        }}>
        <AliceCarousel 
          mouseTracking 
          items={items}                 
          responsive={{
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 4, itemsFit: "contain" },
          }} 
          disableDotsControls={true}
          renderPrevButton={({isDisabled}) =>{
            console.log({isDisabled, log:"prev button"})
            if (isDisabled) return (<></>)
            return(
                <IconButton 
                  color="primary"
                  sx={{
                    backgroundColor:"white",
                    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.33)',
                    "&:hover": { backgroundColor: "#FFF"}
                  }}
                  >
                  <ChevronLeftIcon />
                </IconButton>

            )
          }}
          renderNextButton={({isDisabled}) =>{
            console.log({isDisabled, log: 'next button'})
            if (isDisabled) return (<></>)
            return(
              <IconButton
              
              color="primary"
              sx={{
                backgroundColor:"white",
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.33)',
                "&:hover": { backgroundColor: "#FFF"}
              }}
              
              >
                <ChevronRightIcon />
              </IconButton>
            )
          }}
          />
      </div>
    </>
  );
}
