

function Footer() { 
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-row justify-between px-4">
        <p>&copy; {new Date().getFullYear()} Filheim. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
} 

export default Footer;