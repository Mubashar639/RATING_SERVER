import React, { Component } from 'react'
import "./comment.css"
export default class Comment extends Component {
    render() {
        return (
            <div className="cmt-area">

            <div className="comment-r">
                
                <div className="comment-area">
                    <div className="cmt-user">ali</div>
                    <div className="cmt-cmt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, qui doloribus! Cupiditate odit velit id, ad, sequi impedit fuga fugit aperiam harum ullam pariatur suscipit soluta fugiat non veniam tenetur?</div>
                </div>
                <textarea className="comment-new" name="" placeholder="write your comment here" id="" cols="30" rows="3"></textarea>
            </div>
            </div>
        )
    }
}
