import React, { useEffect } from 'react';
import List from '../components/List';
import Navigation from '../components/Navigation';
import UserInfo from '../components/UserInfo';

import { useParams } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { searchRepositoriesAction } from '../actions/searchActions';

const UserPage = () => {

	const dispatch = useDispatch();
	const { username } = useParams();

	useEffect(() => {
        dispatch(searchRepositoriesAction({
        	query: "", 
        	username
        }));
        // eslint-disable-next-line
    }, [dispatch])

	return (
		<div className="user-page">
			<Navigation />
			<UserInfo />
			<List source="repositories" showAvatar={false} />
		</div>
	);
}

export default UserPage;
