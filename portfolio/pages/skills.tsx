import { skill } from "../constant";
import ListItems from "../component/atoms/ListItems";

export default function Skills() {
  return (
    <ListItems
      title="기술 스택"
      contents={Object.entries(skill).map(([title, description]) => ({
        title,
        description,
      }))}
    />
  );
}
