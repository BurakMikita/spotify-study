import React, { useState } from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import styles from '../styles/TrackItem.module.scss'
import {Delete, FlashOnTwoTone, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";
import {playRedur, setActive,
     }from "../store/reducers/playerReducer"
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/store/reducers';
import { fetchDeletUser } from '@/store/reducers/actionCreators';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const distpatch = useDispatch<AppDispatch>()
    const { duration, currentTime } = useAppSelector((state)=> state.player)

    const play = (e: any) => {
        
        e.stopPropagation()
        distpatch(setActive(track))
        distpatch(playRedur())
    }

    const delet = (e: any)=> {
        e.stopPropagation()
        distpatch(fetchDeletUser(track._id))
    }


    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton  onClick={play} >
                {!active
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <img width={70} height={70} src={'http://localhost:5000/' + track.picture}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>{currentTime} / {duration}</div>}
            <IconButton onClick={delet} style={{marginLeft: 'auto'}}>
              
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;


