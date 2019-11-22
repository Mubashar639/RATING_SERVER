import React, { Component } from 'react'
import "./comment.css"
export default class Comment extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="cmt-area">

            <div className="comment-r">
                <h1>User Comments</h1>
                    {this.props.comment && this.props.comment.map( (item , key) => {
                        return(
                            <div key={key} className="comment-area">
                            <div className="cmt-user">{item.user}</div>
                            <div className="cmt-cmt">{item.massage}</div>
                            </div>
                        )
                    })}
            </div>
            </div>
        )
    }
}
