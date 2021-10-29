import {useState, useEffect} from 'react'

import axios from 'axios'

import './Form.css'

export default function Form() {
    const [userMember, setUserMember] = useState([])
    const [username, setUserName] = useState()

    const handleUserName = e => {
        setUserName(e)
      }

    const getData = async () => {
            const resData = await axios.get(
            `${process.env.REACT_APP_API_ROUTE}/user`
            )
            setUserMember(resData.data)
    }
    useEffect(() => {
      getData()
    }, [])

    const handleSubmit = async e => {
    const postData = await axios
        .post(`${process.env.REACT_APP_API_ROUTE}/user`, {
        name: username
        }) 
        getData()
    }


    return (
        <div className="form">
            <h2 className="form-h2">Ajouter un(e) Argonaute</h2>
            <form class="new-member-form">
                <input className="form-input" id="name" name="name" type="text" placeholder="Entrez le nom ici" onChange={e => handleUserName(e.target.value)}/>
                <button onClick={handleSubmit} className='submitButton'>Envoyer</button>
            </form>

            <h2 className="form-h2">Membres de l'équipage</h2>
            <section class="member-list">
                {userMember ?
                userMember.map((memb, index) => (
                    <div class="member-item" key={index}>{memb.name}</div>
                ))
            : null
            }
            </section>
        </div>
    )
}
