import { toast } from "sonner";

import { IoCheckmarkCircleOutline, MdOutlineErrorOutline } from "@/icons";

export function toastSuccess(message: string) {
  toast(message, {
    icon: <IoCheckmarkCircleOutline className='text-2xl text-open' />,
  });
}

export function toastError(message: string) {
  toast(message, {
    icon: <MdOutlineErrorOutline className='text-2xl text-red-600' />,
    classNames:{
      title: "text-red-600",
      description: "text-red-600",
    }
  });
}