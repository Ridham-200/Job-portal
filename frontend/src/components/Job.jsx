import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

function Job() {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">23 days ago</p>
        {/* <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p> */}
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage 
            src="https://tse1.mm.bing.net/th?id=OIP.afQdiNPi7rhMZnP6xqoyLwAAAA&pid=Api&P=0&h=180"
            // src={job?.company?.logo}
             />
          </Avatar>
        </Button>
        <div>
        <h1 className="font-medium text-lg">job?.company?.name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">job?.title</h1>
        <p className="text-sm text-gray-600">job?.description</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {/* {job?.position} */}
           Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          job?.jobType
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {/* {job?.salary} */}
         24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
        //   onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
}

export default Job;