import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

function AppliedJobTable() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].length <= 0 ? (
            <span>You haven't applied any job yet.</span>
          ) : (
            [1, 2, 3, 4].map((item, index) => (
              <TableRow key={index}>
                <TableCell>17-7-24</TableCell>
                <TableCell>frontend developer</TableCell>
                <TableCell>google</TableCell>
                <TableCell className="text-right">
                  <Badge
                    // className={`${
                    //   appliedJob?.status === "rejected"
                    //     ? "bg-red-400"
                    //     : appliedJob.status === "pending"
                    //     ? "bg-gray-400"
                    //     : "bg-green-400"
                    // }`}
                  >
                    {/* {appliedJob.status.toUpperCase()} */}
                    selected
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobTable;
