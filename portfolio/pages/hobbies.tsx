import { hobbyContents } from "../constant";
import ListItems from "../component/atoms/ListItems";

export default function Hobbies() {
  return <ListItems title="취미" contents={hobbyContents} />;
}
