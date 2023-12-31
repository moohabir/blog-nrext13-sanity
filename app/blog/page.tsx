import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import BlogList from '../../components/BlogList';
import { Post } from '@/types';
import { Button } from '@mui/material';

const query = groq`
*[_type=="post"]{
 ...,
author->

}|order(_createAt desc)`;

type Props = {
  post?: Post[]; // Add a "?" to make the posts prop optional
};

export default async function Blog() {
  const posts = await client.fetch(query, { cache: 'no-store' });
  //const posts = await client.fetch(query);
  // const posts = await client.fetch(query, {}, { cache: 'no-store' });

  return (
    <div className="text-center mb-10 items-center flex justify-center gap-10 flex-col pt-10">
      <h1 className="text-3xl font-bold mb-5 mt.5 block">My blog posts</h1>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-8 mx-10 ">
        {posts.map((post: any) => (
          <BlogList
            key={post.title}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}
