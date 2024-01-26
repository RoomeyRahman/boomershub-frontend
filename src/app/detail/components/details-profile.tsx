"use client";
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "../../../../styles/global.css";
import { useParams } from "next/navigation";
import { getSingleProperties } from "@/app/services/properties.service";

const ProfileSection = () => {
  const [dataSourse, setDataSourse] = useState<any>({});
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res: any = await getSingleProperties(slug, {});
      setDataSourse(res?.data?.data);
    };
    getData();
  }, []);

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-3 justify-center py-10">
      <div className="px-2">
        <div className="flex flex-row overflow-x-auto m-3 space-x-4 ">
          {dataSourse?.files &&
            dataSourse.files?.map((data: any, index: any) => (
              <div key={index}>
                <Image
                  width={200}
                  height={150}
                  src={data}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="px-2 border-[1px] rounded-lg ">
        <div className="flex items-center justify-center">
          <p className="text-lg font-semibold text-gray-700">
            Details 
          </p>
        </div>

        <div className="mt-5 mb-2">
          <div className="  text-sm font-semibold">
            <p>Name: {dataSourse?.name}</p>
            <p>City: {dataSourse?.city}</p>
          </div>
          <div className="  text-sm font-semibold">
            <p>Addrss: {dataSourse?.address}</p>
            <p>State: {dataSourse?.state}</p>
          </div>
          <div className=" text-sm font-semibold">
            <p>Country: {dataSourse?.country}</p>
            <p>Phone: {dataSourse?.phone}</p>
            <p>Capacity: {dataSourse?.capacity}</p>
          </div>
        </div>
      </div>
      <div className="items-center justify-center rounded-lg border-[1px]">
        <iframe
          title="Badda-Dhaka"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48070.29113355816!2d90.38831225581212!3d23.786279733038967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b71894d7cb%3A0x725a1e9ba77a8744!2sBadda%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1685200625110!5m2!1sen!2sbd"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ProfileSection;
