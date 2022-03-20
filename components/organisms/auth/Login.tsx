
import Input from "components/atoms/Input/Input";
import Image from "next/image";
import Logo from "assets/images/png/Landlord.png";


const LoginLayout = () => {
    return (
        <div className="d-flex flex-column bg-white shadow rounded">
          <div className="d-flex align-items-center justify-content-center flex-column bg-light py-4">
            <Image width="50" height="50" src={Logo} />
            <span>Landord studio</span>
          </div>
          <div className="p-4">
          <Input />
          <Input />
          </div>
          <div className="d-flex  btn-primary ">
              <button style={{minHeight: '4pc'}} className="btn btn-primary w-100 h-100">Login</button>
          </div>
        </div>
    )
}


export default LoginLayout