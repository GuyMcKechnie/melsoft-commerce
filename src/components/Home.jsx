import MainContentImage from '../components/Image/MainContentImage';

export default function Home() {
  return (
    // Home page container 
    <div className="bg-gray-50 min-h-screen pt-4 pb-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 my-8 tracking-tight">
        Discover Our Latest Products
      </h1>
      
      <MainContentImage /> 

      <div className="text-center mt-10">
        <p className="text-gray-600">Home - where all your needs are met with one click of a button.</p>
      </div>
    </div>
  );
}