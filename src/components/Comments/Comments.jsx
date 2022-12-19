import { useState, useCallback } from 'react'
import { APP } from 'utils/constants'

export default function Comment(podcastid) {
    const id = podcastid.podcastid;
  const [userDisplayName, setUserDisplayName] = useState('')
  const [body, setBody] = useState('')


  const handleSubmit = useCallback(
    async (e) => {
        e.preventDefault();
        fetch(`${APP.base}/api/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    userDisplayName: userDisplayName,
                    body: body,
                    podcast: id
                },
                
            }),
        });
    },
    [userDisplayName,body]
   
  );

  return (

    <div className="comments-form">
<form onSubmit={handleSubmit}>
      <input
        type="string"
        placeholder="İsminizi Girin"
        value={userDisplayName}
        onChange={(e) => setUserDisplayName(e.currentTarget.value)}
      ></input>
      <textarea
        name=""
        id=""
        value={body}
        onChange={(e) => setBody(e.currentTarget.value)}
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit">Yorumu Gönder</button>
    </form>
    </div>
    
  )
}
