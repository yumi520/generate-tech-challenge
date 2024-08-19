import "/Users/yumikochow/generate-tech-challenge/src/App.css"
import Logo from "../../assets/Home Page w/Group 56.svg"
import NotificationLogo from "../../assets/Home Page w 2/Solid/Status/Notification.svg"
import AccountLogo from "../../assets/Home Page w 3/Icon.svg"
import SettingsLogo from "../../assets/Home Page w 4/Solid/Interface/Settings-alt.svg"

function Nav() {
  return (
    <header className="mx-10 my-2">
      <nav className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
        <ul className="flex flex-col mt-4 text-xl lg:flex-row lg:space-x-8 lg:mt-0">
          <img src={Logo} alt="Movie Logo" className="w-auto h-12 mt-3"/>
          <li className="text-white"> <br/><bold className="text-cyan-300">Generate</bold>Movies </li>
        </ul>

        <ul className="flex grid-cols-5 justify-items-center gap-10 flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li className="text-cyan-300"> Home </li>
          <li className="text-white"> Movies </li>
          <li className="text-white"> Series </li>
          <img src={NotificationLogo} alt="Movie Logo"/>
          <img src={AccountLogo} alt="Movie Logo"/>
          <img src={SettingsLogo} alt="Movie Logo"/>
        </ul>

      </nav>
    </header>
  );
}

export default Nav;