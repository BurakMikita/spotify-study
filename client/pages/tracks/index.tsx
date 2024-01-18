import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useInput } from '@/hooks/useInput';




function index() {
  const router = useRouter()
  
const serch = useInput('')


  return (
    
    <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TextField
                     fullWidth
                     {...serch} />
                    <TrackList  serch={serch.value}/>
                </Card>
            </Grid>
        </MainLayout>
    
  )
}

export default index