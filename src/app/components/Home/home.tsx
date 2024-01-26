"use client";
import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";
import { IQueryParams } from "@/app/global/mock/interfaces/request.interface";
import { SERVER_ERROR } from "@/app/global/mock/message.mock";
import { IAlertType } from "@/app/global/mock/constant.mock";
import { getProperties } from "@/app/services/properties.service";

interface DataType {
  id: number;
  name: string;
  country: string;
  state: string;
  phone: string;
  email: string;
}

const HomePage = () => {
  const { Search } = Input;
  const [properties, setProperties] = useState<any>([]);
  const [alertMessage, setAlertMessage] = useState<IAlertType | null>(null);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  const getProperty = async (key: any = "page") => {
    try {
      const isFiltering = key === "filter";
      const reset = isFiltering || currentPage === 1;
      let filter = {}
      if (searchText && searchText.length > 0) {
        filter = [
          { name: searchText },
          { city: searchText },
          { state: searchText }
        ]
      }
      const queryParams: IQueryParams = {
        filter: JSON.stringify(filter),
      };
      const response: any = await getProperties({
        data: queryParams,
      });
      if (!response || !response.hasOwnProperty("status")) {
        return setAlertMessage({
          message: response.message || SERVER_ERROR,
          type: "error",
        });
      }
      const status = Number(response.status);
      switch (status) {
        case 200: {
          const properties = response?.data?.data.map((property: any) => {
            return {
              ...property,
              key: property._id,
            };
          });
          setProperties(properties);

          const pagination = response.data.pagination;
          if (reset) {
            setCurrentPage(1);
            setTotal(pagination.total);
          }
          break;
        }
        case 401:
          setAlertMessage({
            message: response.message || SERVER_ERROR,
            type: "error",
          });
          break;
      }
    } catch (err) {
      console.log(err);
      setAlertMessage({
        message: SERVER_ERROR,
        type: "error",
      });
    }
  };

  useEffect(() => {
    getProperty();
  }, [currentPage, searchText]);

  const handleClick = (customerId: any) => {
    router.push(`detail/${customerId}`);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <p
          onClick={() => handleClick(record.id)}
          className="cursor-pointer text-red-500"
        >
          {record?.name}
        </p>
      ),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
  ];

  const onSearch = (value: string) => {
    setSearchText(value);
    setCurrentPage(1);
  };
  return (
    <div className="h-full w-full px-4">
      <div className="flex items-center justify-center py-10">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 400 }}
        />
      </div>
      <Table columns={columns} dataSource={properties} size="large" />
    </div>
  );
};

export default HomePage;
