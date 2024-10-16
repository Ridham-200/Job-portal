import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  return (
    <div>
      <Navbar />
      <div>
        <form action="">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              //   value={input.fullname}
                name="fullname"
              //   onChange={changeEventHandler}
              placeholder="patel"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              //   value={input.email}
                name="email"
              //   onChange={changeEventHandler}
              placeholder="patel@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              //   value={input.phoneNumber}
                name="phoneNumber"
              //   onChange={changeEventHandler}
              placeholder="8080808080"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              //   value={input.password}
                name="password"
              //   onChange={changeEventHandler}
              placeholder="patel@gmail.com"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  //   checked={input.role === "student"}
                  //   onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  //   checked={input.role === "recruiter"}
                  //   onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                // onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
            </div>
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
