import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {postsUrl} from '../Token/Token';

const ShowPosts = () => {

    const [postList, setPostList] = useState([]);

    console.log(postList);

    const getPostList = () => {
        axios.get(postsUrl)
            .then(response => {
               setPostList(response.data.data)
            });
    }

    useEffect(() => {
        getPostList();
    },[])

    // const mapPostData = postList?.map = () => {
    //
    // }

    return (
        <h1>kupka</h1>
    )
}

export default ShowPosts;