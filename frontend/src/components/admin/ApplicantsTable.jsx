import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';

const shortlistingStatus = ['Accepted', 'Rejected'];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const sortedApplicants = applicants?.applications
    ?.slice()
    .sort((a, b) => {
      if (a.status === 'Pending' && b.status !== 'Pending') return -1;
      if (a.status !== 'Pending' && b.status === 'Pending') return 1;
      return 0;
    });

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
      <Table className="w-full border-collapse">
        <TableCaption className="text-gray-500">
          A list of your recent applied users
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="py-3 font-semibold">Full Name</TableHead>
            <TableHead className="py-3 font-semibold">Email</TableHead>
            <TableHead className="py-3 font-semibold">Contact</TableHead>
            <TableHead className="py-3 font-semibold">Resume</TableHead>
            <TableHead className="py-3 font-semibold">Status</TableHead>
            <TableHead className="py-3 text-right font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedApplicants &&
            sortedApplicants.map((item, index) => (
              <TableRow
                key={item._id}
                className={`transition-colors ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100`}
              >
                <TableCell className="py-3">{item?.applicant?.fullname}</TableCell>
                <TableCell className="py-3">{item?.applicant?.email}</TableCell>
                <TableCell className="py-3">{item?.applicant?.phoneNumber}</TableCell>
                <TableCell className="py-3">
                  {item.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 hover:underline cursor-pointer"
                      href={item?.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    <span className="text-gray-500">NA</span>
                  )}
                </TableCell>
                <TableCell
                  className={`py-3 font-medium ${
                    item.status === 'Accepted'
                      ? 'text-green-600'
                      : item.status === 'Rejected'
                      ? 'text-red-600'
                      : 'text-yellow-600'
                  }`}
                >
                  {item.status || 'Pending'}
                </TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger className="p-2 rounded-full hover:bg-gray-200 transition">
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-36 shadow-lg border border-gray-200 rounded-lg p-2">
                      {shortlistingStatus.map((status, index) => (
                        <div
                          onClick={() => statusHandler(status, item._id)}
                          key={index}
                          className="flex items-center p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                        >
                          <span
                            className={
                              status === 'Accepted'
                                ? 'text-green-600'
                                : 'text-red-600'
                            }
                          >
                            {status}
                          </span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
