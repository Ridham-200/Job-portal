import React, { useEffect, useState } from 'react';
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
import { Eye, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByText) return true;
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
      <Table className="w-full border-collapse">
        <TableCaption className="text-gray-500">
          A list of your recently posted jobs
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="py-3 font-semibold">Company Name</TableHead>
            <TableHead className="py-3 font-semibold">Role</TableHead>
            <TableHead className="py-3 font-semibold">Date</TableHead>
            <TableHead className="py-3 text-right font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs?.map((job, index) => (
            <TableRow
              key={job._id}
              className={`transition-colors ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-gray-100`}
            >
              <TableCell className="py-3">{job?.company?.name}</TableCell>
              <TableCell className="py-3">{job?.title}</TableCell>
              <TableCell className="py-3 text-gray-600">
                {job?.createdAt.split('T')[0]}
              </TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger className="p-2 rounded-full hover:bg-gray-200 transition">
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-36 shadow-lg border border-gray-200 rounded-lg p-2">
                    <div
                      onClick={() =>
                        navigate(`/admin/jobs/${job._id}/applicants`)
                      }
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                    >
                      <Eye className="w-4 text-blue-600" />
                      <span className="text-sm">Applicants</span>
                    </div>
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

export default AdminJobsTable;
