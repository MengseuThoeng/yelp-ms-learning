import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      

      <h1 className="text-3xl font-bold mb-4">Welcome to Yelp</h1>
      <p className="text-gray-600 mb-8 text-center">
        Discover the best places, restaurants, and services near you!
      </p>

      <Link 
        href="/oauth2/authorization/yelp"
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors duration-200"
      >
        Log in
      </Link>
    </main>
  );
}
