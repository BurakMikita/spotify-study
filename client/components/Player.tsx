import React, {useEffect} from 'react';
import styles from '../styles/Player.module.scss'


import {ITrack} from "../types/track";
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { useDispatch,useSelector } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/store/reducers';
import {playRedur, pauseRedur, setActive,
    setDuration,setCurrentTime,setVolune, playerSlice  }from "../store/reducers/playerReducer"

let audio: HTMLAudioElement;

const Player = () => {
    
    const track: ITrack = {
        _id: "1", name:"track 1",artist: "sdf",text: "er",listens: 5,
        picture: "ewr",
        audio: "string",
        comments: [{  _id: "string",
        username: "string",
        text: "string"}]
}
const distpatch = useDispatch<AppDispatch>()
const {volume, pause, duration, currentTime ,active} = useAppSelector((state)=> state.player)


useEffect(() => {
    if (!audio) {
        audio = new Audio()
    } else {
        setAudio()
        play()

    }
}, [active])



const setAudio = () => {

    if(active){
    
 
    audio.src = "http://localhost:5000/" + active.audio
    audio.volume = volume / 100
    audio.onloadedmetadata = () => {
        distpatch(setDuration(Math.ceil(audio.duration))) 
    }
    audio.ontimeupdate = () => {
        distpatch(setCurrentTime(Math.ceil(audio.currentTime)))
    }
}
}

const play = () => {
    if (pause) {
        distpatch( playRedur())
        audio.play()
    } else {
        distpatch(pauseRedur())
        audio.pause()
    }
}




const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    distpatch(setVolune(Number(e.target.value)))
}

const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    distpatch(setCurrentTime(Number(e.target.value)))
}
if (!active) {
    return null
}
    return (
        <div className={styles.player}>
            
            <IconButton  onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track?.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
         
        </div>
    );
};

export default Player;