import { Link, Outlet } from "react-router";
import { Leaf } from "lucide-react";
import ScrollToTop from "../Components/ScrollToTop";

const AuthLayouts = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="p-12 bg-base-200">
        <Link to="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                প্রকৃতির বাজার
              </h1>

              <p className="text-sm text-muted-foreground -mt-1">
                খাঁটি ও প্রাকৃতিক পণ্য
              </p>
            </div>
          </div>
        </Link>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
