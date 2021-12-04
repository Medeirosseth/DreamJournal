import React from 'react'
import { IonCard, IonText, IonCardContent, IonLabel, IonToggle} from '@ionic/react'
import Header from '../Header/Header'
import './userEntry.css'


export default function UserEntry() {
  return (
    <>
    <Header />
    <div className="userEntry">
      <IonCard className="userEntry">
      <div className="entryTitle">
        <div className="entryBar">
        <div className="emoji"> <i class="fas fa-cloud-rain"></i></div>
        <div className="entryDreamTitle">
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
        <div className='entryPrivateRow'>
        </div>
      </IonCard>
      </div>
    </>
  )
}
