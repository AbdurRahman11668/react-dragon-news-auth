import logo from "../../../assets/logo.png";
import moment from 'moment';


const Header = () => {
    return (
        <div className="text-center space-y-3">
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;