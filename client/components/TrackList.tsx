import React, { useEffect } from 'react';
import {ITrack} from "../types/track";
import { Box, Grid } from '@mui/material';
import TrackItem from './TrackItem';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/store/reducers';
import { fetchUsers } from '@/store/reducers/actionCreators';


interface ITrackListProps  {
    serch: string
}


const TrackList: React.FC<ITrackListProps> = ({serch = ""}) => {
    const distpatch = useDispatch<AppDispatch>()

    const {tracks} = useAppSelector((state)=> state.track)
    const {active} = useAppSelector((state)=> state.player)
    useEffect(()=> {
        distpatch(fetchUsers(serch))
    })
    return (
        <Grid container direction="column">
            <Box p={2}>

                {  tracks.map(track =>
                    <TrackItem
                    active={active?._id === track._id}
                        key={track._id}
                        track={track}
                    /> 
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;