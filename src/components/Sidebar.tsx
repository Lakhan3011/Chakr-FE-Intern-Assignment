"use client";

import UserItem from "./UserItem";
import {
  Warehouse,
  ScanSearch,
  CreditCard,
  Settings,
  ClipboardList,
  User,
  BellIcon,
  Building2,
  Goal,
  MessageSquare,
  CircleUser,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { group } from "console";

const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <CircleUser />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <ScanSearch />,
          text: "Prospects",
        },
        {
          link: "/",
          icon: <ClipboardList />,
          text: "Tasks",
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <BellIcon />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Workspace",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "People",
        },
        {
          link: "/",
          icon: <Building2 />,
          text: "Companies",
        },
        {
          link: "/",
          icon: <Goal />,
          text: "Opportunities",
        },
        {
          link: "/",
          icon: <Warehouse />,
          text: "Households",
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
                <CommandSeparator />
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;
