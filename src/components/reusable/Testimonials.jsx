import react from "react";
import { Card , CardContent  } from "../ui/card";

const Testimonials = ({icon , head , sub , body , gradient })=>{ 
    return (
    <Card className="w-80 h-72 md:h-56 lg:h-56 bg-card hover:bg-muted/5 border flex-shrink-0 shadow-md ">
      <CardContent className="flex flex-col p-4 h-full">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${gradient} border border-lg text-white flex-shrink-0`}>
            <span className="font-heading font-bold">{icon}</span>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h2 className="font-heading text-paragraph font-bold">{head}</h2>
            <span className="font-body text-sm text-muted">{sub}</span>
          </div>
        </div>
        <div className="flex flex-col mt-6 flex-1 overflow-hidden ">
          <p className="font-body text-sm text-heading line-clamp-6">{body}</p>
        </div>
      </CardContent>
    </Card>
    )
}

export default Testimonials;