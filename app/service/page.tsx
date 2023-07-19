'use client';
import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { urlForImage } from '@/lib/image';
import Image from 'next/image';
import { Chip } from '@mui/material';

const query = groq`
*[_type=="service"]{
 ...,
author->
}|order(_createAt desc)`;

type props = {
  query: string;
};

export default async function Service() {
  const services = await client.fetch(query);

  return (
    <div className="text-center items-center flex justify-center gap-5 flex-col mt-10 pt-10">
      <h1 className="font-bold text-3xl pb-2">Service</h1>
      <p className="">Here i am listing some servies i do for my clients.</p>
      <div className=" grid grid-cols-4 gap-10 md:grid-cols-2 px-4 bg-slate-200  rounded-lg place-items-center py-4">
        {services.map((service: any) => (
          <div
            key={service._id}
            className="rounded-xl bg-white w-48 "
          >
            {/*<Image
              src={urlForImage(service?.image?.asset?._ref).url()}
              alt=""
              width={50}
              height={50}
              className="rounded-sm w-full h-32 sm:h-48 object-cover object-center overflow-hidden md:py-2 md:mx-"
        />*/}

            <h2 className="mt-2 font-bold text-3xl">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
