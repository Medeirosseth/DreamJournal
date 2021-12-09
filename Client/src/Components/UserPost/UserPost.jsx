import React from 'react'
import { IonCard, IonText} from '@ionic/react'
import Header from '../Header/Header'
import './userPost.css'


export default function UserPost() {
  return (
    <>
    <Header />
    <div className="userPost">
      <IonCard className="userPost">
      <div className="postTitle">
        <div className="postBar">
        <div className="emoji"> <i className="fas fa-cloud-rain"></i></div>
        <div className="postDreamTitle">
          DREAAMMM TIITTTTLLLEE
        </div>
          <div className="date">11/11/11</div>
          <div className="delete"><i className="fas fa-times"></i></div>
          </div>
        </div>
        <div className="postDescription"> 
          <IonText >
            Ac tincidunt vitae semper quis lectus. Congue nisi vitae suscipit tellus mauris. 
            Sagittis eu volutpat odio facilisis. Cursus mattis molestie a iaculis at erat 
            pellentesque adipiscing. Nunc sed velit dignissim sodales ut eu sem integer. 
            Gravida rutrum quisque non tellus orci. Quis blandit turpis cursus in hac habitasse 
            platea dictumst quisque. Donec pretium vulputate sapien nec sagittis. Turpis massa 
            sed elementum tempus egestas sed sed risus pretium. Egestas erat imperdiet sed euismod 
            nisi porta lorem mollis. Et magnis dis parturient montes nascetur ridiculus mus mauris 
            vitae. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
            
          </IonText>
        </div>
        <div className='postPrivateRow'>
        </div>
      </IonCard>
      </div>
    </>
  )
}
