import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import img from './../../image/KXDSzDxhoL8.jpg'



class Users extends React.Component{

        componentDidMount() {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                this.props.setUsers(response.data.items)
            })
        }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : img} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Отписаться</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Подписаться</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;