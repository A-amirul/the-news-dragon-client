import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../../Home/Home/NewsCard';

const Category = () => {
	const { id } = useParams();
	const categoryNews = useLoaderData();
	return (
		<div className='mt-3'>
			{id && <h2>Category News: {categoryNews.length}</h2>}

			{
				categoryNews.map(news => <NewsCard
				
					key={categoryNews._id}
					news={news}
				></NewsCard>)
			}
		</div>
	);
};

export default Category;