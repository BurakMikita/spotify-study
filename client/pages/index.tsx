
import MainLayout from '@/layouts/MainLayout'
import { ReduxProvider } from '@/store/provider'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
    <MainLayout>
                 <div className="center">
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                </div>
      
    </MainLayout>
    
            

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                `}
            </style>
          
    </>
  )
}
