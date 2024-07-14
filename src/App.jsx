import PostCreate from './PostCreate';
import PostList from "./PostList";

const App = () => {
  return (
    <div className="m-auto p-4">
      <div className='bg-yellow-400 p-4'>
        <h1>Create Post</h1>
        <PostCreate />
      </div>
      <hr />
      <div className="bg-gray-400 p-4">
        <h1>Posts</h1>
        <PostList />
      </div>
    </div>
  );
};
export default App;
