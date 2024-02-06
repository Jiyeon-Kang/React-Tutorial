import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "Kang Jiyeon",
        comment: "안녕하세요",
    },
    {
        name: "Yamada Taro",
        comment: "こんにちは",
    },
    {
        name: "James Parker",
        comment: "Hello",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;