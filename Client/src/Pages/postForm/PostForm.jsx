import React, {useState, useContext} from 'react'
import { IonButton, IonTextarea, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonToggle, IonCard } from '@ionic/react';
import axios from 'axios'
import './postForm.css';
import Header from '../../Components/Header/Header';
import { Context } from '../../Context/Context';


export default function PostForm() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const { user } = useContext((Context))

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc 
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  }
  return (
    <>
    <Header />
    <div className="PostForm" onSubmit={handleSubmit}> 
        <form className='postForm'>
        <IonCard> 
          <IonInput 
            className='postTitle' 
            placeholder= "I could Fly" 
            spellcheck='true' required 
            onIonChange={e=> setTitle(e.target.value)}
            >
            Title:
          </IonInput>
          <IonTextarea 
            className='postText' 
            placeholder="Last night I dreamt that I was able to fly. What did I do with my new powers you ask?" 
            spellcheck='true' 
            required
            onIonChange={e=> setDesc(e.target.value)}
            >
            The Dream:
          </IonTextarea>
          <div className='privateRow'>
          </div>
          <IonButton  className="postFormButton" color="dark" type="submit">SUBMIT</IonButton>
          </IonCard>
            </form>
          </div>
        </>
      )
    }
        
        // <div className="emojis"> 
        //   <span id='Nightmare'><i className="fas fa-book-dead dreamCategories"></i></span>
        //   <span id='Sad'><i className="fas fa-cloud-rain dreamCategories"></i></span>
        //   <span id='Sexy'><i className="far fa-grin-stars dreamCategories"></i></span>
        //   <span id='Happy'><i className="fas fa-sun dreamCategories"></i></span>
        //   </div>