import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CompaniesTable() {
  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
      <Table className="w-full border-collapse">
        <TableCaption className="text-gray-500">
          A list of your recent registered companies
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="py-3">Logo</TableHead>
            <TableHead className="py-3">Name</TableHead>
            <TableHead className="py-3">Date</TableHead>
            <TableHead className="py-3 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company, index) => (
            <TableRow
              key={company._id}
              className={`transition-colors ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <TableCell className="py-3">
                <Avatar>
                  <AvatarImage src={company.logo} />
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{company.name}</TableCell>
              <TableCell className="text-gray-600">
                {company.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger className="p-2 rounded-full hover:bg-gray-200 transition">
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-36 shadow-lg border border-gray-200 rounded-lg p-2">
                    <div
                      onClick={() => navigate(`/admin/companies/${company._id}`)}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                    >
                      <Edit2 className="w-4 text-purple-600" />
                      <span className="text-sm">Edit</span>
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
}

export default CompaniesTable;
