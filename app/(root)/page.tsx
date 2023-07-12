"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { useEffect } from "react";
import { DataTable } from "@/components/payments/DataTable";
import { Payment, columns } from "@/components/payments/columns";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  // useEffect(() => {
  //   if (!isOpen) {
  //     onOpen();
  //   }
  // }, [isOpen, onOpen]);

  function getData(): Payment[] {
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
        name: "m",
      },
      {
        id: "a238ed52f",
        amount: 200,
        status: "pending",
        email: "m1@example.com",
        name: "m1",
      },
      {
        id: "728ed52f",
        amount: 300,
        status: "pending",
        email: "m2@example.com",
        name: "m2",
      },
    ];
  }

  const data = getData();

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default SetupPage;
