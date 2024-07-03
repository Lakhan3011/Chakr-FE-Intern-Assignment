import { people } from "@/people";
import { columns } from "./columns";
import { PeopleDataTable } from "@/components/data-table";

type Props = {};
export default async function People(props: Props) {
  return (
    <div className="container mx-auto py-10">
      <PeopleDataTable columns={columns} data={people} />
    </div>
  );
}
