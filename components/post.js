import postData from '../data/post.json';
import Image from 'next/image';

const Post = () => {
  const post = postData[0]; // Assuming there's only one post for now

  return (
    <div className="w-full bg-white shadow-lg rounded-lg mx-4 my-3">
      <div className="flex items-start px-4 py-6">
        <Image className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="/1.jpg" alt="avatar" width={600} height={400} />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900 -mt-1">{post.author}</h2>
            <small className="text-sm text-gray-700">{post.timestamp}</small>
          </div>
          <p className="text-gray-700 text-xs">Joined {post.joined}</p>
          <p className="mt-3 text-gray-700 text-sm">{post.content}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex mr-2 text-gray-700 text-sm mr-3">
              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <span>{post.likes}</span>
            </div>
            
            <div className="flex mr-2 text-gray-700 text-sm mr-8">
              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
              </svg>
              <span>{post.comments}</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-4">
              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
              </svg>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
