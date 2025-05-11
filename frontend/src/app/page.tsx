import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Next.js + Tailwind CSS +</span>
          <span className="block text-blue-600 dark:text-blue-400">MongoDB</span>
        </h1>
        
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
          A modern web application stack for building powerful, scalable applications.
        </p>
        
        <div className="mt-10">
          <Link 
            href="/dashboard" 
            className="btn btn-primary mx-2"
          >
            Get Started
          </Link>
          
          <Link 
            href="/docs" 
            className="btn btn-secondary mx-2"
          >
            Documentation
          </Link>
        </div>
      </div>
      
      <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl">
        <FeatureCard 
          title="Next.js"
          description="The React framework for production that gives you the best developer experience."
          icon="📱"
        />
        <FeatureCard 
          title="Tailwind CSS"
          description="A utility-first CSS framework for rapidly building custom user interfaces."
          icon="🎨"
        />
        <FeatureCard 
          title="MongoDB"
          description="A document database with the scalability and flexibility you need."
          icon="🔋"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-500 dark:text-gray-300">{description}</p>
    </div>
  );
}
