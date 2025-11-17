import sidebarIcon from '../../icons/navbar-icon.png'; 

// The Sidebar icon i added the code to header?? Trying to link its path correctly was a bit if a struggle
export default function SidebarIcon() {
  return (
    <img 
      src={sidebarIcon} 
      alt="Sidebar Navigation Icon" 
      className="w-12 h-auto rounded-lg shadow-inner bg-white p-1 transition duration-200 hover:scale-105" 
    />
  );
}